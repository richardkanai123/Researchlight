import React from "react";
import { Card, CardTitle, CardDescription } from "./ui/card";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/types";
import Image from "next/image";
const ServiceCard = ({ service }: { service: Service }) => {
	const { description, icon, skills, title } = service;
	return (
		<Card
			className={cn(
				" relative rounded-none  shadow-sm border min-h-[400px] p-4 items-center align-middle  flex flex-col justify-center gap-4  duration-500 delay-0 ease-linear hover:bg-cyan-600 hover:cursor-pointer hover:rounded-md hover:shadow-xl  group",
			)}>
			{/* icon */}
			<div className='mx-auto relative w-[80px] h-[80px] object-cover'>
				<Image
					src={icon}
					alt={title}
					fill
					sizes='100%'
					objectFit='cover'
				/>
			</div>
			<CardTitle className={cn("text-cyan-900 group-hover:text-sky-200 ")}>
				{title}
			</CardTitle>
			<CardDescription
				className={cn("text-lg text-left group-hover:text-slate-600 ")}>
				{description}
			</CardDescription>

			<ol className='text-left list-disc list-inside w-full flex items-center text-teal-900 justify-between flex-wrap group-[hover]:bg-transparent '>
				{skills.map((skill, index) => (
					<li
						key={index}
						className=' list-item text-base font-medium py-1 px-2 rounded-md bg-transparent'>
						{skill}
					</li>
				))}
			</ol>
		</Card>
	);
};

export default ServiceCard;
