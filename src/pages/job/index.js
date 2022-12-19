import React, { useState } from "react";
import Modal from './modal'

export default function Job() {
    const envData = [
        {
            name: 'Apple MacBook Pro 17',
            color: 'Red',
            category: 'Laptop',
            price: '$2999',
            status: 'active'
        },
        {
            name: 'Microsoft Surface Pro',
            color: 'Green',
            category: 'Laptop PC',
            price: '$1999',
            status: 'active'
        },
        {
            name: 'Magic Mouse 2',
            color: 'Green',
            category: 'Accessories	',
            price: '$99	',
            status: 'in-active'
        },
        {
            name: 'Apple Watch',
            color: 'Blue',
            category: 'Watches',
            price: '$199',
            status: 'active'
        }
    ]

    const [showModal, setShowModal] = useState(false);
    const [selected, setSelectedData] = useState({});

    const ShowDetail = (key) => {
        setSelectedData(envData[key]);
        setShowModal(true);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-auto border rounded-lg">
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
                                            Job Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        envData.map((item, index) => (
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
                                                <td className="px-6 py-4 text-sm text-gray-800 text-right whitespace-nowrap">
                                                    {(item.status == 'active' ? <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Active</span> : <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800">In Active</span>)}
                                                    
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap cursor-pointer">
                                                    <a
                                                        className="text-blue-500 hover:text-blue-700"
                                                        onClick={()=>ShowDetail(index)}
                                                    >
                                                        Detail
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