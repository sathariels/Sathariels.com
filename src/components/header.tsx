import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ANIMATION", href: "/animation" },
    { name: "JOURNEY", href: "/journey" },
    { name: "ABOUT", href: "/about" }
  ];

  return (
    <header className="w-full py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between">
          <div className="flex-1"></div>
          
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <h1 className="text-2xl tracking-wider text-orange-400 font-medium hover:text-orange-500 transition-colors">
                SATHARIELS
              </h1>
            </Link>
          </div>
          
          <div className="flex-1 flex justify-end">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className={`text-sm tracking-wide transition-colors ${
                      location.pathname === item.href 
                        ? "text-gray-900" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-between">
          <Link to="/">
            <h1 className="text-xl tracking-wider text-orange-400 font-medium hover:text-orange-500 transition-colors">
              SATHARIELS
            </h1>
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className={`text-sm tracking-wide transition-colors block ${
                      location.pathname === item.href 
                        ? "text-gray-900" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}