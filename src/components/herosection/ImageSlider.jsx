import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    // { url: 'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg', title: 'Image 5' },
    { url: 'hero5.jpg', title: 'Image 1' },
    { url: 'hero6.jpg', title: 'Image 2' },
    { url: 'hero7.jpg', title: 'Image 3' },
    { url: 'hero8.jpg', title: 'Image 4' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ width: '90%', margin: 'auto', position: 'relative' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            display: index === currentIndex ? 'block' : 'none',
            position: 'relative',
          }}
        >
          <img src={image.url} alt={image.title} style={  { width: 'auto', height: '250px' }} />
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '5px 10px',
            }}
          >
            {image.title}
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              height: '10px',
              width: '10px',
              margin: '0 5px',
              backgroundColor: currentIndex === index ? '#717171' : '#bbb',
              borderRadius: '50%',
              display: 'inline-block',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
