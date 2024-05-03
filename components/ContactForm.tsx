"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ContactForm = () => {
	return (
		<div className='mx-auto w-full p-4'>
			<p className='text-cyan-700 text-lg font-light text-center text-balance mb-6'>
				For any enquiries or concerns, reach out by filling this form
			</p>
			<form className='mx-auto w-full max-w-[500px] flex flex-col gap-6 align-middle justify-center text-base font-semibold text-slate-800 p-4 mb-4'>
				{/* name */}
				<input
					type='text'
					placeholder='Name'
					className='w-full outline-none ring-0 focus:border focus:rounded-sm border-b-2 border-cyan-500 p-2 '
				/>

				{/* email */}

				<input
					type='email'
					required
					placeholder='Email address'
					className='w-full outline-none ring-0 focus:border focus:rounded-sm border-b-2 border-cyan-500 p-2 '
				/>

				{/* message */}
				<textarea
					rows={10}
					placeholder='Enter your message, question or concern here '
					required
					className='w-full outline-none ring-0 border focus:rounded-sm border-b-2 border-cyan-500 p-2 '
				/>

				<Button
					size='lg'
					className={cn("mx-auto w-full max-w-[300px] ring-0 outline-none ")}>
					Send Message
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
