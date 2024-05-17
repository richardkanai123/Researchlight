"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const ContactForm = () => {
	const [senderName, setSenderName] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [senderMessage, setSenderMessage] = useState("");

	// form states
	const [isPending, setIsPending] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// submit function
	const publicKey = process.env.NEXT_EMAILKEY as string;
	const template = process.env.NEXT_EMAIL_TEMPLATE as string;
	const serviceID = process.env.NEXT_EMAIL_SERVICE as string;
	const emailData = {
		sender_name: senderName,
		sender_email: senderEmail,
		message: senderMessage,
	};

	return (
		<div className='mx-auto w-full p-4'>
			<p className='text-cyan-700 text-lg font-light text-center text-balance mb-6'>
				For any enquiries or concerns, reach out by filling this form
			</p>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					if (senderName === "" || senderEmail === "" || senderMessage === "") {
						setIsError(true);
						setIsPending(false);
						setErrorMessage("Please fill all fields");
						return false;
					}
					setIsPending(true);

					if (serviceID && template && publicKey) {
						try {
							const res = await emailjs.send(
								serviceID,
								template,
								emailData,
								publicKey,
							);

							if (res.status === 200) {
								setIsSuccess(true);
								setIsPending(false);
								setSenderName("");
								setSenderEmail("");
								setSenderMessage("");
								setErrorMessage("");
							}
						} catch (error) {
							setIsError(true);
							setIsPending(false);
							setErrorMessage("Something went wrong, please try again later!");
						}
					}
				}}
				className='mx-auto w-full max-w-[500px] flex flex-col gap-6 align-middle justify-center text-base font-semibold text-slate-800 p-4 mb-4'>
				{/* name */}
				<input
					value={senderName}
					onChange={(e) => setSenderName(e.target.value)}
					type='text'
					required
					placeholder='Name'
					className='w-full outline-none ring-0 focus:border focus:rounded-sm border-b-2 border-cyan-500 p-2 '
				/>

				{/* email */}

				<input
					type='email'
					value={senderEmail}
					onChange={(e) => setSenderEmail(e.target.value)}
					required
					placeholder='Email address'
					className='w-full outline-none ring-0 focus:border focus:rounded-sm border-b-2 border-cyan-500 p-2 '
				/>

				{/* message */}
				<textarea
					value={senderMessage}
					onChange={(e) => setSenderMessage(e.target.value)}
					rows={10}
					placeholder='Enter your message, question or concern here '
					required
					className='w-full outline-none ring-0 border focus:rounded-sm border-b-2 border-cyan-500 p-2 '
				/>

				{/* error message */}
				{isError && <p className='text-red-400 my-2'>{errorMessage}</p>}

				<Button
					// type='submit'
					size='lg'
					disabled={isSuccess || isError}
					className={cn("mx-auto w-full max-w-[300px] ring-0 outline-none ")}>
					{isSuccess ? "Sent!" : "Send message"}
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
