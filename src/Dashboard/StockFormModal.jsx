import React, { useState, useEffect } from 'react';

const StockFormModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  if (!isOpen) return null;

  // Form State
  const [formData, setFormData] = useState({
    id: null,
    item: '',
    location: '',
    qty: '',
    status: 'Good'
  });

  // Error State for Validation
  const [errors, setErrors] = useState({});

  // Load initial data if editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ id: null, item: '', location: '', qty: '', status: 'Good' });
    }
    setErrors({}); // Clear errors when opening
  }, [initialData, isOpen]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field as user types
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  // --- VALIDATION LOGIC ---
  const validate = () => {
    let tempErrors = {};
    if (!formData.item.trim()) tempErrors.item = "Item name is required.";
    else if (formData.item.length < 3) tempErrors.item = "Item name must be at least 3 characters.";

    if (!formData.location.trim()) tempErrors.location = "Location is required.";
    
    // Regex to ensure it's a number
    if (!formData.qty.toString().match(/^[0-9]+$/)) tempErrors.qty = "Quantity must be a valid number.";
    else if (parseInt(formData.qty) <= 0) tempErrors.qty = "Quantity must be greater than 0.";

    setErrors(tempErrors);
    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-green-700">
          <h3 className="text-xl font-bold text-white">{initialData ? 'Edit Stock' : 'Add New Stock'}</h3>
          <button onClick={onClose} className="text-2xl text-green-100 hover:text-white">&times;</button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Item Name Input */}
          <div>
            <label className="block mb-1 text-sm font-bold text-gray-700">Item Name</label>
            <input 
              name="item" 
              value={formData.item} 
              onChange={handleChange} 
              className={`w-full p-3 border rounded-lg outline-none focus:ring-2 ${errors.item ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-green-200'}`}
              placeholder="e.g. Samba Rice"
            />
            {errors.item && <p className="mt-1 text-xs text-red-500">{errors.item}</p>}
          </div>

          {/* Location Input */}
          <div>
            <label className="block mb-1 text-sm font-bold text-gray-700">Storage Location</label>
            <input 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              className={`w-full p-3 border rounded-lg outline-none focus:ring-2 ${errors.location ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-green-200'}`}
              placeholder="e.g. Dambulla Warehouse"
            />
            {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
          </div>

          {/* Qty & Status Row */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-bold text-gray-700">Quantity (kg)</label>
              <input 
                name="qty" 
                value={formData.qty} 
                onChange={handleChange} 
                className={`w-full p-3 border rounded-lg outline-none focus:ring-2 ${errors.qty ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-green-200'}`}
                placeholder="1000"
              />
              {errors.qty && <p className="mt-1 text-xs text-red-500">{errors.qty}</p>}
            </div>

            <div className="flex-1">
              <label className="block mb-1 text-sm font-bold text-gray-700">Status</label>
              <select 
                name="status" 
                value={formData.status} 
                onChange={handleChange} 
                className="w-full p-3 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-green-200"
              >
                <option value="Good">Good</option>
                <option value="Low">Low</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 py-3 font-bold text-gray-600 transition-colors hover:bg-gray-100 rounded-xl">Cancel</button>
            <button type="submit" className="flex-1 py-3 font-bold text-white transition-colors bg-green-600 shadow-lg rounded-xl hover:bg-green-700 shadow-green-600/30">
              {initialData ? 'Update Stock' : 'Save Stock'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StockFormModal;