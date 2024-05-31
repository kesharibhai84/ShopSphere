import React from 'react';

const Marq = ({ mode }) => {
  return (
    <div>
      <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8 marquee-container" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <span className="marquee-text">Get free delivery on orders over ₹300</span>
      </p>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .marquee-container {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .marquee-text {
          display: inline-block;
          white-space: nowrap;
          position: absolute;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marq;
