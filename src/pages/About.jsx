import React from 'react'

const About = () => {

    // 1. Mission & Vision Data
    const aboutCards = [
        {
           title: "Our Mission",
           desc:"To create a transparent , efficient , and resilient food supply chain management system that empowers farmers , supports decision-makers, and ensures food security for all Sri Lankans through innovative technology and real-time data insights.",
           iconColor: "text-green-600",
           bgColor: "bg-green-100", 
           borderColor: "border-green-50",
           iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        },
        {
            title: "Our Vision",
            desc: "To become the leading digital platform for agricultural supply chain management in South Asia, setting new standards for transparency, efficiency,  and sustainability while supporting local communities and national food security goals.",
            iconColor: "text-blue-600",
            bgColor: "bg-blue-100",
            borderColor: "border-blue-50",
            iconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        }
    ];

    // 2. Workflow Data
    const workFlow = [
        {
            title: "Transparency",
            description: "Open access to data and insights that promote accountability across the entire supply chain.",
            emoji: "👨‍🌾", 
        },
        {
            title: "Collaboration",
            description: "Bringing together farmers, managers, and administrators in a unified platform",
            emoji: "📊" 
        },
        {
            title: "Innovation",
            description: "Leveraging cutting-edge technology to solve complex supply chain challenges",
            emoji: "🌍" 
        }
    ];

    // 3. Impact Stats Data
    const impactStats = [
        { number: "50+", label: "Distribution Centers", sub: "Across all districts" },
        { number: "5,000+", label: "Active Users", sub: "Farmers & managers" },
        { number: "100K+", label: "Metric Tons", sub: "Tracked annually" },
        { number: "24/7", label: "Monitoring", sub: "Real-time tracking" }
    ];

  return (
    <>
        {/* --- SECTION 1: Intro & Mission/Vision --- */}
        <section className='min-h-screen py-20 bg-gradient-to-r from-green-100 '>
            <div className='container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
                
                {/* Text Content (Kept narrow for readability) */}
                <div className='max-w-3xl mx-auto mb-16 text-center'>
                    <div className='inline-block px-3 py-1 text-sm font-normal text-green-700 bg-white rounded-full shadow-lg mb-7 '>
                        About Us
                    </div>
                    <h2 className='mb-6 text-5xl text-gray-900 md:text-6xl'>
                        Revolutionizing Sri Lanka's <br />
                        <span className='text-green-600 '>Food Supply Chain</span>
                    </h2>
                    <p className='text-lg text-gray-600 '>
                        We're building a comprehensive digital infrastructure to ensure food security,<br />
                        transparency, and efficiency across Sri Lanka's agricultural supply chain
                    </p>
                </div>

                {/* VISUAL CONTENT WRAPPER: Matches Section 3 width (max-w-6xl) */}
                <div className='max-w-6xl mx-auto'>
                    
                    {/* Mission- Vision Grid cards */}
                    <div className='grid grid-cols-1 gap-8 mb-10 md:grid-cols-2'>
                        {aboutCards.map((card, index) => (
                            <div key={index} className={`p-8 transition-shadow bg-white border shadow-sm rounded-3xl hover:shadow-sm ${card.borderColor}`}>
                                <div className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${card.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {card.iconPath}
                                    </svg>
                                </div>
                                
                                <h3 className='mb-4 text-xl font-bold text-gray-900'>{card.title}</h3>
                                <p className='text-sm leading-relaxed text-gray-600'>
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Image Card */}
                    <div className='overflow-hidden bg-white border border-gray-400 shadow-sm rounded-3xl hover:shadow-sm'>
                        <div className='relative h-64 bg-gray-200 md:h-80'>
                            <img 
                                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                                alt="Green Crops" 
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <div className='p-8 md:p-10'>
                            <h3 className='mb-3 text-xl font-medium text-gray-900 md:text-2xl'>
                                Supporting Every Link in Chain
                            </h3>
                            <p className='text-sm leading-relaxed text-gray-600 md:text-base'>
                                From farmers in rural districts to distribution centers nationwide, our platform connects 
                                and empowers every participant in Sri Lanka's food supply ecosystem.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
        {/* --- SECTION 2: How it Works --- */}
        <section className="py-20 bg-gradient-to-r from-green-100/80">
            <div className='px-4 mx-auto max-w-7xl sm:px-5 lg:px-8'>
                <div className='max-w-[85rem] mx-auto mb-16 text-center'>
                    <h2 className='-mt-16 text-3xl font-bold text-gray-900 sm:text-4xl'>How Our Platform Works</h2>
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

        {/* --- SECTION 3: Our Impact --- */}
                <section className='min-h-screen py-20 bg-green-100'>
                    <div className='container mx-auto sm:px-6 lg:px-6 max-w-7xl'>
                        
                        <div className='max-w-6xl mx-auto'>
                            <div className='p-12 text-center bg-white border border-gray-100 shadow-sm rounded-3xl'>
                                
                                <h2 className='mb-4 text-3xl font-bold text-gray-900'>Our Impact</h2>
                                <p className='mb-12 text-gray-600'>Making a difference across Sri Lanka's food supply chain.</p>

                                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                                    {impactStats.map((stat, index) => (
                                        <div key={index} className='flex flex-col p-4 item-center'>
                                            <span className='mb-4 text-4xl font-bold text-green-600'>{stat.number}</span>
                                            <span className='mb-1 text-lg font-semibold text-gray-900'>{stat.label}</span>
                                            <span className='text-sm text-gray-500'>{stat.sub}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default About