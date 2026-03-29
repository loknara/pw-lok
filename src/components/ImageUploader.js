import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './ImageUploader.scss';

function ImageUploader({ onImageUploaded, currentImage }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState(currentImage || '');

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    setError('');
    setUploading(true);

    try {
      // Create a unique filename
      const timestamp = Date.now();
      const filename = `blog-images/${timestamp}-${file.name}`;
      const storageRef = ref(storage, filename);

      // Upload the file
      console.log('Uploading image to Firebase Storage...');
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log('Image uploaded successfully:', downloadURL);

      setPreviewUrl(downloadURL);
      onImageUploaded(downloadURL);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Failed to upload image: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-uploader">
      <div className="upload-area">
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleFileSelect}
          disabled={uploading}
          style={{ display: 'none' }}
        />
        <label htmlFor="image-upload" className={`upload-button ${uploading ? 'uploading' : ''}`}>
          <CloudUploadIcon />
          <span>{uploading ? 'Uploading...' : 'Upload Image'}</span>
        </label>
        
        {error && <p className="upload-error">{error}</p>}
      </div>

      {previewUrl && (
        <div className="image-preview">
          <img src={previewUrl} alt="Preview" />
          <p className="image-url">{previewUrl}</p>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;

