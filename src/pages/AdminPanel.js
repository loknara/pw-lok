import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import RichTextEditor from '../components/RichTextEditor';
import ImageUploader from '../components/ImageUploader';
import { 
  createBlogPost, 
  getAllBlogPostsAdmin, 
  updateBlogPost, 
  deleteBlogPost 
} from '../helpers/blogHelpers';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../styles/AdminPanel.scss';

function AdminPanel() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Form states
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [status, setStatus] = useState('published');
  const [editingId, setEditingId] = useState(null);
  
  // Posts list
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        fetchPosts();
      }
    });
    
    return () => unsubscribe();
  }, []);

  const fetchPosts = async () => {
    console.log('=== FETCHING POSTS ===');
    const result = await getAllBlogPostsAdmin();
    console.log('Fetch result:', result);
    if (result.success) {
      console.log('Posts found:', result.posts.length);
      console.log('Posts:', result.posts);
      setPosts(result.posts);
    } else {
      console.error('Failed to fetch posts:', result.error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    console.log('=== LOGIN ATTEMPT ===');
    console.log('Email:', email);
    console.log('Auth object:', auth);
    console.log('Firebase config:', {
      apiKey: auth.app.options.apiKey ? '✓ Present' : '✗ Missing',
      authDomain: auth.app.options.authDomain,
      projectId: auth.app.options.projectId
    });
    
    try {
      console.log('Attempting to sign in...');
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful!', result.user.email);
    } catch (err) {
      console.error('=== LOGIN ERROR ===');
      console.error('Error code:', err.code);
      console.error('Error message:', err.message);
      console.error('Full error:', err);
      
      // More specific error messages
      let errorMessage = 'Invalid credentials. Please try again.';
      if (err.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email. Please check your email or create a user in Firebase Console.';
      } else if (err.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format. Please check your email.';
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed attempts. Please try again later.';
      } else if (err.code === 'auth/configuration-not-found' || err.code === 'auth/invalid-api-key') {
        errorMessage = 'Firebase is not configured correctly. Check your environment variables.';
      }
      
      setError(errorMessage);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setTitle('');
    setExcerpt('');
    setContent('');
    setTags('');
    setFeaturedImage('');
    setStatus('published');
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = {
      title,
      excerpt,
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      featuredImage,
      status
    };

    console.log('=== SAVING POST ===');
    console.log('Post data:', postData);
    console.log('Editing ID:', editingId);

    let result;
    if (editingId) {
      result = await updateBlogPost(editingId, postData);
    } else {
      result = await createBlogPost(postData);
    }

    console.log('Save result:', result);

    if (result.success) {
      alert(editingId ? 'Post updated successfully!' : 'Post created successfully!');
      resetForm();
      fetchPosts();
    } else {
      console.error('Save error:', result.error);
      alert('Error saving post: ' + result.error);
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setTags(post.tags ? post.tags.join(', ') : '');
    setFeaturedImage(post.featuredImage || '');
    setStatus(post.status);
    setEditingId(post.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const result = await deleteBlogPost(postId);
      if (result.success) {
        alert('Post deleted successfully!');
        fetchPosts();
      } else {
        alert('Error deleting post: ' + result.error);
      }
    }
  };

  if (loading) {
    return (
      <div className="admin-panel">
        <div className="admin-loading">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="admin-panel">
        <div className="admin-login">
          <div className="login-card">
            <h1>Admin Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Blog Admin Panel</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>

        <div className="admin-actions">
          <button
            onClick={() => {
              if (showForm) {
                resetForm();
              } else {
                setShowForm(true);
              }
            }}
            className="new-post-button"
          >
            {showForm ? 'Cancel' : '+ New Post'}
          </button>
        </div>

        {showForm && (
          <div className="admin-form">
              <h2>{editingId ? 'Edit Post' : 'Create New Post'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Excerpt *</label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    rows="3"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Featured Image</label>
                  <ImageUploader 
                    currentImage={featuredImage}
                    onImageUploaded={setFeaturedImage}
                  />
                  <p className="form-hint">Or paste an image URL below:</p>
                  <input
                    type="url"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="form-group">
                  <label>Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="technology, coding, tutorial"
                  />
                </div>

                <div className="form-group">
                  <label>Status</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Content *</label>
                  <RichTextEditor value={content} onChange={setContent} />
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-button">
                    {editingId ? 'Update Post' : 'Create Post'}
                  </button>
                  <button type="button" onClick={resetForm} className="cancel-button">
                    Cancel
                  </button>
                </div>
              </form>
          </div>
        )}

        <div className="admin-posts">
          <h2>All Posts ({posts.length})</h2>
          <div className="posts-list">
            {posts.map((post) => (
              <div key={post.id} className="post-item">
                <div className="post-info">
                  <h3>{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className={`status ${post.status}`}>{post.status}</span>
                    <span className="stats">
                      <VisibilityIcon fontSize="small" /> {post.viewCount || 0}
                    </span>
                  </div>
                </div>
                <div className="post-actions">
                  <button onClick={() => handleEdit(post)} className="edit-button">
                    <EditIcon />
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="delete-button">
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

