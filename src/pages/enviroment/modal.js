import React, { useState, useEffect } from "react";
import axios from 'axios';

const dataType = {
    "EnvironmentId": '',
    "EnvironmentName": "",
    "CreatedBy": "",
    "DefaultLocation": '',
    "HostName": "",
    "UserName": "",
    "Password": "",
    "Server": "",
    "Datastrore": "",
    "Network": "",
    "ResourcePool": "",
    "CreationTime": ""
}

export default function Modal({ setShowModal, selected, userID, saveData }) {

    const [envmData, setEnvmData] = useState(dataType);
    const [preEnvmData, setpreEnvmData] = useState(selected);
    const [mType, setmType] = useState(false);

    useEffect(() => {
        if (Object.keys(selected).length !== 0) {
            // setpreEnvmData(preEnvmData);
            setEnvmData(selected);
            // setEnvmData(preEnvmData);
            // setEnvmData(envmData => ({...envmData, ...selected}));
            // setEnvmData({...envmData, selected});
            console.log(envmData);
            setmType(true);
            console.log(selected);
        }
    }, []);

    useEffect(() => {
        // console.log(preEnvmData);
        // setEnvmData(envmData => ({...envmData, ...preEnvmData}));
        // setEnvmData(preEnvmData);
        console.log(envmData);
    }, [envmData]);

    const inputChanged = event => {
        const { name, value } = event.target;
        var tmp = { ...envmData };
        tmp[name] = value;

        setEnvmData(tmp)
    }

    const addEvnData = () => {
        envmData.UserId = userID;
        console.log(mType);
        if (mType) {
            axios.put(`https://639feb7024d74f9fe829db07.mockapi.io/api/v1/environment/${envmData.EnvironmentId}`, envmData)
                .then(response => {
                    console.log(response)
                    if (response.data.status === "success") {
                        saveData(envmData, mType);
                        setShowModal(false);
                    }
                });
        } else {
            console.log(envmData);
            axios.post('https://639feb7024d74f9fe829db07.mockapi.io/api/v1/environment', envmData)
                .then(response => {
                    console.log(response)
                    if (response.data.status === "success") {
                        saveData(envmData, mType);
                        setShowModal(false);
                    }
                });
        }
    }

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
                                        <h1 className="text-center">{(mType ? 'Update' : 'Create')} Environment</h1>
                                        <hr className="mt-2 mb-4"></hr>
                                        <form>
                                            <div className="grid grid-cols-2 gap-4">
                                                {/* {envmData !== null ? <RenderInput envmData={envmData} setEnvmData={setEnvmData} /> : null} */}
                                                {envmData !== null ?
                                                    Object.keys(dataType).map((keyName, index) => (
                                                        <div className="form-group" key={index}>
                                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                {keyName}
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
                                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                                onChange={inputChanged}
                                                                value={envmData.keyName}
                                                                name={keyName}
                                                            />
                                                        </div>
                                                    )) : null
                                                }
                                            </div>
                                            <div className="bg-gray-50 pr-0 px-4 py-3 sm:flex sm:flex-row-reverse sm:pl-6">
                                                <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => addEvnData()}>Save</button>
                                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowModal(false)}>Cancel</button>
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

const RenderInput = ({ envmData, setEnvmData }) => {

    const inputChanged = event => {
        const { name, value } = event.target;
        var tmp = { ...envmData };
        tmp[name] = value;

        setEnvmData(tmp)
    }

    useEffect(() => {
        // console.log(preEnvmData);
        // setEnvmData(envmData => ({...envmData, ...preEnvmData}));
        setEnvmData(envmData);
        console.log(envmData);
    }, [envmData]);

    return (
        <>
            {
                Object.keys(dataType).map((keyName, index) => (
                    <div className="form-group" key={index}>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            {keyName}
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            onChange={inputChanged}
                            value={envmData.keyName}
                            name={keyName}
                        />
                    </div>
                ))
            }
        </>
    )
}
