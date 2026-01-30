import React, { useState } from 'react';

// 1. Accept 'addActivity' prop
const Reports = ({ addActivity }) => {
  const [downloading, setDownloading] = useState(null);

  // ... (reportTypes and reportHistory arrays remain the same) ...
  const reportTypes = [
      { id: 'stock', title: 'Stock Summary Report', desc: 'Overall stock levels...', icon: '📦', color: 'bg-blue-100 text-blue-600' },
      { id: 'price', title: 'Price Trends Report', desc: 'Market price analysis...', icon: '📈', color: 'bg-green-100 text-green-600' },
      { id: 'shipment', title: 'Shipment Tracking Report', desc: 'Detailed shipment logs...', icon: '🚛', color: 'bg-purple-100 text-purple-600' },
      { id: 'alerts', title: 'System Alerts Summary', desc: 'Log of critical alerts...', icon: '🚨', color: 'bg-red-100 text-red-600' }
  ];
  const reportHistory = [
      { id: 101, name: "Weekly_Stock_Summary.pdf", date: "Oct 24, 2024", type: "Stock" },
  ];

  const handleGenerate = (report) => {
    setDownloading(report.id); 
    
    setTimeout(() => {
      setDownloading(null);
      alert(`Success: ${report.title} downloaded.`);

      // 📝 2. LOG THE ACTIVITY TO DASHBOARD
      // Usage: addActivity(Action Name, Details, Status tag)
      if (addActivity) {
          addActivity("Report Generated", `Downloaded ${report.title}`, "Completed");
      }

    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">System Reports</h2>
        <p className="text-gray-500">Generate and download detailed insights.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {reportTypes.map((report) => (
            <div key={report.id} className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${report.color}`}>{report.icon}</div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-800">{report.title}</h3>
                <p className="h-10 mb-6 text-sm text-gray-500">{report.desc}</p>
                
                <button 
                    onClick={() => handleGenerate(report)} // Pass the whole object
                    disabled={downloading === report.id}
                    className={`w-full py-3 rounded-xl font-medium transition-all ${downloading === report.id ? 'bg-gray-100 text-gray-400' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    {downloading === report.id ? 'Generating...' : 'Generate Report →'}
                </button>
            </div>
        ))}
      </div>
      
      {/* History Section (Visual only for now) */}
      <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
         <h3 className="mb-4 text-lg font-bold text-gray-800">Recently Generated Reports</h3>
         {/* ... (Existing history code) ... */}
      </div>
    </div>
  );
};

export default Reports;