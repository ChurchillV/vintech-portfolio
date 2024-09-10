import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-purple-900 text-white py-6 mt-12'>
      <div className='container mx-auto text-center'>
        <p className='text-xl mb-2 font-jersey'>
          Made with ❤️ in Ghana
        </p>
        <p className='text-sm font-jersey'>
          &copy; Vintech {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
