import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    { url: 'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg', title: 'Image 1' },
    { url: 'path/to/image2.jpg', title: 'Image 2' },
    { url: 'path/to/image3.jpg', title: 'Image 3' },
    { url: 'path/to/image4.jpg', title: 'Image 4' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out', // Easing function for transition
    fade: true // Enable fade effect
  };

  return (
    <Box sx={{ width: 'calc(100% - 50px)', margin: 'auto', position: 'relative' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img src={image.url} alt={image.title} style={{ width: '100%', height: '50%' }} />
            <Typography
              variant="h6"
              sx={{
                position: 'absolute',
                bottom: 10,
                left: 10,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px 10px',
              }}
            >
              {image.title}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
