"use client";
import { motion } from "framer-motion";
import Motionh1 from "./Motionh1";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const DonateBanner = () => {
	return (
		<motion.div
			// animate in by brightening
			initial={{ opacity: 0.0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: "easeInOut",
				delayChildren: 0.9,
			}}
			className='w-full bg-sky-800 px-4 py-8 flex flex-col justify-around shadow-md'>
			<Motionh1 text='Donate to Searchlight' />
			<p className='text-xl font-semibold text-cyan-300 text-center text-balance snap-center tracking-normal leading-relaxed snap-proximity animate-in animate-accordion-down'>
				{/* donate statement */}
				Be part of the support team
			</p>

			<Button
				className={cn(
					"max-w-[200px] mx-auto bg-lime-500 text-cyan-700 text-lg",
				)}
				size='lg'>
				Donate now
			</Button>
		</motion.div>
	);
};

export default DonateBanner;
