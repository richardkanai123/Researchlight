"use client";
import React from "react";
import { motion } from "framer-motion";
const Motionh1 = ({ text }: { text: string }) => {
	return (
		<motion.h1
			initial={{ opacity: 0.1 }}
			whileInView={{ opacity: 1 }}
			transition={{
				delay: 0.2,
				duration: 0.75,
				ease: "easeInOut",
			}}
			className='text-3xl text-center tracking-wide font-bold text-balance  mb-8 mt-2 snap-proximity '>
			{text}
		</motion.h1>
	);
};

export default Motionh1;
