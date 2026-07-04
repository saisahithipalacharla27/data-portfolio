import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "certifications",
    "contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            SS
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">
              Sai Sahithi
            </h1>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Data Analyst
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="!text-blue-600 dark:!text-blue-400"
              className="capitalize cursor-pointer font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
          {/* Resume Button */}
  <a
    href={`${import.meta.env.BASE_URL}sahithi palacharla_Data Analyst.pdf`}
    download
    className="ml-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
  >
     Download Resume
    
  </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-yellow-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:rotate-180"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-xl">

          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onClick={() => setMenuOpen(false)}
              activeClass="!text-blue-600 dark:!text-blue-400"
              className="block py-4 px-6 capitalize text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}

          <a
            href={`${import.meta.env.BASE_URL}myresume.pdf`}
            download
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-4 font-medium transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}

