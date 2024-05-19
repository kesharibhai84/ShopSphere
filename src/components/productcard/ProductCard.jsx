import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function ProductCard() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="ak.jpg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>This is title</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ 500</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://img.freepik.com/free-photo/portrait-handsome-young-man_158595-273.jpg?size=626&ext=jpg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Shopsphere</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>floral shirt</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ 500</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="data:image/jpeg;base64,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" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Shop-Sphere</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Denim shirt</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ 500</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://img.freepik.com/free-photo/young-model-red-shirt-wearing-eyeglasses_114579-17452.jpg?size=626&ext=jpg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Shop-Sphere</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Skirt</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ 500</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    

                </div>

            </div>
        </section >

    )
}

export default ProductCard