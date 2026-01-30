import React from 'react';
import { useNavigate } from 'react-router-dom';

const Overview = ({ recentActivities = [], stocks = [] }) => {
  const navigate = useNavigate();

  // --- 1. LIVE CALCULATIONS (Category) ---
  const getTotal = (category) => {
    return stocks
      .filter((item) => item.category === category)
      .reduce((total, item) => total + parseInt(item.qty || 0), 0);
  };

  const totalRice = getTotal('Rice');
  const totalVeg = getTotal('Veg');
  const totalSugar = getTotal('Sugar');
  const totalSalt = getTotal('Salt');
  const grandTotal = totalRice + totalVeg + totalSugar + totalSalt;
  const activeAlerts = stocks.filter(s => s.status === 'Critical' || s.status === 'Low').length;

  // --- 2. NEW: DISTRICT CALCULATIONS ---
  // This groups the stocks by 'location' (e.g. Polonnaruwa, Colombo)
  const districtMap = stocks.reduce((acc, item) => {
    const loc = item.location || "Unknown";
    if (!acc[loc]) acc[loc] = 0;
    acc[loc] += parseInt(item.qty || 0);
    return acc;
  }, {});

  // Convert to array and sort by highest stock first
  const districtList = Object.entries(districtMap)
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total);

  // --- HELPERS ---
  const getPercentage = (val) => grandTotal > 0 ? Math.round((val / grandTotal) * 100) : 0;
  
  const getActivityIcon = (action) => {
    if (action.includes("Stock")) return "📝";
    if (action.includes("Alert")) return "🔔";
    if (action.includes("Report")) return "📊";
    return "🔹";
  };

  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="pb-10 space-y-8 font-sans">
        
        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
                <p className="mb-1 text-sm font-bold tracking-wider text-green-600 uppercase">{currentDate}</p>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Dashboard Overview</h2>
            </div>
            <div className="flex gap-3">
                <button onClick={() => navigate('/dashboard/stocks')} className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 shadow-lg shadow-green-600/30 transition-all">
                    <span>+</span> Add Stock
                </button>
            </div>
        </div>
        
        {/* TOP STATS GRID (Same as before) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {/* Rice */}
            <div className="p-6 bg-white border border-orange-100 shadow-sm rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 text-xl text-orange-600 bg-orange-50 rounded-xl">🍚</div>
                    <span className="px-2 py-1 text-xs font-bold text-orange-400 rounded-lg bg-orange-50">{getPercentage(totalRice)}%</span>
                </div>
                <h3 className="text-2xl font-black text-gray-800">{totalRice.toLocaleString()}</h3>
                <p className="mt-1 text-xs font-bold tracking-wider text-gray-400 uppercase">Rice (kg)</p>
            </div>
            
            {/* Veg */}
            <div className="p-6 bg-white border border-green-100 shadow-sm rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 text-xl text-green-600 bg-green-50 rounded-xl">🥦</div>
                    <span className="px-2 py-1 text-xs font-bold text-green-600 rounded-lg bg-green-50">{getPercentage(totalVeg)}%</span>
                </div>
                <h3 className="text-2xl font-black text-gray-800">{totalVeg.toLocaleString()}</h3>
                <p className="mt-1 text-xs font-bold tracking-wider text-gray-400 uppercase">Veg (kg)</p>
            </div>

            {/* Sugar */}
            <div className="p-6 bg-white border border-blue-100 shadow-sm rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 text-xl text-blue-600 bg-blue-50 rounded-xl">🍬</div>
                    <span className="px-2 py-1 text-xs font-bold text-blue-600 rounded-lg bg-blue-50">{getPercentage(totalSugar)}%</span>
                </div>
                <h3 className="text-2xl font-black text-gray-800">{totalSugar.toLocaleString()}</h3>
                <p className="mt-1 text-xs font-bold tracking-wider text-gray-400 uppercase">Sugar (kg)</p>
            </div>

            {/* Salt */}
            <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 text-xl text-gray-600 bg-gray-100 rounded-xl">🧂</div>
                    <span className="px-2 py-1 text-xs font-bold text-gray-600 bg-gray-100 rounded-lg">{getPercentage(totalSalt)}%</span>
                </div>
                <h3 className="text-2xl font-black text-gray-800">{totalSalt.toLocaleString()}</h3>
                <p className="mt-1 text-xs font-bold tracking-wider text-gray-400 uppercase">Salt (kg)</p>
            </div>

            {/* Alerts */}
            <div className={`p-6 rounded-2xl border shadow-sm transition-all ${activeAlerts > 0 ? 'bg-red-50 border-red-200' : 'bg-teal-50 border-teal-200'}`}>
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl text-xl ${activeAlerts > 0 ? 'bg-white text-red-600 animate-pulse' : 'bg-white text-teal-600'}`}>
                        {activeAlerts > 0 ? '🚨' : '🛡️'}
                    </div>
                </div>
                <h3 className={`text-2xl font-black ${activeAlerts > 0 ? 'text-red-800' : 'text-teal-800'}`}>
                    {activeAlerts > 0 ? `${activeAlerts} Alerts` : 'Safe'}
                </h3>
                <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${activeAlerts > 0 ? 'text-red-600' : 'text-teal-600'}`}>Status</p>
            </div>
        </div>

        {/* --- MIDDLE SECTION: DISTRICTS + DISTRIBUTION --- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            
            {/* 3. NEW: REGIONAL STOCK LEVELS (Districts) */}
            <div className="flex flex-col overflow-hidden bg-white border border-gray-100 shadow-sm lg:col-span-2 rounded-2xl">
                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50">
                    <h3 className="text-lg font-bold text-gray-800">Regional Stock Levels</h3>
                    <span className="px-3 py-1 text-xs font-bold text-blue-600 rounded-full bg-blue-50">{districtList.length} Districts Active</span>
                </div>
                
                <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
                    {districtList.length > 0 ? (
                        districtList.map((district, index) => (
                            <div key={index} className="flex items-center justify-between p-4 transition-all border border-transparent rounded-xl bg-gray-50 hover:bg-white hover:shadow-md hover:border-green-100 group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                                        ${index === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-white text-gray-500 shadow-sm'}`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{district.name}</h4>
                                        <p className="text-xs text-gray-400">Storage Center</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-black text-gray-800">{district.total.toLocaleString()}</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Kg Total</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-2 py-8 text-center text-gray-400">
                            No district data available. Add stock to see regions here.
                        </div>
                    )}
                </div>
            </div>

            {/* 4. INVENTORY DISTRIBUTION (Pie Chart Simulation) */}
            <div className="p-6 bg-white border border-gray-100 shadow-sm lg:col-span-1 rounded-2xl">
                <h3 className="mb-6 text-lg font-bold text-gray-800">Stock Mix</h3>
                <div className="space-y-6">
                    {/* Reuse your bar code here, simplified for brevity */}
                    <div>
                        <div className="flex justify-between mb-1 text-xs font-bold tracking-wide text-gray-500 uppercase">
                            <span>Rice</span> <span>{getPercentage(totalRice)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full"><div className="h-2 bg-orange-400 rounded-full" style={{ width: `${getPercentage(totalRice)}%` }}></div></div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1 text-xs font-bold tracking-wide text-gray-500 uppercase">
                            <span>Vegetables</span> <span>{getPercentage(totalVeg)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full"><div className="h-2 bg-green-500 rounded-full" style={{ width: `${getPercentage(totalVeg)}%` }}></div></div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1 text-xs font-bold tracking-wide text-gray-500 uppercase">
                            <span>Sugar</span> <span>{getPercentage(totalSugar)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full"><div className="h-2 bg-blue-400 rounded-full" style={{ width: `${getPercentage(totalSugar)}%` }}></div></div>
                    </div>
                    <div className="p-4 mt-8 text-center border border-green-100 bg-green-50 rounded-xl">
                        <p className="text-xs font-bold text-green-600 uppercase">National Total</p>
                        <p className="mt-1 text-2xl font-black text-green-800">{grandTotal.toLocaleString()} kg</p>
                    </div>
                </div>
            </div>
        
        </div>

        {/* 5. RECENT ACTIVITY TABLE (Same as before, kept at bottom) */}
        <div className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl">
             <div className="px-6 py-4 border-b border-gray-50">
                <h3 className="font-bold text-gray-800">Recent Live Actions</h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <tbody className="divide-y divide-gray-50">
                        {recentActivities.slice(0, 5).map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="w-12 px-6 py-3 text-2xl">{getActivityIcon(item.action)}</td>
                                <td className="px-2 py-3">
                                    <p className="text-sm font-bold text-gray-800">{item.action}</p>
                                    <p className="text-xs text-gray-500">{item.detail}</p>
                                </td>
                                <td className="px-6 py-3 text-xs text-right text-gray-400">{item.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>

    </div>
  );
};

export default Overview;