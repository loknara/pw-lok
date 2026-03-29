import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { getBlogPost, incrementViewCount, incrementLikeCount } from '../helpers/blogHelpers';
import '../styles/BlogPost.scss';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasLiked, setHasLiked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(0);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    const result = await getBlogPost(id);
    if (result.success) {
      setPost(result.post);
      setLocalLikeCount(result.post.likeCount || 0);
      // Increment view count
      await incrementViewCount(id);
    } else {
      console.error('Post not found');
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchPost();
    // Check if user has already liked this post
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    setHasLiked(likedPosts.includes(id));
  }, [id, fetchPost]);

  const handleLike = async () => {
    if (hasLiked) return;
    
    const result = await incrementLikeCount(id);
    if (result.success) {
      setHasLiked(true);
      setLocalLikeCount(prev => prev + 1);
      
      // Store in localStorage
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
      likedPosts.push(id);
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Recently';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = post?.title || '';
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareViaEmail = () => {
    const subject = post?.title || 'Check out this blog post';
    const body = `I thought you might find this interesting: ${window.location.href}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-loading">
          <div className="loading-spinner"></div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-error">
          <h2>Post not found</h2>
          <Link to="/blog" className="back-link">
            ← back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-container">
        <div className="blog-post-header">
          <Link to="/blog" className="back-link">
            ← back to blog
          </Link>
          
          <h1 className="blog-post-title">{post.title}</h1>
          
          <div className="blog-post-meta">
            <span className="blog-post-date">{formatDate(post.createdAt)}</span>
            <div className="blog-post-stats">
              <span className="stat">
                <VisibilityIcon fontSize="small" />
                {(post.viewCount || 0) + 1}
              </span>
              <span className="stat">
                <FavoriteIcon fontSize="small" />
                {localLikeCount}
              </span>
            </div>
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="blog-post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="blog-post-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.featuredImage && (
          <div className="blog-post-featured-image">
            <img src={post.featuredImage} alt={post.title} />
          </div>
        )}

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="blog-post-actions">
          <button
            className={`like-button ${hasLiked ? 'liked' : ''}`}
            onClick={handleLike}
            disabled={hasLiked}
          >
            {hasLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            {hasLiked ? 'Liked' : 'Like this post'}
          </button>
          
          <div className="share-buttons">
            <span className="share-label">Share:</span>
            <button onClick={shareOnLinkedIn} className="share-button" title="Share on LinkedIn">
              <LinkedInIcon />
            </button>
            <button onClick={shareOnTwitter} className="share-button" title="Share on Twitter">
              <TwitterIcon />
            </button>
            <button onClick={shareViaEmail} className="share-button" title="Share via Email">
              <EmailIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

