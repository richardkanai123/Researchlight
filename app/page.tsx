import AboutBoard from "@/components/AboutBoard";
import ContactForm from "@/components/ContactForm";
import ServicesBoard from "@/components/ServicesBoard";
import ServicesFooter from "@/components/ServicesFooter";
import StatsCounter from "@/components/StatsCounter";
import { LampDemo } from "@/components/ui/lamp";
import { cn } from "@/lib/utils";
import {
	Facebook,
	FacebookIcon,
	InstagramIcon,
	MailPlusIcon,
} from "lucide-react";
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

				<ServicesFooter />
			</div>
			<div
				id='contact'
				className='mx-auto w-full min-h-screen flex flex-col pt-16 snap-proximity'>
				<div className='w-full flex flex-col p-4 items-center align-middle justify-center gap-4'>
					<h1 className='text-xl text-primary text-center tracking-wide font-bold text-balance mt-2 snap-proximity '>
						Contact us now
					</h1>

					<section className='w-full mx-auto flex items-center content-center gap-4 align-baseline justify-center'>
						{/* social links icons */}
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<Facebook className='w-8 h-8 text-xl ease-linear text-cyan-400 hover:text-cyan-700' />
						</a>

						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<InstagramIcon className='w-8 h-8 text-xl ease-linear text-cyan-400 hover:text-cyan-700' />
						</a>

						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<MailPlusIcon className='w-8 h-8 text-xl ease-linear text-cyan-400 hover:text-cyan-700' />
						</a>
					</section>
				</div>
				<ContactForm />
			</div>
		</div>
	);
}
