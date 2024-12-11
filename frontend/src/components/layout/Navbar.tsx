import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">QRify</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </Link>
            <Button onClick={toggleTheme} variant="ghost" size="sm">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </Link>
            <Link to="/login" className="block px-3 py-2">
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/signup" className="block px-3 py-2">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}