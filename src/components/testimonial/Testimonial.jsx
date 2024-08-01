import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-green-600'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/img/male_logo.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Maa Umiya Enterprise has transformed my cleaning routine! Their products are not only effective but also safe to use around my kids and pets. The liquid detergents leave my clothes smelling fresh and looking spotless every time. Highly recommend their entire range!</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rahul Patel</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/img/male_logo.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">I have been using Maa Umiya Enterprise cleaning products for a few months now, and I am incredibly impressed. The floor cleaner works wonders, leaving my floors sparkling clean and with a pleasant scent. It's great to find a brand that combines quality and affordability so well.</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rohan Parmar</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/img/female-icon.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">As a busy mom, finding reliable and efficient cleaning products is crucial. Maa Umiya Enterprise's range of chemical liquids has been a game-changer. The multi-surface cleaner tackles all kinds of dirt and grime effortlessly, saving me time and energy. Absolutely love it!</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Krupa Parekh</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">House Wife</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial