import React from "react";

export default function Modal({setShowModal, selected}) {

    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5">
                                <div className="sm:flex sm:items-start">
                                    <div className="block px-6 pb-0">
                                        <h1 className="text-center">Job Detail</h1>
                                        <hr className="mt-2 mb-4"></hr>
                                        <form>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="form-group">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                                        Name
                                                        <span className="text-red-600">*</span>
                                                    </label>
                                                    <input type="text" className="form-control
                                                        block
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="name"
                                                        placeholder="Name" value={selected.name} required/>
                                                </div>
                                                <div className="form-group mb-6">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
                                                        Color
                                                        <span className="text-red-600">*</span>
                                                    </label>
                                                    <select className="w-full p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600" name="color"  value={selected.color} required>
                                                        <option value='Red'>Red</option>
                                                        <option value='Yellow'>Yellow</option>
                                                        <option value='Blue'>Blue</option>
                                                        <option value='Green'>Green</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="form-group">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                                                        Type
                                                        <span className="text-red-600">*</span>
                                                    </label>
                                                    <input type="text" className="form-control
                                                        block
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="type"
                                                        placeholder="Type" value={selected.category} required/>
                                                </div>
                                                <div className="form-group mb-6">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                                        Price
                                                        <span className="text-red-600">*</span>
                                                    </label>
                                                    <input type="text" className="form-control
                                                        block
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='price'
                                                        placeholder="Price" value={selected.price} required />
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 pr-0 px-4 py-3 sm:flex sm:flex-row-reverse sm:pl-6">
                                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"  onClick={() => setShowModal(false)}>Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}