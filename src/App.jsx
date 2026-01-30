import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// --- Components ---
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

// --- Pages ---
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Services from './pages/Services.jsx';
import Login from './pages/Login.jsx';
import Marketplace from './pages/Marketplace.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import LearnMorePage from './pages/LearnMorePage.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

// --- Dashboard ---
import DashboardLayout from './Dashboard/DashboardLayout.jsx';
import Overview from './Dashboard/Overview.jsx';
import StockManagement from './Dashboard/StockManagement.jsx';
import Reports from './Dashboard/Reports.jsx';
import Alerts from './Dashboard/Alerts.jsx';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showLayout = location.pathname !== '/login' && !location.pathname.startsWith('/dashboard');

  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // --- 1. NEW: SHARED MARKETPLACE PRODUCTS ---
  // We keep the products here so we can Add/Delete them permanently
  const [products, setProducts] = useState([
    { id: 1, name: "Bg 352 (Red Rice) Seeds", type: "seeds", price: "Rs. 450", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800", desc: "High-yield red rice seeds." },
    { id: 2, name: "Organic Chili Seeds", type: "seeds", price: "Rs. 150", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800", desc: "Spicy Sri Lankan chili." },
    { id: 3, name: "Compost Fertilizer 5kg", type: "fertilizer", price: "Rs. 850", image: "https://images.unsplash.com/photo-1622383563227-04401135d9e6?auto=format&fit=crop&q=80&w=800", desc: "100% organic compost." },
    { id: 4, name: "Urea Fertilizer 1kg", type: "fertilizer", price: "Rs. 1,200", image: "https://images.unsplash.com/photo-1628151016008-59c4b78696c7?auto=format&fit=crop&q=80&w=800", desc: "Nitrogen-rich fertilizer." },
    { id: 5, name: "Gotukola Plants", type: "plants", price: "Rs. 100", image: "https://images.unsplash.com/photo-1628151015690-34d284f6c429?auto=format&fit=crop&q=80&w=800", desc: "Fresh rooted plants." },
  ]);

  // Stocks Data & Activity Log
  const [stocks, setStocks] = useState([
    { id: 1, item: "Samba Rice", location: "Polonnaruwa", qty: "5000", status: "Good", category: "Rice" },
    { id: 2, item: "Carrots", location: "Nuware Eliya", qty: "450", status: "Critical", category: "Veg" },
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, action: "System Init", detail: "Dashboard loaded successfully", time: "Just now", status: "Success" }
  ]);

  const addActivity = (action, detail, status) => {
    setRecentActivities(prev => [{ id: Date.now(), action, detail, time: "Just now", status }, ...prev]);
  };

  const handleLogout = () => { setUser(null); navigate('/'); };
  const addToCart = (product) => setCartItems([...cartItems, product]);
  const removeFromCart = (index) => setCartItems(cartItems.filter((_, i) => i !== index));
  const clearCart = () => setCartItems([]);

  return (
    <div className="flex flex-col min-h-screen">
      {showLayout && <Navbar user={user} setUser={setUser} cartCount={cartItems.length} />}

      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* 🆕 THE 4 NEW ROUTES */}
          <Route path="/modern-farming" element={<LearnMorePage topic="modern-farming" />} />
          <Route path="/supply-chain" element={<LearnMorePage topic="supply-chain" />} />
          <Route path="/export-quality" element={<LearnMorePage topic="export-quality" />} />
          <Route path="/agri-tech" element={<LearnMorePage topic="agri-tech" />} />

          {/* 🔴 2. UPDATE MARKETPLACE ROUTE */}
          {/* We pass 'products', 'setProducts', and 'user' so we can do Admin stuff */}
          <Route path="/marketplace" element={
            <Marketplace
              addToCart={addToCart}
              products={products}
              setProducts={setProducts}
              user={user}
            />
          } />

          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout handleLogout={handleLogout} user={user}><Overview recentActivities={recentActivities} stocks={stocks} /></DashboardLayout>} />
          <Route path="/dashboard/stocks" element={<DashboardLayout handleLogout={handleLogout} user={user}><StockManagement stocks={stocks} setStocks={setStocks} addActivity={addActivity} /></DashboardLayout>} />
          <Route path="/dashboard/reports" element={<DashboardLayout handleLogout={handleLogout} user={user}><Reports addActivity={addActivity} /></DashboardLayout>} />
          <Route path="/dashboard/alerts" element={<DashboardLayout handleLogout={handleLogout} user={user}><Alerts stocks={stocks} addActivity={addActivity} /></DashboardLayout>} />
        </Routes>
      </div>

      {showLayout && <Footer />}
    </div>
  )
}

export default App;