import React from 'react';
import heroImage from '../assets/heroImage.jpg';
import increaseIcon from '../assets/increase.png';
import groupIcon from '../assets/group.png';
import { Link } from 'react-router-dom';

const Home = () => {

    const features = [
        {
            title: "Real-time Analytics",
            description: "Monitor stock levels, pricing, and supply chain metrics in real-time with our advanced dashboard.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            iconColor: "bg-blue-600",
            link: "/agri-tech", // 🔗 Linked to Agri-Tech page
            icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        },
        {
            title: "Smart Inventory Management",
            description: "Automated stock tracking across multiple centers with predictive alerts for low inventory.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            iconColor: "bg-green-500",
            link: "/supply-chain", // 🔗 Linked to Supply Chain page
            icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
        },
        {
            title: "Market Intelligence",
            description: "Access comprehensive market data, pricing trends, and seasonal forecasts.",
            image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800",
            iconColor: "bg-purple-500",
            link: "/modern-farming", // 🔗 Linked to Modern Farming page
            icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
        },
        {
            title: "Secure & Compliant",
            description: "Role-based access control ensuring compliance with national food security standards.",
            isGradient: true,
            iconColor: "bg-orange-500",
            link: "/export-quality", // 🔗 Linked to Export Quality page
            icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
        },
    ];

    const workFlow = [
        {
            title: "Farmers",
            description: "Report harvest data via mobile, track farm production, and access market prices in real-time.",
            emoji: "👨‍🌾", 
        },
        {
            title: "Managers",
            description: "Monitor stock levels, manage distribution centers, and make data-driven decisions with analytics.",
            emoji: "📊" 
        },
        {
            title: "Public",
            description: "View market trends, receive important alerts, and stay informed about food supply chain status.",
            emoji: "🌍" 
        }
    ];

    const impactStories = [
        {
            badge: "Farmer Success",
            badgeColor: "bg-green-100 text-green-800",
            title: "Better Market Access",
            quote: "\"With real-time pricing and mobile harvest reporting, I can now make informed decisions about when to sell my crops.\"",
            author: "- Farmer, Anuradhapura",
            image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800"
        },
        {
            badge: "Efficiency Gain",
            badgeColor: "bg-blue-100 text-blue-800",
            title: "Streamlined Operations",
            quote: "\"The automated alerts and analytics have reduced our response time to supply issues by 70%. A game changer.\"",
            author: "- Manager, Colombo DEC",
            image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=800"
        },
        {
            badge: "Supply Security",
            badgeColor: "bg-purple-100 text-purple-800",
            title: "Reduced Waste",
            quote: "\"Predictive alerts for stock levels helped us reduce food waste by 45% and ensure continuous supply to communities.\"",
            author: "- Administrator, National Level",
            image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const capabilities = [
        {
            title: "Rice Management",
            desc: "Track paddy, samba, and nadu varieties across storage silos",
            emoji: "🌾"
        },
        {
            title: "Vegetable Supply",
            desc: "Monitor fresh produce through DEC networks nationwide",
            emoji: "🥬"
        },
        {
            title: "Salt Production",
            desc: "Manage salterns and distribution to maintain consistent supply",
            emoji: "🧂"
        },
        {
            title: "Sugar Distribution",
            desc: "Track warehouses and export operations efficiently",
            emoji: "🍚"
        }
    ];

    return (
        <>
            {/* ---------------- HERO SECTION ---------------- */}
            <section className='relative flex items-center min-h-screen overflow-hidden bg-gradient-to-r from-green-100 '>
                <div className='container mx-auto max-w-7xl sm:px-5 lg:px-8'>
                    <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>

                        {/* --- Left Column: Text Content --- */}
                        <div className='relative z-20'>
                            <div className='inline-flex items-center gap-2 px-4 py-1 mb-6 bg-white border border-gray-100 rounded-full shadow-sm'>
                                <span className='w-2 h-2 bg-red-400 rounded-full animate-pulse'></span>
                                <span className='text-sm font-medium text-gray-600'>Live Supply Chain</span>
                            </div>

                            <h1 className='mb-6 font-sans text-4xl leading-tight text-gray-900 lg:text-6xl'>
                                Smart Food Supply <br />
                                Chain for <br /> <span className='text-green-600'>Sri Lanka</span>
                            </h1>

                            <p className='max-w-lg mb-8 text-lg leading-relaxed text-gray-700'>
                                Real-time tracking and management of rice, vegetables, salt, and sugar across the nation.
                                Empowering farmers, managers, and communities with data-driven insights.
                            </p>
                            
                            <Link to="/login">
                            <button className='flex items-center gap-2 px-8 py-3 font-medium text-white transition-transform bg-teal-500 rounded-full shadow-lg hover:scale-105 shadow-teal-500/40'>
                                Login / Sign Up &rarr;
                            </button>
                            </Link>

                            {/* Statistics Row */}
                            <div className='grid grid-cols-3 gap-4 mt-12 lg:gap-6'>
                                <div className='p-4 transition-transform bg-white shadow-xl lg:p-6 rounded-2xl shadow-teal-100/50 hover:scale-105'>
                                    <h1 className='text-xl font-bold text-teal-600 lg:text-3xl'>47+</h1>
                                    <p className='mt-1 text-xs text-slate-500'>Active Centers</p>
                                </div>
                                <div className='p-4 transition-transform bg-white shadow-xl lg:p-6 rounded-2xl shadow-teal-100/50 hover:scale-105'>
                                    <h1 className='text-xl font-bold text-teal-600 lg:text-3xl'>125k</h1>
                                    <p className='mt-1 text-xs text-slate-500'>Total Stock (MT)</p>
                                </div>
                                <div className='p-4 transition-transform bg-white shadow-xl lg:p-6 rounded-2xl shadow-teal-100/50 hover:scale-105'>
                                    <h1 className='text-xl font-bold text-teal-600 lg:text-3xl'>24/7</h1>
                                    <p className='mt-1 text-xs text-slate-500'>Monitoring</p>
                                </div>
                            </div>
                        </div>

                        {/* --- Right Column: Image & Floating Cards --- */}
                        <div className='relative z-10 flex justify-center lg:justify-end'>
                            <img
                                src={heroImage}
                                alt="Smart supply chain"
                                className='w-full max-w-xl h-auto object-cover rounded-[40px] shadow-2xl shadow-teal-900/20'
                            />

                            {/* Floating card 1: Stock Growth */}
                            <div className='absolute top-10 -left-6 p-3 lg:p-4 bg-green-100/50 backdrop-blur-md border border-white/40 shadow-xl rounded-xl animate-[bounce_3s_infinite] hidden md:flex items-center gap-3'>
                                <div className='p-2 bg-white rounded-lg shadow-sm'>
                                    <img src={increaseIcon} alt="Icon" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">+12.5%</p>
                                    <p className="text-xs text-gray-600">Stock Growth</p>
                                </div>
                            </div>

                            {/* Floating card 2: Active Users */}
                            <div className="absolute bottom-10 -right-4 p-3 lg:p-4 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-xl animate-[bounce_3s_infinite] hidden md:flex items-center gap-3">
                                <div className="p-2 text-blue-600 bg-blue-100 rounded-lg">
                                    <img src={groupIcon} alt="Icon" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">5,000+</p>
                                    <p className="text-xs text-gray-600">Active Users</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ---------------- FEATURES SECTION (UPDATED LINKS) ---------------- */}
            <section className="py-20 bg-gray-50 bg-gradient-to-r from-green-100/80 to-white">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-800 uppercase bg-green-100 rounded-full">
                            Why Choose Us
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Comprehensive Supply Chain Solutions
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Leveraging technology to bring transparency and efficiency to Sri Lanka's food supply chain
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm group rounded-2xl hover:shadow-xl"
                            >
                                <div className={`relative h-56 w-full overflow-hidden ${feature.isGradient ? 'bg-gradient-to-br from-orange-100 to-pink-100' : ''}`}>
                                    {!feature.isGradient && (
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
                                        />
                                    )}
                                    <div className={`absolute p-3 rounded-xl shadow-lg ${feature.iconColor} 
                                        ${feature.isGradient
                                            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center'
                                            : 'bottom-4 left-4'
                                        }`}
                                    >
                                        {feature.icon}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="mb-6 text-sm leading-relaxed text-gray-500">
                                        {feature.description}
                                    </p>
                                    {/* 🔴 UPDATED: Using Link component here */}
                                    <Link to={feature.link} className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors hover:text-green-700">
                                        Learn more
                                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- WORKFLOW SECTION ---------------- */}
            <section className="py-20 bg-gradient-to-r from-green-100/80">
                <div className='px-4 mx-auto max-w-7xl sm:px-5 lg:px-8'>
                    <div className='max-w-[85rem] mx-auto mb-16 text-center'>
                        <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>How Our Platform Works</h2>
                        <p className='mt-8 text-lg text-gray-600'>A seamless experience connecting all stakeholders in the food supply chain.</p>

                        <div className='grid grid-cols-1 gap-12 mt-3 md:grid-cols-3' >
                            {workFlow.map((item, index) => (
                                <div key={index} className='flex flex-col items-center p-8 transition-all duration-300 bg-white border-gray-100 shadow-lg rounded-3xl hover:-translate-y-2 hover:shadow-2xl'>
                                    <div className='flex items-center justify-center w-16 h-16 mb-6 text-3xl rounded-full bg-blue-500/10'>
                                        {item.emoji}
                                    </div>
                                    <h3 className='mb-3 text-base font-semibold text-gray-800 ' >{item.title}</h3>
                                    <p className='text-sm leading-relaxed text-gray-500'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- IMPACT SECTION ---------------- */}
            <section className='py-20 bg-gradient-to-r from-green-100/80'>
                <div className='px-4 mx-auto sm:px-5 lg:px-8 max-w-7xl '>
                    <div className='max-w-3xl mx-auto mb-16 text-center'>
                        <div className='inline-block px-6 py-2 mb-4 text-xs text-green-800 bg-white rounded-full shadow-lg '>
                            Real Impact
                        </div>
                        <h2 className='pt-2 text-3xl font-normal text-gray-900 sm:text-4xl'>
                            Transforming Sri Lanka's Agriculture
                        </h2>
                        <p className='mt-4 text-lg text-gray-600'>
                            See how our platform is making a difference across the island
                        </p>
                    </div>

                    <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                        {impactStories.map((story, index) => (
                            <div key={index} className='overflow-hidden transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg'>
                                <img src={story.image} alt={story.title} className='object-cover w-full h-48' />
                                <div className='p-6'>
                                    <div className={`inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full transition-all duration-300 hover:shadow-lg ${story.badgeColor}`}>
                                        {story.badge}
                                    </div>
                                    <h3 className='mb-2 text-sm font-medium text-gray-800'>{story.title}</h3>
                                    <p className='mb-4 text-xs font-semibold text-gray-500'>{story.quote}</p>
                                    <p className='text-xs font-semibold text-green-600'>{story.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- CAPABILITIES SECTION ---------------- */}
            <section className='py-20 bg-gradient-to-r from-green-200/60'>
                <div className='px-4 mx-auto max-w-7xl sm:px-5 lg:px-8'>
                    <div className='bg-white rounded-[2.5rem] shadow-xl md:p-16'>
                        <div className='max-w-3xl mx-auto mb-10 text-center'>
                            <h2 className='mb-4 text-3xl text-gray-900 sm:text-3xl'>
                                Platform Capabilities
                            </h2>
                            <p className='text-gray-500'>
                                Everything you need to manage the supply chain effectively
                            </p>
                        </div>
                        <div className='grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2'>
                            {capabilities.map((item, index) => (
                                <div key={index} className='flex flex-col items-center p-6 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-lg hover:border-green-100 group'>
                                    <div className='mb-6 text-3xl transition-all transform group-hover:scale-110'>{item.emoji}</div>
                                    <h3 className='mb-3 text-lg font-semibold text-gray-900'>{item.title}</h3>
                                    <p className='leading-relaxed text-gray-500'>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;