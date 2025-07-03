import React from 'react';

/**
 * A generic footer component for a web application.
 * It displays a copyright notice and a name, styled with Tailwind CSS.
 * The footer is designed to be responsive and integrate cleanly into most layouts.
 */
const Footer = () => {
  // Get the current year dynamically for the copyright notice
  const currentYear = new Date().getFullYear();
  const myName = "Jake Pole"; // <<< Replace with your actual name

  return (
    <footer className="bg-gray-800 text-white p-6 mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright information */}
        <p className="text-sm">
          &copy; {currentYear} {myName}. All rights reserved.
        </p>

        {/* Optional: Add links or other content here if needed */}
        {/*
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;