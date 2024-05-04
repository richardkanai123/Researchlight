import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
	Facebook,
	Github,
	InstagramIcon,
	MessageCirclePlusIcon,
	PhoneForwarded,
	PhoneForwardedIcon,
} from "lucide-react";

const MainFooter = () => {
	return (
		<footer className='bg-cyan-950 p-8 text-cyan-200 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center align-middle items-center'>
			<div className='flex-1 '>
				<p className='text-center underline text-lg'>Quick Links</p>
				<ul className='text-center text-base list-none space-y-2'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/#services'>Services</Link>
					</li>
					<li>
						<Link href='/#about'>About</Link>
					</li>
					<li>
						<Link href='/#contact'>Contact</Link>
					</li>

					<li>
						<Link href='/#FAQ'>FAQS</Link>
					</li>

					<Button className='hover:bg-lime-400 hover:text-cyan-900'>
						Donate Now
					</Button>
				</ul>
			</div>

			<div className='flex-1 space-y-3 '>
				<p className='text-center text-lg block'>Contact us</p>
				<div className='flex flex-col  gap-3 justify-center align-middle'>
					<a
						className='w-full flex items-center justify-center gap-2'
						href='http://'
						target='_blank'
						rel='noopener noreferrer'>
						<Facebook className='w-10 text-center h-10 text-xl ease-linear text-cyan-400 hover:text-cyan-700 bg-purple-700 transition-all hover:bg-green-500 duration-500  rounded-full p-2 ' />
						Facebook
					</a>

					<a
						className='w-full flex items-center justify-center gap-2'
						href='http://'
						target='_blank'
						rel='noopener noreferrer'>
						<InstagramIcon className='w-10 text-center h-10 text-xl ease-linear text-cyan-400 hover:text-cyan-700 bg-purple-700 transition-all hover:bg-green-500 duration-500  rounded-full p-2 ' />
						Instagram
					</a>

					<a
						className='w-full flex items-center justify-center gap-2'
						href='http://'
						target='_blank'
						rel='noopener noreferrer'>
						<MessageCirclePlusIcon className='w-10 text-center h-10 text-xl ease-linear text-cyan-400 hover:text-cyan-700 bg-purple-700 transition-all hover:bg-green-500 duration-500  rounded-full p-2 ' />
						Whatsapp
					</a>

					<a
						className='w-full flex items-center justify-center gap-2'
						href='http://'
						target='_blank'
						rel='noopener noreferrer'>
						<PhoneForwardedIcon className='w-10 text-center h-10 text-xl ease-linear text-cyan-400 hover:text-cyan-700 bg-purple-700 transition-all hover:bg-green-500 duration-500  rounded-full p-2 ' />
						Call now
					</a>
				</div>
			</div>

			<div className='flex-1'>
				<p className='text-center text-base'>
					Searchlight Research . All Rights Reserved.
				</p>
				<p className='text-center text-lg'>
					Copyright &copy; {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default MainFooter;
