import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  // Handle form submission using fetch() to avoid page reload
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('idle');
    setError(null);

    const formData = new URLSearchParams();
    formData.append('form-name', 'newsletter');
    formData.append('email', email);

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        alert('Thank you for subscribing!');
      } else {
        setStatus('error');
        setError('There was an error. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setError('An error occurred while submitting your form.');
    }
  };

  return (
 <footer className="bg-amber-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand Section */}

          <div className="space-y-4">

            <Link to="/" className="block">

              <img

                src="https://static.wixstatic.com/media/c73eb8_5ded37571771414398447425ede54cf6~mv2.png"

                alt="Lucille's Sweetgrass Baskets"

                className="h-12 w-auto"

              />

            </Link>

            <p className="text-gray-600">

              Handcrafted with tradition, woven with love. Over 65 years of artistry in every basket.

            </p>

          </div>

         {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>

            <ul className="space-y-2">

              <li>

                <Link to="/" className="text-gray-600 hover:text-amber-600">Home</Link>

              </li>

              <li>

                <Link to="/collections" className="text-gray-600 hover:text-amber-600">Collections</Link>

              </li>

              <li>

                <Link to="/about" className="text-gray-600 hover:text-amber-600">About</Link>

              </li>

              <li>

                <Link to="/contact" className="text-gray-600 hover:text-amber-600">Contact</Link>

              </li>

              <li>

                <Link to="/order-lookup" className="text-gray-600 hover:text-amber-600">Order Lookup</Link>

              </li>

            </ul>

          </div>

        {/* Contact Info */}

          <div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>

            <ul className="space-y-3">

              <li className="flex items-center space-x-3">

                <Mail className="h-5 w-5 text-amber-600 flex-shrink-0" />

                <a

                  href="mailto:lucilles.sweetgrassbaskets@yahoo.com"

                  className="text-gray-600 hover:text-amber-600"

                >

                  lucilles.sweetgrassbaskets@yahoo.com

                </a>

              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              {/* Hidden field to define the form name */}
              <input type="hidden" name="form-name" value="newsletter" />
              
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Subscribe
              </button>
            </form>
            {status === 'error' && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>

        {/* Social Links & Copyright */}

        <div className="border-t border-gray-200 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <div className="flex space-x-6">

              <a

                href="https://facebook.com"

                target="_blank"

                rel="noopener noreferrer"

                className="text-gray-600 hover:text-amber-600"

              >

                <Facebook className="h-6 w-6" />

              </a>

              <a

                href="https://instagram.com"

                target="_blank"

                rel="noopener noreferrer"

                className="text-gray-600 hover:text-amber-600"

              >

                <Instagram className="h-6 w-6" />

              </a>

            </div>

            <p className="text-gray-600 text-sm">

              © {new Date().getFullYear()} Lucille's Sweetgrass Baskets. All rights reserved.{' '}

              Website designed by{' '}

              <a 

                href="https://www.sitesonpolaris.com" 

                target="_blank" 

                rel="noopener noreferrer"

                className="text-amber-600 hover:text-amber-700"

              >

                Sites on Polaris.

              </a>

            </p>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
