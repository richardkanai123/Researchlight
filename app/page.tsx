import AboutBoard from "@/components/AboutBoard";
import ServicesBoard from "@/components/ServicesBoard";
import StatsCounter from "@/components/StatsCounter";
import { LampDemo } from "@/components/ui/lamp";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
	return (
		<div
			id='hero'
			className='w-full min-h-screen max-h-fit flex flex-col items-center justify-center align-middle content-center snap-proximity '>
			<LampDemo />

			<div
				id='about'
				className='w-full flex flex-col pt-16 px-4'>
				<h1 className='text-3xl text-primary text-center tracking-wide font-bold text-balance  mb-8 mt-2 snap-proximity '>
					Empowering Your Reserch Journey
				</h1>

				<p className='text-xl font-semibold text-cyan-800 text-center text-balance snap-center tracking-normal leading-relaxed snap-proximity'>
					We delve into the world of academic research with a focus on
					statistics for social sciences, offering comprehensive support in
					research methodology, data collection, and analysis. Our expertise
					extends to Data Science & Statistical Research, ensuring that every
					project is backed by the most advanced analytical tools and
					techniques.
				</p>

				<StatsCounter />

				<AboutBoard />
			</div>
			<div
				id='services'
				className='w-full min-h-screen flex flex-col pt-16 snap-proximity'>
				<h1 className='text-3xl text-primary text-center tracking-wide font-bold text-balance  mb-4 mt-2 snap-proximity'>
					Our Services
					<span className='text-primary'>.</span>
					<span className='text-primary'>.</span>
					<span className='text-primary'>.</span>
					<span className='text-primary'>.</span>
				</h1>

				<p className='text-xl font-semibold text-cyan-800 text-center text-balance snap-center tracking-normal leading-relaxed snap-proximity animate-in animate-accordion-down'>
					Join us at SEARCHLIGHT RESEARCH, where your quest for knowledge is our
					priority. Let us navigate the vast ocean of data and emerge with
					valuable insights together.
				</p>

				<ServicesBoard />
			</div>
			<div
				id='contact'
				className='w-full min-h-screen flex flex-col pt-16 snap-proximity'>
				contact us
			</div>
		</div>
	);
}
