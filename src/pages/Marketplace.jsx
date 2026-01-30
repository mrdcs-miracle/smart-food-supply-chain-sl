import React, { useState } from 'react';

const Marketplace = ({ addToCart, products, setProducts, user }) => {
  
  const [category, setCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // --- 1. CHECK POWER PERMISSIONS ---
  const isPowerUser = user && (user.role === 'Manager' || user.role === 'Administrator');

  // --- 2. CRUD ACTIONS ---
  
  // DELETE
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to remove this item from the market?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // SAVE (Create or Update)
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
        id: editingItem ? editingItem.id : Date.now(),
        name: formData.get('name'),
        price: formData.get('price'),
        type: formData.get('type'),
        desc: formData.get('desc'),
        image: formData.get('image') || "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80"
    };

    if (editingItem) {
        // Update existing
        setProducts(products.map(p => p.id === newItem.id ? newItem : p));
    } else {
        // Add new
        setProducts([newItem, ...products]);
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const openAddModal = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  // Filter Logic
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.type === category);

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      
      {/* HERO SECTION */}
      <div className="relative py-16 text-center text-white bg-green-700">
        <h1 className="mb-2 text-4xl font-bold">Sri Lankan Agriculture Marketplace</h1>
        <p className="max-w-2xl mx-auto mb-6 text-green-100">
          Buy high-quality seeds, fertilizers, and plants directly from certified government suppliers.
        </p>

        {/* 🔴 POWER USER BUTTON: Add New Item */}
        {isPowerUser && (
            <button 
                onClick={openAddModal}
                className="flex items-center gap-2 px-6 py-2 mx-auto font-bold text-green-700 transition-all bg-white rounded-full shadow-lg hover:bg-green-50 hover:scale-105"
            >
                <span>+</span> Add New Product
            </button>
        )}
      </div>

      {/* CATEGORY TABS */}
      <div className="container relative z-10 px-4 mx-auto mb-12 -mt-8">
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-white shadow-lg rounded-xl">
          {['all', 'seeds', 'fertilizer', 'plants'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold capitalize transition-all
                ${category === cat 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
                <div key={product.id} className="relative overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm group rounded-2xl hover:shadow-xl">
                    
                    {/* 🔴 POWER USER CONTROLS (Edit/Delete) */}
                    {isPowerUser && (
                        <div className="absolute z-20 flex gap-2 transition-opacity opacity-0 top-3 right-3 group-hover:opacity-100">
                            <button 
                                onClick={() => openEditModal(product)}
                                className="p-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
                                title="Edit Item"
                            >
                                ✏️
                            </button>
                            <button 
                                onClick={() => handleDelete(product.id)}
                                className="p-2 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600"
                                title="Delete Item"
                            >
                                🗑️
                            </button>
                        </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute px-3 py-1 text-xs font-bold text-green-800 uppercase rounded-lg top-3 left-3 bg-white/90 backdrop-blur-sm">
                            {product.type}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold text-gray-800">{product.name}</h3>
                        <p className="mb-4 text-sm text-gray-500 line-clamp-2">{product.desc}</p>
                        
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-2xl font-bold text-green-700">{product.price}</span>
                            
                            <button 
                                onClick={() => addToCart(product)}
                                className="flex items-center gap-2 px-4 py-2 font-medium text-white transition-colors bg-gray-900 rounded-lg hover:bg-green-600"
                            >
                                <span>🛒</span> Add
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* 🔴 MODAL: ADD / EDIT PRODUCT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-2xl animate-fade-in-up">
                <div className="flex items-center justify-between px-6 py-4 bg-green-700">
                    <h3 className="text-xl font-bold text-white">{editingItem ? 'Edit Product' : 'Add New Product'}</h3>
                    <button onClick={() => setIsModalOpen(false)} className="text-2xl text-green-100 hover:text-white">&times;</button>
                </div>
                
                <form onSubmit={handleSave} className="p-6 space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-bold text-gray-700">Product Name</label>
                        <input name="name" defaultValue={editingItem?.name} required className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" placeholder="e.g. Carrot Seeds" />
                    </div>
                    
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block mb-1 text-sm font-bold text-gray-700">Price (Rs)</label>
                            <input name="price" defaultValue={editingItem?.price} required className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" placeholder="Rs. 500" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 text-sm font-bold text-gray-700">Category</label>
                            <select name="type" defaultValue={editingItem?.type || 'seeds'} className="w-full p-3 bg-white border rounded-lg outline-none focus:ring-2 focus:ring-green-500">
                                <option value="seeds">Seeds</option>
                                <option value="fertilizer">Fertilizer</option>
                                <option value="plants">Plants</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-bold text-gray-700">Image URL</label>
                        <input name="image" defaultValue={editingItem?.image} className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" placeholder="https://..." />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-bold text-gray-700">Description</label>
                        <textarea name="desc" defaultValue={editingItem?.desc} rows="3" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500" placeholder="Short description..."></textarea>
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="w-full py-3 font-bold text-white transition-colors bg-green-600 shadow-lg rounded-xl hover:bg-green-700">
                            {editingItem ? 'Update Product' : 'Save Product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
      )}

    </div>
  );
};

export default Marketplace;