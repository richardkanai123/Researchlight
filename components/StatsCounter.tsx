import React from "react";

const StatsCounter = () => {
	return (
		<div className='mx-auto w-full my-4 p-3  flex items-center align-middle flex-col md:flex-row rounded-md gap-4 text-cyan-900'>
			<div className='w-full md:w-auto min-h-[150px] flex-1 bg-slate-200 rounded-sm text-center px-4 py-4 flex flex-col justify-around shadow-md'>
				<p className='text-lg  font-semibold'>Projects Completed</p>
				<p className='text-3xl font-bold'>250 </p>
			</div>
			<div className='w-full md:w-auto min-h-[150px] flex-1 bg-slate-200 rounded-sm text-center px-4 py-4 flex flex-col justify-around shadow-md'>
				<p className='text-lg font-semibold'>Average Rating</p>
				<p className='text-3xl font-bold'>9.5</p>
			</div>
			<div className='w-full md:w-auto min-h-[150px] flex-1 bg-slate-200 rounded-sm text-center px-4 py-4 flex flex-col justify-around shadow-md'>
				<p className='text-lg font-semibold'>Countries Served</p>
				<p className='text-3xl font-bold'>75</p>
			</div>
			<div className='w-full md:w-auto min-h-[150px] flex-1 bg-slate-200 rounded-sm text-center px-4 py-4 flex flex-col justify-around shadow-md'>
				<p className='text-lg font-semibold '>Customers Served</p>
				<p className='text-3xl font-bold'>188</p>
			</div>
			<div className='w-full md:w-auto min-h-[150px] flex-1 bg-slate-200 rounded-sm text-center px-4 py-4 flex flex-col justify-around shadow-md'>
				<p className='text-lg font-semibold'>Customers Return Rate</p>
				<p className='text-3xl font-bold'>87%</p>
			</div>
		</div>
	);
};

export default StatsCounter;
