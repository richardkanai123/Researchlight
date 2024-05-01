import React from "react";
import ServiceCard from "./ServiceCard";
import { Service } from "@/lib/types";

// icons
import reImage from "@/public/researchpng.png";
import aiImage from "@/public/ai.png";
import dataImage from "@/public/data-science.png";
import publicationImage from "@/public/publication.png";
import statisticsImage from "@/public/statisticsanalysis.png";
import trainingImage from "@/public/training.png";

const services: Service[] = [
	{
		title: "Academic Research Assistance",
		description:
			"Guiding students and researchers to uphold academic integrity and achieve research excellence.",
		icon: reImage,
		skills: [
			"Research Methodology Guidance",
			"Research Writing, Presentation and Communication Methods",
			"Research Data Management",
			"Academic Research Consultation",
			"Data Analysis, Interpretation  and Visualization",
		],
	},

	{
		title: "Statistical Analysis",
		description:
			"Specializing in social sciences, we provide insights using SPSS, Stata, Excel, R, Python, and MATLAB.",
		icon: statisticsImage,
		skills: [
			"Statistical Analysis",
			"Statistical Modeling",
			"Quantitative and Qualitative Research Support",
		],
	},

	{
		title: "Data Science & Statistical Research",
		description:
			"From collection to analysis to presentation, we handle complex datasets with precision",
		icon: dataImage,
		skills: [
			"Data Collection",
			"Data Cleaning",
			"Data Analysis",
			"Predictive Modelling and Insights",
		],
	},
	{
		title: "Publication Guidance",
		description:
			"Advising on reputable journals and ethical co-authorship practices.",
		icon: publicationImage,
		skills: [
			"Journal Recommendation (Scimago)",
			"Co-authorship and Collaboration Policies",
		],
	},
	{
		title: "Training Workshops",
		description:
			"Equipping you with the skills to utilize statistical tools effectively.",
		icon: trainingImage,
		skills: [
			"Introduction to SPSS",
			"Introduction to Stata",
			"Introduction to R",
			"Introduction to Python",
			"Introduction to MATLAB",
			"Customized Training for Individuals and Groups",
		],
	},
	{
		title: "AI and Technology in Research",
		description: " We provide AI and technology research solutions.",
		icon: aiImage,
		skills: [
			"Ethical Use of AI in Academic Research",
			"AI Integration for Research Efficiency",
			"AI Research Projects",
			"Tools and Technologies for Modern Research",
		],
	},
];

const ServicesBoard = () => {
	return (
		<div className='mx-auto w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-3 mt-4'>
			{services.map((service, index) => (
				<ServiceCard
					service={service}
					key={index}
				/>
			))}
		</div>
	);
};
export default ServicesBoard;
