"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
	const pathName = usePathname();
	return (
		<div className='z-20 bg-cyan-950 py-4 px-2 text-white flex justify-between  align-middle items-center sticky top-0 left-0 right-0 backdrop-blur-lg'>
			<div>Searchlight</div>
			<nav className='hidden md:flex  justify-center  font-semibold tracking-wide gap-4 align-middle items-center text-base'>
				<Link href='/'>Home</Link>
				<Link href='/#about'>About</Link>
				<Link href='/#services'>Services</Link>
				<Link href='/#contact'>Contact</Link>
			</nav>

			<div>
				<DropdownMenu>
					<DropdownMenuTrigger className={cn("inline-block md:hidden")}>
						<MenuIcon className='w-8 h-8' />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<nav className='w-full h-full bg-transparent  flex md:hidden flex-col justify-center  font-semibold tracking-wide gap-2 align-middle items-center text-base'>
							<DropdownMenuItem>
								<Link
									href='/'
									className='w-full'>
									Home
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Link href='/#about'>About</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Link href='/#services'>Services</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Link href='/#contact'>Contact</Link>
							</DropdownMenuItem>
						</nav>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default Header;
