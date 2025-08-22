'use client'; // Required for client-side interactivity

import Link from 'next/link'; // Use Next.js Link for routing
import { useState } from 'react'; // For handling mobile menu state
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={closeMenu}
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            GABEGAZ
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only"></span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Dropdown Menu (Overlay) */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
              <ul className="flex flex-col font-medium">
                <li>
                  <Link
                    href="/portfolio"
                    className="block px-4 py-2 text-xl text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://medium.com/@gabegaz"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2 text-xl text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/gabegaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xl text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/gabegaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xl text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link
                href="/portfolio"
                className="text-xl text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="https://medium.com/@gabegaz"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 text-xl hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/gabegaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/gabegaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
