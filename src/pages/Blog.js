import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import BlogSearch from '../components/BlogSearch';
import { getAllBlogPosts, searchBlogPosts, filterBlogPostsByTag, getAllTags } from '../helpers/blogHelpers';
import '../styles/Blog.scss';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    let result = posts;
    
    // Apply tag filter
    result = filterBlogPostsByTag(result, selectedTag);
    
    // Apply search
    result = searchBlogPosts(result, searchTerm);
    
    setFilteredPosts(result);
  }, [posts, searchTerm, selectedTag]);

  const fetchPosts = async () => {
    setLoading(true);
    const result = await getAllBlogPosts();
    if (result.success) {
      setPosts(result.posts);
      setFilteredPosts(result.posts);
      setTags(getAllTags(result.posts));
    }
    setLoading(false);
  };

  return (
    <div className="blog-page">
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">blog</h1>
          <p className="blog-subtitle">thoughts, ideas, and stories</p>
        </div>

        <BlogSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          tags={tags}
        />

        {loading ? (
          <div className="blog-loading">
            <div className="loading-spinner"></div>
            <p>Loading posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="blog-empty">
            <p>
              {posts.length === 0 
                ? "No blog posts yet. Check back soon!" 
                : "No posts found matching your search."}
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                featured={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;

