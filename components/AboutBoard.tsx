import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

const AboutBoard = () => {
	return (
		<div className='mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-5 border-slate-600 '>
			<Card
				className={cn(
					"p-4 min-h-[150px] items-center align-middle rounded-none shadow-md flex flex-col justify-center gap-4 hover:bg-muted focus:shadow-xl hover:shadow-xl backdrop:blur-lg",
				)}>
				<CardTitle
					className={cn("text-justify text-2xl font-bold text-cyan-700")}>
					Mission
				</CardTitle>
				<CardDescription className={cn("text-justify text-lg text-cyan-900")}>
					To empower researchers and students with the tools and knowledge
					necessary to conduct rigorous and impactful studies. We strive to
					simplify the complexities of academic research, making it accessible
					and manageable for all.
				</CardDescription>
			</Card>
			<Card
				className={cn(
					"p-4 min-h-[150px] items-center align-middle rounded-none shadow-md flex flex-col justify-center gap-4 hover:bg-muted focus:shadow-xl hover:shadow-xl backdrop:blur-lg ",
				)}>
				<CardTitle
					className={cn("text-justify text-2xl font-bold text-cyan-700")}>
					Vision
				</CardTitle>
				<CardDescription className={cn("text-justify text-lg text-cyan-900")}>
					To be the guiding light in the realm of academic research,
					illuminating the path to discovery and knowledge. We value integrity,
					collaboration, and innovation, and are committed to fostering an
					environment where these principles thrive.
				</CardDescription>
			</Card>
			<Card
				className={cn(
					"p-4 min-h-[150px] items-center align-middle rounded-none shadow-md flex flex-col justify-center gap-4 hover:bg-muted focus:shadow-xl hover:shadow-xl backdrop:blur-lg",
				)}>
				<CardTitle
					className={cn("text-justify text-2xl font-bold text-cyan-700")}>
					Expertise
				</CardTitle>
				<CardDescription className={cn("text-justify text-lg text-cyan-900")}>
					Our team comprises seasoned experts in statistics, data science, and
					research methodology. With a wealth of experience across various
					disciplines, we bring a unique blend of skills that ensure the highest
					quality of support for your research endevours.
				</CardDescription>
			</Card>
			<Card
				className={cn(
					"p-4 min-h-[150px] items-center align-middle rounded-none shadow-md flex flex-col justify-center gap-4 hover:bg-muted focus:shadow-xl hover:shadow-xl backdrop:blur-lg",
				)}>
				<CardTitle
					className={cn("text-justify text-2xl font-bold text-cyan-700")}>
					Ethical Standards and Academic Integrity
				</CardTitle>
				<CardDescription className={cn("text-justify text-lg text-cyan-900")}>
					We hold ourselves to the highest ethical standards, ensuring that all
					research conducted and supported by us adheres to the strictest
					principles of academic integrity. We do not condone or participate in
					the completion of assignments for students; instead, we provide the
					necessary guidance to help them achieve their research goals
					independently.
				</CardDescription>
			</Card>
		</div>
	);
};

export default AboutBoard;
