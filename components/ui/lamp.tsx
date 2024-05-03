"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function LampDemo() {
	const Router = useRouter();

	return (
		<LampContainer>
			<motion.h1
				initial={{ opacity: 0.0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className='w-full mt-8 bg-gradient-to-br from-slate-300 to-cyan-400 py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl'>
				SearchLight
			</motion.h1>

			<motion.p
				initial={{ opacity: 0.1, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.4,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className='w-full mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-3xl'>
				Your trusted social science and research partner.
			</motion.p>
			<motion.div
				initial={{ opacity: 0.5, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className=' mx-auto w-full md:w[75%] lg:w-[50%] justify-center gap-6 flex items-center align-middle p-4 '>
				<Button
					asChild
					size='lg'>
					<Link href='/#about'>About us</Link>
				</Button>
				<Button
					asChild
					variant='link'
					size='default'>
					<Link href='/#contact'>Get in touch now</Link>
				</Button>
			</motion.div>
		</LampContainer>
	);
}

export const LampContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"w-full relative flex h-screen flex-col content-center align-middle items-center justify-center overflow-hidden bg-cyan-950 z-0",
				className,
			)}>
			<div className='relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 '>
				<motion.div
					initial={{ opacity: 0.5, width: "15rem" }}
					whileInView={{ opacity: 1, width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className='absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-900 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'>
					<div className='absolute  w-[100%] left-0 bg-cyan-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
					<div className='absolute  w-40 h-[100%] left-0 bg-cyan-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
				</motion.div>
				<motion.div
					initial={{ opacity: 0.3, width: "15rem" }}
					whileInView={{ opacity: 1, width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className='absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-900 text-white [--conic-position:from_290deg_at_center_top]'>
					<div className='absolute  w-40 h-[100%] right-0 bg-cyan-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
					<div className='absolute  w-[100%] right-0 bg-cyan-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
				</motion.div>
				<div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-cyan-950 blur-2xl'></div>
				<div className='absolute top-1/2 z-50 h-48 w-full bg-cyan-950 opacity-10 backdrop-blur-md'></div>
				<div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-700 opacity-50 blur-3xl'></div>
				<motion.div
					initial={{ width: "8rem" }}
					whileInView={{ width: "16rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-700 blur-2xl'></motion.div>
				<motion.div
					initial={{ width: "15rem" }}
					whileInView={{ width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className='absolute inset-auto z-30 h-0.5 w-full max-w-[30rem] -translate-y-[7rem] bg-cyan-400 '></motion.div>

				<div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-cyan-950 '></div>
			</div>

			<div className='relative z-50 flex -translate-y-[60%] md:-translate-y-[80%] flex-col items-center px-5'>
				{children}
			</div>
		</div>
	);
};
