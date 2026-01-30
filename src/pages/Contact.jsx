import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending data
    alert(`Thank you, ${formData.name}! Your message has been sent. We will contact you at ${formData.email} shortly.`);
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      
      {/* 1. HERO SECTION */}
      <div className="py-16 text-center text-white bg-green-700">
        <h1 className="mb-4 text-4xl font-bold">Get in Touch</h1>
        <p className="max-w-2xl px-4 mx-auto text-green-100">
          Have questions about our supply chain, seeds, or services? We're here to help you grow.
        </p>
      </div>

      <div className="container px-4 mx-auto -mt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* 2. CONTACT INFO CARD (Left Side) */}
          <div className="flex flex-col justify-between p-8 text-white bg-green-900 shadow-xl rounded-2xl">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <p className="mb-8 text-green-200">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 text-2xl bg-green-800 rounded-full">
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-300 uppercase">Phone</p>
                    <p className="text-lg font-medium">+94 11 234 5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 text-2xl bg-green-800 rounded-full">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-300 uppercase">Email</p>
                    <p className="text-lg font-medium">support@lksupply.lk</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 text-2xl bg-green-800 rounded-full">
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-300 uppercase">Address</p>
                    <p className="text-lg font-medium">123 Agrarian Way, Colombo 07</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="flex gap-4 mt-12">
               <div className="w-24 h-24 bg-green-800 rounded-full opacity-50 blur-xl"></div>
               <div className="w-16 h-16 bg-green-600 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>

          {/* 3. CONTACT FORM (Right Side) */}
          <div className="p-8 bg-white border border-gray-100 shadow-lg rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                >
                    <option value="">Select a topic</option>
                    <option value="seeds">Buying Seeds</option>
                    <option value="logistics">Logistics Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 transition-all border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-green-600/30 transition-all transform active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* 4. FAQ SECTION */}
        <div className="max-w-3xl mx-auto mt-20">
            <h2 className="mb-10 text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {[
                    { q: "How do I track my seed order?", a: "You can track your order status directly from your profile dashboard under 'Recent Orders'." },
                    { q: "Do you deliver to remote farming areas?", a: "Yes, our logistics network covers all 25 districts in Sri Lanka, including remote agrarian zones." },
                    { q: "Are the seeds certified?", a: "Absolutely. All seeds listed are certified by the Department of Agriculture." }
                ].map((faq, index) => (
                    <div key={index} className="p-6 transition-colors bg-white border border-gray-200 shadow-sm rounded-xl hover:border-green-300">
                        <h3 className="mb-2 text-lg font-bold text-gray-800">{faq.q}</h3>
                        <p className="text-gray-600">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;