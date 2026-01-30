import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900 border-t border-gray-800">
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
              <span className="text-green-500">🌱</span> Lk Supply
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering Sri Lanka's agriculture with technology, transparency, and trust. Connecting farmers to the nation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="transition-colors hover:text-green-400">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-green-400">About Us</Link></li>
              <li><Link to="/marketplace" className="transition-colors hover:text-green-400">Marketplace</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-green-400">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal (UPDATED) */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {/* 🔗 Linked to new pages */}
              <li><Link to="/privacy" className="transition-colors hover:text-green-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition-colors hover:text-green-400">Terms of Service</Link></li>
              <li><a href="#" className="transition-colors hover:text-green-400">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Subscribe (RESPONSIVE FORM) */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Stay Updated</h4>
            <p className="mb-4 text-sm text-gray-400">Get the latest market trends and supply alerts.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button 
                type="submit" 
                className={`w-full px-4 py-3 font-bold rounded-lg transition-all transform active:scale-95
                  ${subscribed 
                    ? 'bg-green-600 text-white cursor-default' 
                    : 'bg-white text-gray-900 hover:bg-green-500 hover:text-white'}`}
              >
                {subscribed ? '✅ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-gray-800 md:flex-row">
          <p className="text-sm text-center text-gray-500 md:text-left">
            © {new Date().getFullYear()} Lk Supply Chain. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social Icons Placeholder */}
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a key={social} href="#" className="text-sm text-gray-500 transition-colors hover:text-green-400">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;