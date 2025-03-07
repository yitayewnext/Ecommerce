//import globals from '../styles/globals.css'
import Image from 'next/image';
import { useState } from 'react';



export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Navbar */}
    <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <span className="font-semibold text-gray-800 text-2xl">YS</span>
              </a>
            </div>
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Admin Pannel</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</a>
              <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Login</a>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Home</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Shop</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Contact</a>
              <a href="#" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-2">Login</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">Welcome to YS</h1>
          <p className="text-xl text-white mb-8 animate-fade-in delay-100">Discover the latest trends in Cars and technology</p>
          <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 animate-fade-in delay-200">Shop Now</a>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image src="/Lamborghini.jpeg" alt="Lamborghini" width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Lamborghini</h3>
              <p className="text-gray-600 mb-4">$29.99</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Add to Cart</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image src="/Nissan.jpeg" alt="Nissan" width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nissan</h3>
              <p className="text-gray-600 mb-4">$49.99</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Add to Cart</button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image src="/Mazda.jpeg" alt="Mazda" width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mazda</h3>
              <p className="text-gray-600 mb-4">$99.99</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">YS</h3>
              <p className="text-gray-400">Your one-stop shop for the latest trends.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Shop</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: support@mys.com</p>
              <p className="text-gray-400">Phone: +251925377329</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}