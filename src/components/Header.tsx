import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, Search, X, User, LayoutDashboard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { state, dispatch } = useCart();
  const { user } = useAuth();
  const isAdmin = user?.app_metadata?.role === 'admin';
  const itemCount = state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  // Common navigation links
  const navLinks = (
    <>
      <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
      <Link to="/collections" className="text-gray-700 hover:text-gray-900">Collections</Link>
      <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
      <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
      {isAdmin && (
        <Link
          to="/admin"
          className="text-gray-700 hover:text-gray-900"
          title="Admin Dashboard"
        >
          Admin Dashboard
        </Link>
      )}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://static.wixstatic.com/media/c73eb8_5ded37571771414398447425ede54cf6~mv2.png"
              alt="Lucille's Sweetgrass Baskets"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="text-gray-700 hover:text-gray-900 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <Link
              to={user ? '/dashboard' : '/auth'}
              className="text-gray-700 hover:text-gray-900"
            >
              <User className="h-6 w-6" />
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="text-gray-700 hover:text-gray-900"
                title="Admin Dashboard"
              >
                <LayoutDashboard className="h-6 w-6" />
              </Link>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-4 flex flex-col">
              {navLinks}
            </div>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white p-4 shadow-md">
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
