import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function DashboardTab() {
    const context = useContext(myContext);
    const { mode, product, edithandle, deleteProduct } = context;
    const navigate = useNavigate();

    const goToAdd = () => {
        navigate('/addproduct');
    };

    const handleEdit = (item) => {
        edithandle(item);
        navigate('/updateproduct/:id');
    };

    return (
        <div>
            <div className="container mx-auto">
                <div className="tab container mx-auto ">
                    <Tabs defaultIndex={0} className="">
                        <TabList className="md:flex md:space-x-8 bg-a grid grid-cols-2 text-center gap-4 md:justify-center mb-10">
                            <Tab>
                                <button type="button" className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center bg-[#605d5d12]">
                                    <div className="flex gap-2 items-center">
                                        <MdOutlineProductionQuantityLimits />Products
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500 hover:shadow-pink-700 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center">
                                    <div className="flex gap-2 items-center">
                                        <AiFillShopping /> Order
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center">
                                    <div className="flex gap-2 items-center">
                                        <FaUser /> Users
                                    </div>
                                </button>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <div className="px-4 md:px-0 mb-16">
                                <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Product Details</h1>
                                <div className="flex justify-end">
                                    <div onClick={goToAdd}>
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                                            style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <div className="flex gap-2 items-center">
                                                Add Product <FaCartPlus size={20} />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <tr>
                                                <th scope="col" className="px-6 py-3">S.No</th>
                                                <th scope="col" className="px-6 py-3">Image</th>
                                                <th scope="col" className="px-6 py-3">Title</th>
                                                <th scope="col" className="px-6 py-3">Price</th>
                                                <th scope="col" className="px-6 py-3">Category</th>
                                                <th scope="col" className="px-6 py-3">Date</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.map((item, index) => {
                                                const { title, price, imageUrl, category, date } = item;
                                                return (
                                                    <tr key={index} className="bg-gray-50 border-b dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {index + 1}.
                                                        </td>
                                                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                            <img className="w-16" src={imageUrl} alt="img" />
                                                        </th>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {title}
                                                        </td>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            ₹{price}
                                                        </td>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {category}
                                                        </td>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {date}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex gap-2">
                                                                <div className="flex gap-2 cursor-pointer text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                                    <div onClick={() => deleteProduct(item)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.056 48.056 0 00-7.5 0" />
                                                                        </svg>
                                                                    </div>
                                                                    <div onClick={() => handleEdit(item)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l2.651 2.651m0 0a1.875 1.875 0 010 2.652L10.126 19.177a4.5 4.5 0 01-1.637 1.053l-4.192 1.397 1.397-4.192a4.5 4.5 0 011.053-1.637L16.862 4.487zm0 0L19.513 2.24a1.875 1.875 0 012.652 0v0a1.875 1.875 0 010 2.652L16.862 4.487z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                        {/* Additional TabPanels for Orders and Users */}
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default DashboardTab;
