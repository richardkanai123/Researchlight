import React from "react";
import ServiceCard from "./ServiceCard";
import { Service } from "@/lib/types";

const services: Service[] = [
	{
		title: "Academic Research Assistance",
		description:
			"Guiding students and researchers to uphold academic integrity and achieve research excellence.",
		icon: "book-open",
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
		icon: "book-open",
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
		icon: "book-open",
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
		icon: "book-open",
		skills: [
			"Journal Recommendation (Scimago)",
			"Co-authorship and Collaboration Policies",
		],
	},
	{
		title: "Training Workshops",
		description:
			"Equipping you with the skills to utilize statistical tools effectively.",
		icon: "book-open",
		skills: [
			"Introduction to SPSS",
			"Introduction to Stata",
			"Introduction to R",
			"Introduction to Python",
			"Introduction to MATLAB",
			"Customized Training for Individuals and Groups",
		],
	},
];

const ServicesBoard = () => {
	return (
		<div className='mx-auto w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-3 '>
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
