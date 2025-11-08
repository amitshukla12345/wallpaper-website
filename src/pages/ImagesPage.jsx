import React, { useState } from 'react';
import Header from '../components/Header';
import './ImagesPage.css';

const ImagesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});

  // High-quality online images from Unsplash
  const images = [
    {
      id: 1,
      title: "Mountain Landscape",
      category: "Nature",
      description: "Beautiful mountain scenery with lakes and trees",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
    },
    {
      id: 2,
      title: "Modern Architecture",
      category: "Architecture",
      description: "Contemporary building design with clean lines",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop"
    },
    {
      id: 3,
      title: "Wildlife Photography",
      category: "Animals",
      description: "Close-up of wild animal in natural habitat",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1920&h=1080&fit=crop"
    },
    {
      id: 4,
      title: "Abstract Art",
      category: "Abstract",
      description: "Colorful abstract patterns and textures",
      image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&h=400&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1920&h=1080&fit=crop"
    },
    {
      id: 5,
      title: "Portrait Photography",
      category: "Portrait",
      description: "Professional portrait with natural lighting",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1920&h=1080&fit=crop"
    },
    {
      id: 6,
      title: "Travel Destination",
      category: "Travel",
      description: "Beautiful beach with crystal clear water",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop"
    },
    {
      id: 7,
      title: "Forest Pathway",
      category: "Nature",
      description: "Serene forest path surrounded by green trees",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&h=1080&fit=crop"
    },
    {
      id: 8,
      title: "City Skyline",
      category: "Architecture",
      description: "Urban cityscape during golden hour",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
      downloadUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=1080&fit=crop"
    }
  ];

  const categories = ["All", "Nature", "Architecture", "Animals", "Abstract", "Portrait", "Travel"];

  // Filter by category
  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  // Search functionality
  const searchedImages = filteredImages.filter(img => 
    img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle image loading
  const handleImageLoad = (imageId) => {
    setLoadingStates(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageError = (imageId) => {
    setLoadingStates(prev => ({ ...prev, [imageId]: 'error' }));
  };

  // Download function
  const handleDownload = async (imageUrl, imageTitle) => {
    try {
      // Show loading for this download
      setLoadingStates(prev => ({ ...prev, [`download-${imageTitle}`]: true }));
      
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${imageTitle.replace(/\s+/g, '_')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      setLoadingStates(prev => ({ ...prev, [`download-${imageTitle}`]: false }));
      
      alert(`"${imageTitle}" downloaded successfully! 🎉`);
    } catch (error) {
      console.error('Download failed:', error);
      setLoadingStates(prev => ({ ...prev, [`download-${imageTitle}`]: false }));
      alert('Download failed. Please try again.');
    }
  };

  const handleView = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="images-hero">
        <div className="images-container">
          <div className="images-content">
            <h1>Our Gallery</h1>
            <p>Explore our stunning collection of high-quality images and wallpapers for every occasion.</p>
            
            {/* Search Bar */}
            <div className="search-bar">
              <input 
                type="text"
                placeholder="🔍 Search images by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="gallery-main">
        <div className="images-container">
          
          {/* Category Filters */}
          <div className="category-filters">
            <h2>Browse by Category</h2>
            <div className="filter-buttons">
              {categories.map(category => (
                <button 
                  key={category} 
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Info */}
          <div className="results-info">
            <p>
              {searchTerm ? `Search results for "${searchTerm}" - ` : ''}
              Showing {searchedImages.length} {searchedImages.length === 1 ? 'image' : 'images'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
          </div>

          {/* Image Grid */}
          <div className="gallery-grid">
            {searchedImages.map(image => (
              <div key={image.id} className="gallery-item">
                <div className="image-card">
                  <div className="image-wrapper">
                    {/* Loading State */}
                    {!loadingStates[image.id] && loadingStates[image.id] !== 'error' && (
                      <div className="image-loading">Loading...</div>
                    )}
                    
                    {/* Error State */}
                    {loadingStates[image.id] === 'error' && (
                      <div className="image-error">
                        🖼️<br/>
                        <span>Failed to load image</span>
                      </div>
                    )}
                    
                    {/* Actual Image */}
                    <img 
                      src={image.image} 
                      alt={image.title}
                      onLoad={() => handleImageLoad(image.id)}
                      onError={() => handleImageError(image.id)}
                      onClick={() => handleView(image)}
                      style={{ 
                        display: loadingStates[image.id] === 'error' ? 'none' : 'block' 
                      }}
                    />
                  </div>
                  
                  <div className="image-info">
                    <h3>{image.title}</h3>
                    <span className="image-category">{image.category}</span>
                    <p>{image.description}</p>
                    <div className="image-actions">
                      <button 
                        className="download-btn"
                        onClick={() => handleDownload(image.downloadUrl, image.title)}
                        disabled={loadingStates[`download-${image.title}`]}
                      >
                        {loadingStates[`download-${image.title}`] ? 'Downloading...' : 'Download'}
                      </button>
                      <button 
                        className="view-btn"
                        onClick={() => handleView(image)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {searchedImages.length === 0 && (
            <div className="no-results">
              <h3>No images found</h3>
              <p>Try changing your search terms or select a different category</p>
            </div>
          )}

          {/* Image Modal */}
          {selectedImage && (
            <div className="image-modal" onClick={() => setSelectedImage(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="close-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
                <img src={selectedImage.downloadUrl} alt={selectedImage.title} />
                <div className="modal-info">
                  <h3>{selectedImage.title}</h3>
                  <span className="image-category">{selectedImage.category}</span>
                  <p>{selectedImage.description}</p>
                  <button 
                    className="download-btn large"
                    onClick={() => handleDownload(selectedImage.downloadUrl, selectedImage.title)}
                    disabled={loadingStates[`download-${selectedImage.title}`]}
                  >
                    {loadingStates[`download-${selectedImage.title}`] ? 'Downloading...' : 'Download High Quality'}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default ImagesPage;