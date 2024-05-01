import React from "react";
import { Card, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { Service } from "@/lib/types";

const ServiceCard = ({ service }: { service: Service }) => {
	return (
		<Card
			className={cn(
				"rounded-md shadow-sm border min-h-[300px] p-4 items-center align-middle  flex flex-col justify-center gap-4",
			)}>
			<CardTitle>{service.title}</CardTitle>
		</Card>
	);
};

export default ServiceCard;
