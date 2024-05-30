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
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="kk.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">"Excellent Shopping Experience!" <hr /><hr /> I had an outstanding experience shopping on this website. The user interface is intuitive and easy to navigate. I found exactly what I was looking for within minutes. The product descriptions were detailed, and the customer reviews helped me make an informed decision. My order arrived on time, and the packaging was secure. I will definitely be shopping here again!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kishan keshari</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Lawyer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="ansh.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">"Great Products, Minor Shipping Delay" <hr /><hr />I recently purchased a new laptop from this site. The selection of products is impressive, and the prices are competitive. The checkout process was smooth, and I appreciated the various payment options available. My only gripe is that the shipping took a day longer than expected. Nevertheless, the laptop arrived in perfect condition and works wonderfully. Overall, a positive experience.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Vedant</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Student</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="gaura.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">" Decent Experience, Room for Improvement" <hr /><hr />The website is well-organized, and I found what I needed without much hassle. However, I faced some issues during checkout with my payment not being processed initially. After a couple of tries, it finally went through. The product I ordered is good, but the packaging could have been better to prevent minor damage. Overall, it's an okay experience, but there's room for improvement.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Gaurav</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">SDE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial