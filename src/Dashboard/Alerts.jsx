import React, { useState } from 'react';

// 1. Accept 'addActivity' prop
const Alerts = ({ stocks = [], addActivity }) => {
  
  const [message, setMessage] = useState('');
  const [targetGroup, setTargetGroup] = useState('farmers');
  const [sending, setSending] = useState(false);

  // ... (Alert generation logic remains the same) ...
  const stockAlerts = stocks
    .filter(stock => stock.status === 'Critical' || stock.status === 'Low')
    .map(stock => ({
        id: `stock-${stock.id}`,
        type: stock.status === 'Critical' ? 'critical' : 'warning',
        title: `${stock.status} Stock: ${stock.item}`,
        desc: `${stock.location} storage is reporting ${stock.qty}kg remaining.`,
        time: 'Just now'
    }));

  const handleSendSMS = (e) => {
    e.preventDefault();
    if (!message) return;

    setSending(true);

    setTimeout(() => {
      setSending(false);
      
      // 📝 2. LOG THE ACTIVITY TO DASHBOARD
      if (addActivity) {
          addActivity("SMS Broadcast", `Sent to ${targetGroup}: "${message.substring(0, 20)}..."`, "Success");
      }

      setMessage('');
      alert(`Success! SMS sent to ${targetGroup}.`);
    }, 2000);
  };

  // ... (Return statement remains the same) ...
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
       {/* Left Side: Alerts List */}
       <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">System Alerts</h2>
          <div className="space-y-4">
             {stockAlerts.map(alert => (
                 <div key={alert.id} className="p-5 text-red-800 border border-red-100 rounded-2xl bg-red-50">
                     <h3 className="font-bold">{alert.title}</h3>
                     <p className="text-sm">{alert.desc}</p>
                 </div>
             ))}
             {stockAlerts.length === 0 && <p className="text-gray-500">No active alerts.</p>}
          </div>
       </div>

       {/* Right Side: SMS Form */}
       <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">SMS Broadcast</h2>
          <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
             <form onSubmit={handleSendSMS} className="space-y-6">
                {/* ... (Existing Form Inputs) ... */}
                <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700">Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-4 border rounded-xl" required></textarea>
                </div>
                <button type="submit" disabled={sending} className="w-full py-4 font-bold text-white bg-green-600 rounded-xl">
                    {sending ? 'Sending...' : '🚀 Send Broadcast'}
                </button>
             </form>
          </div>
       </div>
    </div>
  );
};

export default Alerts;