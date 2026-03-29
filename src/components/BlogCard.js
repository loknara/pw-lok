import React from 'react';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './BlogCard.scss';

function BlogCard({ post, featured = false }) {
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Recently';
    
    // Handle Firestore Timestamp
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const estimateReadTime = (content) => {
    if (!content) return '5 min read';
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <article className={`blog-card ${featured ? 'featured' : ''}`}>
      <Link to={`/blog/${post.id}`} className="blog-card-link">
        {post.featuredImage && (
          <div className="blog-card-image">
            <img src={post.featuredImage} alt={post.title} loading="lazy" />
          </div>
        )}
        <div className="blog-card-content">
          {post.tags && post.tags.length > 0 && (
            <div className="blog-card-tags">
              {post.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="blog-card-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-excerpt">{post.excerpt}</p>
          
          <div className="blog-card-meta">
            <span className="blog-card-date">{formatDate(post.createdAt)}</span>
            <span className="blog-card-separator">·</span>
            <span className="blog-card-read-time">
              <AccessTimeIcon fontSize="small" />
              {estimateReadTime(post.content)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;

