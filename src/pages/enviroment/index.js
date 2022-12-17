import React, { useState, useEffect } from "react";
import { FaPlus } from 'react-icons/fa';
import Modal from './modal'

export default function Environment() {

    const envData = [
        {
            name: 'Apple MacBook Pro 17',
            color: 'Red',
            category: 'Laptop',
            price: '$2999'
        },
        {
            name: 'Microsoft Surface Pro',
            color: 'Green',
            category: 'Laptop PC',
            price: '$1999'
        },
        {
            name: 'Magic Mouse 2',
            color: 'Green',
            category: 'Accessories	',
            price: '$99	'
        },
        {
            name: 'Apple Watch',
            color: 'Blue',
            category: 'Watches',
            price: '$199'
        }
    ]
    
    const [showModal, setShowModal] = useState(false);
    const [envList, setEnvList] = useState(envData);
    const [selected, setSelectedData] = useState({});
  
    
    const deleteData = (key) => {
        const list = [...envList];
        list.splice(key, 1);
        setEnvList(list);
    }

    const editData = (key) => {
        let selectedTmp = envData[key];
        setSelectedData(selectedTmp);
        setShowModal(true);
    }
  
    const clickModal = () => {
        setSelectedData({})
        setShowModal(true);
    }

    return (
        <>
            <div className="text-end">
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 items-center inline-flex" onClick={() => clickModal()}><span><FaPlus className='pr-1' /></span> ADD </button>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Color
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Edit
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        envList.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {item.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {item.color}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {item.category}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {item.price}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap cursor-pointer">
                                                    <a
                                                        className="text-green-500 hover:text-green-700"
                                                        onClick={()=>editData(index)}
                                                    >
                                                        Edit
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap cursor-pointer">
                                                    <a
                                                        className="text-red-500 hover:text-red-700"
                                                        onClick={()=>deleteData(index)}
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {showModal ? (
                <Modal setShowModal={setShowModal} selected={selected}/>
            ) : null}
        </>
    );
}