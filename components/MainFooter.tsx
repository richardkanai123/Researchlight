import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
	Facebook,
	Github,
	InstagramIcon,
	MailOpenIcon,
	MessageCirclePlusIcon,
	PhoneForwarded,
	PhoneForwardedIcon,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const MainFooter = () => {
	return (
		<footer className='bg-cyan-950 p-8 text-cyan-200 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center align-middle items-center'>
			<div className='flex-1 '>
				<p className='text-center underline text-lg'>Quick Links</p>
				<ul className='text-center text-base list-none space-y-2'>
					<li>
						<Button variant='link'>
							<Link href='/donate'>Support us</Link>
						</Button>
					</li>
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
				</ul>
			</div>

			<div className='flex-1 space-y-3 '>
				<p className='text-center text-lg block'>Contact us</p>
				<div className='flex flex-col  gap-3 justify-center align-middle'>
					<a
						className='w-full flex items-center justify-center gap-2'
						href='https://wa.me/25472016483'
						target='_blank'
						rel='noopener noreferrer'>
						<BsWhatsapp className='w-10 text-center h-10 text-xl ease-linear text-cyan-400 hover:text-cyan-700 bg-purple-700 transition-all hover:bg-green-500 duration-500  rounded-full p-2 ' />
						<span>Whatsapp</span>
					</a>

					<a
						className='w-full flex items-center justify-center gap-2'
						href='mailto:researchlight.media@gmail.com'
						target='_blank'
						rel='noopener noreferrer'>
						<MailOpenIcon className='w-10 text-center h-10 text-xl ease-linear text-cyan-400 hover:text-cyan-700 bg-purple-700 transition-all hover:bg-green-500 duration-500  rounded-full p-2 ' />
						<span>Email</span>
					</a>

					<a
						className='w-full flex items-center justify-center gap-2'
						href='tel:+254720164835'
						target='_blank'
						rel='noopener noreferrer'>
						<PhoneForwardedIcon className='w-10 text-center h-10 text-xl ease-linear text-cyan-400 hover:text-cyan-700 bg-purple-700 transition-all hover:bg-green-500 duration-500  rounded-full p-2 ' />
						<span>Call now</span>
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
