import React, { useEffect } from 'react';
import throttle from 'lodash.throttle';

const styles = {
  container: {
    overflow: 'hidden',
    fontFamily: 'Montserrat, sans-serif'
  },
  background: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    overflow: 'hidden',
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    height: '130vh', // Adjusted height to account for parallax offset
    position: 'fixed',
    width: '100%',
    transition: 'all 1.2s cubic-bezier(0.22, 0.44, 0, 1)',
  },
  overlay: {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  contentWrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexFlow: 'column nowrap',
    color: '#fff',
    textTransform: 'uppercase',
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    transition: 'all 1.7s cubic-bezier(0.22, 0.44, 0, 1)',
  },
  contentTitle: {
    fontSize: '12vh',
    lineHeight: 1.4,
  },
};

const backgrounds = [
  {
    backgroundImage: 'url(https://i.postimg.cc/kXq9Qmnj/bgd1.jpg)',
    transform: 'translateY(-15vh)',
  },
  {
    backgroundImage: 'url(https://i.postimg.cc/W14vywqg/photo-1424746219973-8fe3bd07d8e3.jpg)',
  },
  {
    backgroundImage: 'url(https://i.postimg.cc/TY0xQ41T/photo-1433840496881-cbd845929862.jpg)',
  },
];

function Hero() {
  useEffect(() => {
    let ticking = false;
    const isFirefox = /Firefox/i.test(navigator.userAgent);
    const isIe = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent);
    const scrollSensitivitySetting = 30;
    const slideDurationSetting = 600;
    let currentSlideNumber = 0;
    const totalSlideNumber = document.querySelectorAll('.background').length;

    function parallaxScroll(evt) {
      let delta;
      if (isFirefox) {
        delta = evt.detail * -120;
      } else if (isIe) {
        delta = -evt.deltaY;
      } else {
        delta = evt.wheelDelta;
      }

      if (!ticking) {
        if (delta <= -scrollSensitivitySetting) {
          ticking = true;
          if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
          }
          slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
          ticking = true;
          if (currentSlideNumber !== 0) {
            currentSlideNumber--;
            previousItem();
          }
          slideDurationTimeout(slideDurationSetting);
        }
      }
    }

    function slideDurationTimeout(slideDuration) {
      setTimeout(() => {
        ticking = false;
      }, slideDuration);
    }

    function nextItem() {
      const previousSlide = document.querySelectorAll('.background')[currentSlideNumber - 1];
      if (previousSlide) {
        previousSlide.classList.remove('up-scroll');
        previousSlide.classList.add('down-scroll');
      }
    }

    function previousItem() {
      const currentSlide = document.querySelectorAll('.background')[currentSlideNumber];
      if (currentSlide) {
        currentSlide.classList.remove('down-scroll');
        currentSlide.classList.add('up-scroll');
      }
    }

    const mousewheelEvent = isFirefox ? 'DOMMouseScroll' : 'wheel';
    window.addEventListener(mousewheelEvent, throttle(parallaxScroll, 60), false);

    return () => {
      window.removeEventListener(mousewheelEvent, throttle(parallaxScroll, 60), false);
    };
  }, []);

  return (
    <div style={styles.container}>
      {backgrounds.map((bg, index) => (
        <section key={index} className="background" style={{ ...styles.background, ...bg }}>
          <div style={styles.overlay}></div>
          <div style={styles.contentWrapper}>
            <p style={styles.contentTitle}>
              {index === 0 && "Full Page Parallax Effect"}
              {index === 1 && "Cras lacinia non eros nec semper."}
              {index === 2 && "Etiam consequat lectus."}
            </p>
            <p>
              {index === 0 && "Scroll down and up to see the effect!"}
              {index === 1 && "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium."}
              {index === 2 && "Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus."}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Hero;
