import React, { useEffect, useState } from "react";
import axios from 'axios';
const JOB_STATUS = ['NA','Completed','InProgress'];
const Modal = ({setShowModal, id}) => {
	const [job,setJob] = useState({});
	const [resource,setResource] = useState('');
	const handleResourceChange = (e)  => {
		const {value} = e.target;
		if(value === ''){
			setResource('');
			setSbject('');
			setStep('')
		}else{
			setResource(value)
			setStep('')
			setSbject('');
		}
	}
	const [sbject,setSbject] = useState('');
	const handleSbjectChange = (e)  => {
		const {value} = e.target;
		if(value === ''){
			setSbject('');
			setStep('')
		}else{
			setSbject(value)
			setStep('')
		}
	}
	const [step,setStep] = useState('');
	const handleJobStatusChange = event => {
		const {name,value} = event.target;
		let tmp = job;
		tmp.resource_status[resource][sbject][step][name]['status'] = value;
		setJob(tmp);
	}
	const handleStepChange = (e)  => {
		const {value} = e.target;
		if(value === ''){
			setStep('');
		}else{
			setStep(value)
		}
	}

	const handleJobSave = () => {
		axios.put(`https://639ff1677aaf11ceb8a3be9c.mockapi.io/api/v1/job/${id}`,job)
    .then(res=>{
      console.log(res.data)// setJobs(res.data);
			alert('saved');
			setJob(res.data);
			setShowModal(false);
    })
	}
	useEffect(()=>{
    axios.get(`https://639ff1677aaf11ceb8a3be9c.mockapi.io/api/v1/job/${id}`)
    .then(res=>{
			setJob(res.data)
    })
  },[]);
	const INPUT_CLASS = "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
	const BUTTON_CLASS = "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm";
	return (
		<>
		{job.job_id?(
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
													<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name
														<span className="text-red-600">*</span>
													</label>
													<input type="text" className={INPUT_CLASS} name="name" placeholder="name" value={job.job_name} disabled required/>
												</div>
												<div className="form-group mb-6">
													<label className="block text-gray-700 text-sm font-bold mb-2" >
														Resource
														<span className="text-red-600">*</span>
													</label>
													<select onChange={handleResourceChange} className="w-full p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600" name="color" required>
														<option value=''>Select Resource</option>
														{Object.keys(job.resource_status).map((key, i) => (
															<option value={key} key={i} >{key}</option>
														))}
													</select>
												</div>
											{resource === ''?<></>:(
												<div className="form-group mb-6">
												<label className="block text-gray-700 text-sm font-bold mb-2" >
													Subject
													<span className="text-red-600">*</span>
												</label>
												<select onChange={handleSbjectChange} className="w-full p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600" name="color"  required>
													<option value=''>Select Subject</option>
													{Object.keys(job.resource_status[resource]).map((key, i) => (
														<option value={key} key={i} >{key}</option>
													))}
												</select>
											</div>
											)}
											{sbject === ''?<></>:(
												<div className="form-group mb-6">
												<label className="block text-gray-700 text-sm font-bold mb-2" >
													task
													<span className="text-red-600">*</span>
												</label>
												<select onChange={handleStepChange} className="w-full p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600" name={'key'}  required>
													<option value=''>Select task</option>
													{Object.keys(job.resource_status[resource][sbject]).map((key, i) => (
														<option value={key} key={i} >{key}</option>
													))}
												</select>
											</div>
											)}
											{step === ''?<></>:(
												<>
												{Object.keys(job.resource_status[resource][sbject][step]).map((key, i) => (
												<div className="form-group mb-6" key={i}>
													<label className="block text-gray-700 text-sm font-bold mb-2" >
														{key}
														<span className="text-red-600">*</span>
													</label>
													<select onChange={handleJobStatusChange} className="w-full p-1.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-600" name={key}  required>
															{JOB_STATUS.map((item)=>
															<option value={item} key={item}  >{item}</option>
															)}
													</select>
												</div>
												))}
												</>
											)}
											</div>
											<div className="bg-gray-50 pr-0 px-4 py-3 sm:flex sm:flex-row-reverse sm:pl-6">
												<button type="button" className={BUTTON_CLASS}  onClick={handleJobSave}>Save</button>
												<button type="button" className={BUTTON_CLASS}  onClick={() => setShowModal(false)}>Close</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		):(<></>)}

		</>
	);
}
export default Modal;
