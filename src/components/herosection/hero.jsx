import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isSlide, setIsSlide] = useState(false);

  useEffect(() => {
    setIsSlide(true);
  }, []);

  const styles = {
    global: {
      boxSizing: 'border-box',
    },
    body: {
      background: '#bbb',
      margin: '2rem',
    },
    sidle: {
      position: 'relative',
      width: '45%',
      margin: '0 auto',
      height: '300px', // Adjust the height as needed
      overflow: 'hidden', // Ensure no overflow of images
    },
    sidleImg: {
      width: '100%',
      transition: 'all 0.5s ease',
    },
    sidleImgSlide: {
      position: 'absolute',
      width: '100%',
      top: '0',
      left: '0',
    },
    sidleImgNotSlide: {
      width: '48%',
      display: 'inline-block',
    },
    '@media all and (max-width: 600px)': {
      body: {
        margin: '0',
      },
      sidle: {
        width: '100%',
      },
      sidleImg: {
        width: '100% !important',
        position: 'static',
        display: 'inline-block',
        WebkitClipPath: 'none !important',
      },
    },
  };

  return (
    <div style={styles.body}>
      <div id="sidle" style={styles.sidle} className={isSlide ? 'slide' : ''}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/elephant-2x.jpg" alt="Elephant" style={isSlide ? styles.sidleImgSlide : styles.sidleImgNotSlide} />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/orangutan-2x.jpg" alt="Orangutan" style={isSlide ? styles.sidleImgSlide : styles.sidleImgNotSlide} />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/baboon-2x.jpg" alt="Baboon" style={isSlide ? styles.sidleImgSlide : styles.sidleImgNotSlide} />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/parrot-2x.jpg" alt="Parrot" style={isSlide ? styles.sidleImgSlide : styles.sidleImgNotSlide} />
      </div>
    </div>
  );
};

export default Hero;
