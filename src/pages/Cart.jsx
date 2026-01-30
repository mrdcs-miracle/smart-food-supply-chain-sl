import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const navigate = useNavigate();
  
  // State for Payment Simulation
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Calculate Total Price
  const total = cartItems.reduce((acc, item) => {
    // Convert "Rs. 450" string to number 450
    const price = parseInt(item.price.replace(/[^0-9]/g, '')); 
    return acc + price;
  }, 0);

  // Handle Payment
  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate 2-second bank processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      clearCart(); // Clear the cart in App.jsx
    }, 2000);
  };

  // --- VIEW 1: EMPTY CART ---
  if (cartItems.length === 0 && !paymentSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
        <div className="flex items-center justify-center w-24 h-24 mb-6 text-4xl text-green-600 bg-green-100 rounded-full">
          🛒
        </div>
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="max-w-md mb-8 text-center text-gray-500">Looks like you haven't added any seeds or supplies yet.</p>
        <Link to="/marketplace">
          <button className="px-8 py-3 font-bold text-white transition-all bg-green-600 shadow-lg rounded-xl hover:bg-green-700 shadow-green-600/30">
            Browse Marketplace
          </button>
        </Link>
      </div>
    );
  }

  // --- VIEW 2: SUCCESS MESSAGE ---
  if (paymentSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-green-50">
        <div className="flex items-center justify-center w-24 h-24 mb-6 text-5xl text-green-600 bg-white rounded-full shadow-xl">
          ✅
        </div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800">Order Successful!</h2>
        <p className="mb-8 text-center text-green-700">Your seeds will be delivered within 3-5 business days.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 font-bold text-white transition-all bg-green-600 rounded-xl hover:bg-green-700"
        >
          Return Home
        </button>
      </div>
    );
  }

  // --- VIEW 3: CART & CHECKOUT ---
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container max-w-6xl px-4 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Shopping Cart ({cartItems.length} items)</h1>

        <div className="flex flex-col gap-8 lg:flex-row">
          
          {/* LEFT SIDE: ITEM LIST */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                {/* Image */}
                <div className="flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-100 rounded-lg">
                  <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                </div>
                
                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                  <p className="mt-1 font-bold text-green-600">{item.price}</p>
                </div>

                {/* Remove Button */}
                <button 
                  onClick={() => removeFromCart(index)}
                  className="p-2 text-gray-400 transition-colors rounded-full hover:text-red-500 hover:bg-red-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: CHECKOUT BOX */}
          <div className="lg:w-96">
            <div className="sticky p-6 bg-white border border-gray-100 shadow-lg rounded-2xl top-24">
              
              {!isCheckingOut ? (
                // --- STEP A: ORDER SUMMARY ---
                <>
                  <h2 className="mb-6 text-xl font-bold text-gray-800">Order Summary</h2>
                  <div className="mb-6 space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>Rs. {total}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between pt-3 text-lg font-bold text-gray-900 border-t">
                      <span>Total</span>
                      <span>Rs. {total}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-4 font-bold text-white transition-colors bg-gray-900 shadow-lg rounded-xl hover:bg-green-600"
                  >
                    Proceed to Checkout
                  </button>
                </>
              ) : (
                // --- STEP B: FAKE PAYMENT FORM ---
                <form onSubmit={handlePayment}>
                  <h2 className="mb-4 text-xl font-bold text-gray-800">Payment Details</h2>
                  
                  <div className="mb-6 space-y-4">
                    <div>
                      <label className="block mb-1 text-xs font-bold text-gray-500 uppercase">Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 border rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-green-500" required />
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <label className="block mb-1 text-xs font-bold text-gray-500 uppercase">Expiry</label>
                        <input type="text" placeholder="MM/YY" className="w-full p-3 border rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-green-500" required />
                      </div>
                      <div>
                        <label className="block mb-1 text-xs font-bold text-gray-500 uppercase">CVC</label>
                        <input type="text" placeholder="123" className="w-full p-3 border rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-green-500" required />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      type="button" 
                      onClick={() => setIsCheckingOut(false)}
                      className="flex-1 py-3 font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200"
                    >
                      Back
                    </button>
                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="flex-[2] py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors flex justify-center items-center"
                    >
                      {isProcessing ? 'Processing...' : `Pay Rs. ${total}`}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;