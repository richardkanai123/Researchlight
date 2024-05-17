import AboutBoard from "@/components/AboutBoard";
import ContactForm from "@/components/ContactForm";
import DonateBanner from "@/components/DonateBanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import Motionh1 from "@/components/Motionh1";
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
import { BsWhatsapp } from "react-icons/bs";

export default function Home() {
	return (
		<div
			id='hero'
			className='w-full min-h-screen max-h-fit flex flex-col items-center justify-center align-middle content-center snap-proximity '>
			<LampDemo />

			<div
				id='about'
				className='w-full flex flex-col pt-16 px-4'>
				<Motionh1 text='Empowering Your Reserch Journey' />

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
				<Motionh1 text='Our Services' />

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
							href='https://wa.me/254720164835'
							target='_blank'
							rel='noopener noreferrer'>
							<BsWhatsapp className='w-10 text-center h-10 text-xl ease-linear text-cyan-200 hover:text-cyan-700 hover:bg-purple-700 transition-all bg-green-500 duration-500  rounded-full p-2 ' />
						</a>

						<a
							href='mailto:researchlight.media@gmail.com'
							target='_blank'
							rel='noopener noreferrer'>
							<MailPlusIcon className='w-10 text-center h-10 text-xl ease-linear text-cyan-400 hover:text-cyan-700 bg-yellow-700 transition-all hover:bg-green-500 duration-500  rounded-full p-2 ' />
						</a>
					</section>

					<p className='text-xl text-center mb-4 text-cyan-700'>
						or
						<br />
						Call Us Now :+254720164835
						<br />
						<br />
						<span>Email: researchlight.media@gmail.com </span>
					</p>
				</div>
				<ContactForm />
			</div>

			{/* DOnate Banner */}

			<DonateBanner />

			{/* FAQS */}
			<div
				id='FAQ'
				className='mx-auto w-full min-h-screen flex flex-col items-center justify-center p-4 snap-proximity'>
				<Motionh1 text='FAQS' />

				<FAQAccordion />
			</div>
		</div>
	);
}
