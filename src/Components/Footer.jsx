import React from 'react';

 const Footer = () => {
  return (
    <footer className="bg-neutral-700 shadow md:px-10 text-center overflow-x-hidden">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm font-poppins  sm:text-center text-gray-100 hover:underline">
          © 2020{' '}
          <a href="https://news.networktigers.com/" className="hover:underline font-poppins px-1">
            NetworkTigers, Inc.™ 
          </a>
        </span>

        <ul className="flex-wrap flex-1 flex justify-center md:justify-end mt-3 text-[0.80rem] font-normal text-gray-100 sm:mt-0">
          <li>
            <a href="https://news.networktigers.com/write-for-us/" className="block py-3 px-4">
              Write For Us
            </a>
          </li>
          <li>
            <a href="https://www.networktigers.com/pages/contact-us" className="block py-3 px-4">
              Contact Us
            </a>
          </li>
          <li>
            <a href="https://www.networktigers.com/pages/privacy-policy" className="block py-3 px-4">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.networktigers.com/pages/terms-of-use" className="block py-3 px-4">
              Terms
            </a>
          </li>
          <li>
            <a href="https://www.networktigers.com/pages/cookie-policy" className="block py-3 px-4">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer