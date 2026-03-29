import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  orderBy,
  increment,
  serverTimestamp,
  where
} from 'firebase/firestore';
import { db } from '../firebase';

// Collection reference
const BLOG_COLLECTION = 'blogPosts';

// Create a new blog post
export const createBlogPost = async (postData) => {
  try {
    console.log('Creating blog post in Firebase...');
    console.log('Collection:', BLOG_COLLECTION);
    console.log('Database:', db);
    
    const docRef = await addDoc(collection(db, BLOG_COLLECTION), {
      ...postData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      viewCount: 0,
      likeCount: 0,
      status: postData.status || 'published'
    });
    
    console.log('Post created successfully! ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('=== ERROR CREATING POST ===');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    return { success: false, error: error.message };
  }
};

// Get all published blog posts
export const getAllBlogPosts = async () => {
  try {
    console.log('Fetching published blog posts...');
    const q = query(
      collection(db, BLOG_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const posts = [];
    querySnapshot.forEach((doc) => {
      const postData = { id: doc.id, ...doc.data() };
      // Filter for published posts on the client side
      if (postData.status === 'published') {
        posts.push(postData);
      }
    });
    console.log(`Found ${posts.length} published posts`);
    return { success: true, posts };
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return { success: false, error: error.message, posts: [] };
  }
};

// Get all blog posts (including drafts) - for admin
export const getAllBlogPostsAdmin = async () => {
  try {
    console.log('Fetching all blog posts from Firebase...');
    console.log('Collection:', BLOG_COLLECTION);
    
    const q = query(
      collection(db, BLOG_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    
    console.log('Posts fetched:', posts.length);
    return { success: true, posts };
  } catch (error) {
    console.error('=== ERROR FETCHING POSTS ===');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    return { success: false, error: error.message, posts: [] };
  }
};

// Get a single blog post by ID
export const getBlogPost = async (postId) => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, post: { id: docSnap.id, ...docSnap.data() } };
    } else {
      return { success: false, error: 'Post not found' };
    }
  } catch (error) {
    console.error('Error getting blog post:', error);
    return { success: false, error: error.message };
  }
};

// Update a blog post
export const updateBlogPost = async (postId, updates) => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating blog post:', error);
    return { success: false, error: error.message };
  }
};

// Delete a blog post
export const deleteBlogPost = async (postId) => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return { success: false, error: error.message };
  }
};

// Increment view count
export const incrementViewCount = async (postId) => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    await updateDoc(docRef, {
      viewCount: increment(1)
    });
    return { success: true };
  } catch (error) {
    console.error('Error incrementing view count:', error);
    return { success: false, error: error.message };
  }
};

// Increment like count
export const incrementLikeCount = async (postId) => {
  try {
    const docRef = doc(db, BLOG_COLLECTION, postId);
    await updateDoc(docRef, {
      likeCount: increment(1)
    });
    return { success: true };
  } catch (error) {
    console.error('Error incrementing like count:', error);
    return { success: false, error: error.message };
  }
};

// Search blog posts by title or content
export const searchBlogPosts = (posts, searchTerm) => {
  if (!searchTerm) return posts;
  
  const lowerSearchTerm = searchTerm.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowerSearchTerm) ||
    post.excerpt.toLowerCase().includes(lowerSearchTerm) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)))
  );
};

// Filter blog posts by tag
export const filterBlogPostsByTag = (posts, tag) => {
  if (!tag || tag === 'all') return posts;
  
  return posts.filter(post => 
    post.tags && post.tags.includes(tag)
  );
};

// Get all unique tags from posts
export const getAllTags = (posts) => {
  const tagsSet = new Set();
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  return Array.from(tagsSet).sort();
};

