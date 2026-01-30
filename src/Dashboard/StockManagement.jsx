import React, { useState } from 'react';
import StockFormModal from './StockFormModal';

// 1. Receive 'stocks' and 'setStocks' as props
const StockManagement = ({ stocks, setStocks }) => {
  
  // 🔴 REMOVED: const [stocks, setStocks] = useState([...]) 
  // We don't need local state anymore because we are getting it from App.jsx

  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStock, setEditingStock] = useState(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const showFeedback = (type, message) => {
    setFeedback({ type, message });
    setTimeout(() => setFeedback({ type: '', message: '' }), 3000);
  };

  const handleSave = (stockData) => {
    try {
      if (stockData.id) {
        setStocks((prev) => prev.map(item => item.id === stockData.id ? { ...stockData, category: filter === 'All' ? 'Rice' : filter } : item));
        showFeedback('success', 'Stock updated successfully!');
      } else {
        const newStock = { 
          ...stockData, 
          id: Date.now(),
          category: filter === 'All' ? 'Rice' : filter 
        };
        setStocks((prev) => [newStock, ...prev]);
        showFeedback('success', 'New stock added successfully!');
      }
      setIsModalOpen(false);
    } catch (error) {
      showFeedback('error', 'Failed to save data.');
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this stock?")) {
      setStocks((prev) => prev.filter(item => item.id !== id));
      showFeedback('success', 'Stock deleted successfully.');
    }
  };

  // ... (REST OF THE CODE IS EXACTLY THE SAME: handleEditClick, filtering logic, and return statement) ...
  // Keep the rest of your UI code here unchanged.
  
  const handleEditClick = (stock) => {
    setEditingStock(stock);
    setIsModalOpen(true);
  };

  const handleAddNewClick = () => {
    setEditingStock(null);
    setIsModalOpen(true);
  };

  const filteredStocks = filter === 'All' ? stocks : stocks.filter(s => s.category === filter);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStocks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStocks.length / itemsPerPage);

  const getStatusColor = (status) => {
    if (status === 'Good') return 'bg-green-100 text-green-700';
    if (status === 'Low') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <div className="relative space-y-6">
        {/* Toast Notification */}
        {feedback.message && (
            <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-xl shadow-2xl text-white font-bold animate-bounce ${feedback.type === 'error' ? 'bg-red-500' : 'bg-green-600'}`}>
                {feedback.message}
            </div>
        )}

        {/* Header & Tabs - SAME AS BEFORE */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div><h2 className="text-2xl font-bold text-gray-800">Stock Management</h2></div>
            <button onClick={handleAddNewClick} className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">+ Add New Stock</button>
        </div>

        <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-xl w-fit">
            {['All', 'Rice', 'Veg', 'Sugar', 'Salt'].map((cat) => (
                <button key={cat} onClick={() => { setFilter(cat); setCurrentPage(1); }} className={`px-5 py-2 text-sm font-medium rounded-lg ${filter === cat ? 'bg-white text-green-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{cat}</button>
            ))}
        </div>

        {/* Table - SAME AS BEFORE */}
        <div className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl">
            <table className="w-full text-left border-collapse">
                <thead className="border-b border-gray-100 bg-gray-50">
                    <tr>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600">Item Name</th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600">Location</th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600">Category</th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600">Qty</th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-600">Status</th>
                        <th className="px-6 py-4 text-sm font-bold text-right text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {currentItems.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{row.item}</td>
                            <td className="px-6 py-4 text-gray-600">{row.location}</td>
                            <td className="px-6 py-4"><span className="px-2 py-1 text-xs font-bold uppercase bg-gray-100 rounded">{row.category}</span></td>
                            <td className="px-6 py-4 font-bold">{row.qty}</td>
                            <td className="px-6 py-4"><span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(row.status)}`}>{row.status}</span></td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => handleEditClick(row)} className="mr-3 font-medium text-blue-600">Edit</button>
                                <button onClick={() => handleDelete(row.id)} className="font-medium text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        {/* Modal - SAME AS BEFORE */}
        <StockFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSave} initialData={editingStock} />
    </div>
  );
};

export default StockManagement;