import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Navbar() {
    const context = useContext(myContext);
    const {mode,toggleMode}= context;
    return (
        <div>
            <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>ShopSphere</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link>
                  <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link>

                  <a className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
        </div>
    )
}

export default Navbar
