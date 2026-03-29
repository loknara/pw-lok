import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './BlogSearch.scss';

function BlogSearch({ searchTerm, setSearchTerm, selectedTag, setSelectedTag, tags }) {
  return (
    <div className="blog-search">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      {tags && tags.length > 0 && (
        <div className="tag-filter">
          <button
            className={`tag-button ${selectedTag === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedTag('all')}
          >
            All
          </button>
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogSearch;

