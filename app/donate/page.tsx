import Image from "next/image";
import React from "react";
import qr from "../../public/qrcode.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const DonatePage = () => {
	return (
		<div className='w-full min-h-[70vh] max-h-fit flex flex-col items-center align-middle content-center snap-proximity justify-center '>
			<h1 className='text-2xl  text-primary font-semibold text-balance snap-center tracking-normal  snap-proximity text-center max-w-[400px] mb-6'>
				Support us to carry out even more research and build a better future
			</h1>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center '>
				<div className='max-w-[300px] text-xl flex flex-col gap-2  items-center justify-center mx-auto'>
					<p className='text-xl font-semibold'>Scan the QR code</p>
					<span>or</span>
					<Button
						asChild
						className={cn("mx-auto w-full bg-primary text-base")}>
						<a
							href='https://www.paypal.com/ncp/payment/3PD2Q3S5NPX6S'
							target='_blank'
							rel='noopener noreferrer'>
							Prefer paypal or card
						</a>
					</Button>
				</div>

				<div className='relative flex items-center justify-center max-w-[300px] mx-auto'>
					<Image
						src={qr}
						sizes='100vw'
						width={200}
						alt='donation qr code'
					/>
				</div>
			</div>
		</div>
	);
};

export default DonatePage;
