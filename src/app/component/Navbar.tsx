"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => setIsClick(!isClick);
  const closeNavbar = () => setIsClick(false);

  // Close navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isClick &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsClick(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClick]);

  return (
    <nav
      ref={navRef}
      className="bg-bluee dark:bg-violet-800 fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                <Image
                  width={10}
                  height={10}
                  src="/logo.svg"
                  alt="Sample Logo"
                  className="h-8 w-auto transition-all duration-300 filter dark:brightness-0 dark:invert"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/#Summary"
                className="text-black hover:bg-purple-800 hover:text-white rounded-lg p-1.5 dark:hover:bg-purple-400 dark:text-white dark:hover:text-black"
              >
                About Me
              </Link>

              <Link
                href="/#Projects"
                className="text-black hover:bg-purple-800 hover:text-white rounded-lg p-1.5 dark:hover:bg-purple-400 dark:text-white dark:hover:text-black"
              >
                Projects
              </Link>

              <Link
                href="/#Skills"
                className="text-black hover:bg-purple-800 hover:text-white rounded-lg p-1.5 dark:hover:bg-purple-400 dark:text-white dark:hover:text-black"
              >
                Skills
              </Link>

              <Link
                href="/#Contact"
                className="text-black hover:bg-purple-800 hover:text-white rounded-lg p-1.5 dark:hover:bg-purple-400 dark:text-white dark:hover:text-black"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/#Summary"
              onClick={closeNavbar}
              className="text-black block text-center hover:bg-purple-800 hover:text-white dark:hover:bg-purple-400 dark:text-white dark:hover:text-black rounded-lg p-1.5"
            >
              About Me
            </Link>

            <Link
              href="/#Projects"
              onClick={closeNavbar}
              className="text-black block text-center hover:bg-purple-800 hover:text-white dark:hover:bg-purple-400 dark:text-white dark:hover:text-black rounded-lg p-1.5"
            >
              Projects
            </Link>

            <Link
              href="/#Skills"
              onClick={closeNavbar}
              className="text-black block text-center hover:bg-purple-800 hover:text-white dark:hover:bg-purple-400 dark:text-white dark:hover:text-black rounded-lg p-1.5"
            >
              Skills
            </Link>

            <Link
              href="/#Contact"
              onClick={closeNavbar}
              className="text-black block text-center hover:bg-purple-800 hover:text-white dark:hover:bg-purple-400 dark:text-white dark:hover:text-black rounded-lg p-1.5"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
