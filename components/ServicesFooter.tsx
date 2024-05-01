"use client";
import { motion } from "framer-motion";
const ServicesFooter = () => {
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
			className='w-full bg-cyan-900 px-4 py-8 flex flex-col justify-around shadow-md'>
			<p className='text-xl font-semibold text-cyan-100 text-center text-balance snap-center tracking-normal leading-relaxed snap-proximity animate-in animate-accordion-down'>
				Embark on a journey with SEARCHLIGHT RESEARCH, where knowledge is a
				collaborative pursuit. We guide you through developing research
				questions, designing studies, and analyzing data—ensuring your academic
				growth is nurtured by your own efforts and discoveries, free from the
				shadow of outsourced assignments.
			</p>
		</motion.div>
	);
};

export default ServicesFooter;
