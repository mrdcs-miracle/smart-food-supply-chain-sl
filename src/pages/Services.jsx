import React from 'react'
import  stockIcon from '../assets/stock.avif';

const Services = () => {

    const services = [
        {
            title: "Real-Time Stock Management",
            desc: "Track inventory levels across multiple distribution centers with automated updates from HARTI, DEC APIs, and manual inputs.",
            features: ["Live stock levels", "Automated data feeds", "Multi-center tracking", "Quality monitoring"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
            color: "bg-blue-500"
        },
        {
            title: "Market Price Intelligence",
            desc: "Access comprehensive pricing data and trends for rice, vegetables, salt, and sugar across all districts.",
            features: ["Real-time pricing", "Historical trends", "Price forecasting", "Market comparisons"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
            color: "bg-green-500"
        },
        {
            title: "Smart Alert System",
            desc: "Receive instant notifications for low stock, price changes, quality issues, and seasonal events.",
            features: ["Custom alerts", "Priority notifications", "SMS/Email delivery", "Role-based filtering"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
            color: "bg-orange-500"
        },
        {
            title: "Geographic Mapping",
            desc: "Visualize supply chain data with interactive maps showing center locations, stock distribution, and regional trends.",
            features: ["District-level data", "Center mapping", "Route optimization", "Regional analytics"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
            color: "bg-purple-500"
        },
        {
            title: "Mobile Farm Management",
            desc: "Enable farmers to report harvest data, track farm production, and access market information directly from their mobile devices.",
            features: ["Harvest reporting", "Farm tracking", "Market access", "Simple interface"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
            color: "bg-green-500"
        },
        {
            title: "Comprehensive Reports",
            desc: "Generate detailed reports on stock movements, price trends, seasonal performance, and supply chain efficiency.",
            features: ["Custom reports", "Export options", "Analytics dashboard", "Scheduled reports"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
            color: "bg-blue-500"
        },
        {
            title: "Role-Based Access Control",
            desc: "Secure platform with different access levels for public users, farmers, managers, and administrators.",
            features: ["4 user roles", "Custom permissions", "Data security", "Audit trails"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
            color: "bg-orange-500"
        },
        {
            title: "IoT Integration",
            desc: "Optional integration with IoT sensors for automated temperature, humidity, and weight monitoring in warehouses.",
            features: ["Sensor integration", "Automated monitoring", "Quality control", "Predictive maintenance"],
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
            color: "bg-purple-500"
        }
    ];

        const productsTrack = [
        {
            title: "Rice",
            desc: "PMB & Distribution Network",
            emoji: "👨‍🌾", 
        },
        {
            title: "Vegetables",
            desc: "DEC Economic Centers",
            emoji: "📊" 
        },
        {
            title: "Salt",
            desc: "Coastal Production Sites",
            emoji: "🌍" 
        },  
        {
            title: "Sugar",
            desc: "Mills & Import Tracking",
            emoji: "🏭" 
        }
    ];

    return (
        <>
            <section className='min-h-screen py-20 bg-gradient-to-r from-green-100'>
                <div className='container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>

                    {/* --- Header Section (Matched width: max-w-3xl) --- */}
                    <div className='max-w-3xl mx-auto mb-16 text-center'>
                        <div className='inline-block px-3 py-1 mb-6 text-sm font-normal text-green-700 bg-white rounded-full shadow-lg'>
                            Our Services
                        </div>
                        <h2 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>
                            Comprehensive Solutions for <br />
                            <span className='text-green-600'>Supply Chain Excellence</span>
                        </h2>
                        <p className='text-lg text-gray-600'>
                            End-to-end digital solutions covering every aspect of food supply chain management,
                            from farm to distribution center.
                        </p>
                    </div>

                    {/* --- Content Wrapper (Matched width: max-w-6xl) --- */}
                    <div className='max-w-6xl mx-auto'>

                        {/* 1. Integrated Platform Card (Top Large Card) */}
                        <div className='mb-8 overflow-hidden bg-white border border-gray-100 shadow-sm rounded-3xl'>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                {/* Image Side */}
                                <div className='relative h-64 bg-gray-200 lg:h-auto'>
                                    <img
                                        src={stockIcon}
                                        className='object-cover w-full h-full'
                                    />
                                    {/* Overlay Gradient */}
                                    <div className='absolute inset-0 bg-green-900/10'></div>
                                </div>

                                {/* Text Side */}
                                <div className='flex flex-col justify-center p-8 lg:p-12'>
                                    <h3 className='mb-4 text-2xl font-bold text-gray-900'>Integrated Platform</h3>
                                    <p className='mb-6 leading-relaxed text-gray-600'>
                                        Our unified platform brings together multiple data sources, stakeholders, and functionalities
                                        into one seamless experience. From automated API feeds to manual inputs, everything works
                                        together to provide real-time insights.
                                    </p>
                                    <div className='space-y-3'>
                                        <div className='flex items-center gap-3'>
                                            <span className='flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full'>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                            <span className='text-sm font-medium text-gray-700'>Multiple data source integration</span>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <span className='flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full'>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                            <span className='text-sm font-medium text-gray-700'>Automated & manual data entry</span>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <span className='flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full'>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                            <span className='text-sm font-medium text-gray-700'>Real-time synchronization</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Services Grid (2 Columns) */}
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                            {services.map((service, index) => (
                                <div key={index} className='p-8 transition-shadow bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-md'>
                                    {/* Icon */}
                                    <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className='mb-3 text-xl font-bold text-gray-900'>{service.title}</h3>
                                    <p className='mb-6 text-sm leading-relaxed text-gray-600'>
                                        {service.desc}
                                    </p>

                                    {/* Bullet Points */}
                                    <ul className='space-y-2'>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className='flex items-center gap-2 text-xs font-medium text-gray-500'>
                                                <span className={`w-1.5 h-1.5 ${service.color.replace('bg-', 'bg-')} rounded-full`}></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            
            <section className='py-20 bg-gradient-to-r from-green-100 '>
                <div className='container mx-auto max-w-7xl sm:px-6 lg:px-8'>
                    
                    <div className='max-w-3xl mx-auto text-center'>
                        <h2 className='mb-8 text-3xl text-gray-900 sm:text-4xl'>Products We Track</h2>
                        <p className='mb-5 text-lg text-gray-700'>Comprehensive coverage of essential food commodities</p>
                        
                    </div>

                          {/* Grid area */}
                          <div className='grid grid-cols-1 gap-10 mt-3 md:grid-cols-4'>
                            {productsTrack.map((product, index) => (
                                <div key={index} className='flex flex-col items-center p-8 bg-white border border-gray-100 shadow-2xl rounded-3xl '>
                                    <div className='flex items-center justify-center w-16 h-16 mb-8 text-3xl rounded-full bg-blue-500/10'>{product.emoji}</div>
                                    <h3 className='mb-3 text-lg text-gray-900'>{product.title}</h3>
                                    <p className='text-sm leading-relaxed text-gray-500'>{product.desc}</p>
                                </div>
                            ))}
                          </div>
                    
                </div>
            </section>

        </>
    )
}

export default Services
