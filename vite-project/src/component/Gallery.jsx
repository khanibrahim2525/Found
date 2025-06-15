import React, { useState } from 'react';

const Gallery = ({ folders }) => {
  const [selectedFolder, setSelectedFolder] = useState('Folder1');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = folders[selectedFolder];

  const openModal = (item) => setSelectedImage(item);
  const closeModal = () => setSelectedImage(null);
 if (!folders || Object.keys(folders).length === 0) {
    return (
      <section id="gallery" className="page">
        <h2 className="gallery-title">Group Gallery</h2>
        <p>No gallery data available</p>
      </section>
    );
  }

  return (
    <section id="gallery" className="page active"> 
      <h2 className="gallery-title">Group Gallery</h2>

      <div className="folder-buttons">
        {Object.keys(folders).map((folder) => (
          <button
            key={folder}
            onClick={() => setSelectedFolder(folder)}
            className={folder === selectedFolder ? 'active' : ''}
          >
            {folder}
          </button>
        ))}
      </div>

      {images.length > 0 ? (
        <div className="gallery-grid">
          {images.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openModal(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="gallery-img"
              />
              <div className="caption">
                <h4>{item.title}</h4>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No images in this folder</p>
      )}

      {/* Modal remains the same */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage.img} alt={selectedImage.title} />
            <div className="modal-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;