import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navigationItems = [
  { label: "Home", path: "/", hasDropdown: false },
  {
    label: "Solutions",
    hasDropdown: true,
    dropdownItems: [
      { name: "Emerging & Rising Leaders", path: "/emergingandrisingleader" },
      { name: "Established Leaders", path: "/establishedleader" },
      { name: "HR Leaders", path: "/hrleader" },
      { name: "L&D Leaders", path: "/landleader" },
    ],
  },
  { label: "Case Study", path: "/use-case", hasDropdown: false },
  { label: "Pricing", path: "/pricing", hasDropdown: false },
  { label: "Contact Us", path: "/contact", hasDropdown: false },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // ⬇ THIS detects logged in state
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "py-2 shadow-md" : "py-5 sm:py-6"
      }`}
    >
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 transition-all duration-300 relative">
        
        {/* Logo */}
        <Link to="/">
          <img
            className={`object-cover transition-all duration-300 ${
              scrolled ? "w-24 sm:w-28 md:w-32" : "w-28 sm:w-32 md:w-36"
            }`}
            alt="Frontend logo"
            src="/frontend-logo-2.png"
          />
        </Link>

        {/* Navigation Links */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-2 sm:mt-0 relative"
          ref={dropdownRef}
        >
          {navigationItems.map((item, index) => (
            <div key={index} className="relative">
              {!item.hasDropdown ? (
                <Link
                  to={item.path}
                  className="font-medium text-[#111111] text-xs sm:text-sm md:text-base hover:text-[#f7ca45] transition"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="flex items-center gap-1 font-medium text-[#111111] text-xs sm:text-sm md:text-base hover:text-[#f7ca45] transition"
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`w-3 h-3 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {openDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-md w-52 z-50 animate-fadeIn">
                      {item.dropdownItems.map((drop, i) => (
                        <Link
                          key={i}
                          to={drop.path}
                          className="block px-4 py-2 text-sm text-[#111] hover:bg-[#f7ca45]/30 transition rounded-lg"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          {/* When logged OUT → show Login button */}
          {!isLoggedIn && (
            <Link to="/login">
              <Button className="h-auto px-3 sm:px-5 py-1.5 sm:py-2 bg-[#000000] text-white rounded-xl font-medium text-xs sm:text-sm md:text-base">
                Login
              </Button>
            </Link>
          )}

          {/* When logged IN → show Logout button */}
          {isLoggedIn && (
            <Button
              onClick={handleLogout}
              className="h-auto px-3 sm:px-5 py-1.5 sm:py-2 bg-red-500 text-white rounded-xl font-medium text-xs sm:text-sm md:text-base"
            >
              Logout
            </Button>
          )}

          <Link to="/pricing">
            <Button className="h-auto px-3 sm:px-5 py-1.5 sm:py-2 bg-[#f7ca45] text-[#111111] rounded-xl font-medium text-xs sm:text-sm md:text-base hover:bg-[#f7ca45]/90">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
