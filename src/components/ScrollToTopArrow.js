import React, { useState, useEffect } from 'react';

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-purple-500 text-white text-3xl p-3 w-24 h-24 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
        >
          ⬆
        </button>
      )}
    </div>
  );
};

export default ScrollToTopArrow;
