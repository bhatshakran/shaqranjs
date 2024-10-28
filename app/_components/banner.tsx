import Image from "next/image";
import StarSvg from "./starSvg";
import { MoveUpRight } from "lucide-react";

export const ExperiencesLogos = () => {
	return (
		<section className="w-full flex justify-center relative mt-8 bg-transparent">
			<Image
				src="/versai_logo.svg"
				width={80}
				height={100}
				alt="versai"
				className="scale-75"
			/>
			<Image
				src="/hootboard_logo.svg"
				width={250}
				height={20}
				alt="hootboard"
				className="scale-75"
			/>
			<Image
				src="/zivaka_logo.svg"
				width={80}
				height={30}
				alt="zivaka"
				className="scale-75 -ml-2"
			/>
		</section>
	);
};

export const Banner = () => {
	return (
		<div className="w-full bg-center lg:h-screen gap-48 bg-no-repeat bg-cover flex flex-col items-center text-center bg-gradient-to-b from-secondary-color from-20% to-background md:bg-[url('/enhanced-vector.jpeg')] pt-3 md:pt-6 px-4">
			<nav className="bg-white/20 px-3 py-2 border border-gray-500 rounded-full">
				<ul className="flex gap-4 text-sm w-full">
					<li className="cursor-pointer hover:text-teritiary-color">Home</li>
					<li className="cursor-pointer hover:text-teritiary-color">
						Experience
					</li>
					<li className="cursor-pointer hover:text-teritiary-color">
						Projects
					</li>
					<li className="cursor-pointer hover:text-teritiary-color">Tools</li>
				</ul>
			</nav>
			<section className="space-y-3 md:space-y-6">
				<div className="flex flex-col items-center text-sm">
					<Image src="/avatar.svg" alt="avatar" width={60} height={60} />
					<div className="bg-teritiary-color px-2 py-1 rounded-md">
						🟢 Available for opportunities
					</div>
				</div>
				<h1 className="text-3xl md:text-5xl font-pockota relative">
					Welcome to <br />
					<StarSvg className="text-gradient-start-color min-w-9 size-9 -rotate-6 absolute left-6 -top-2 md:hidden" />
					my digital humble abode
					<StarSvg className="text-gradient-start-color min-w-9 size-9 -rotate-6 absolute -right-1 -bottom-1 md:hidden" />
				</h1>
				<p className="text-gray-400">
					I am a fullstack developer.
					<br />
					My passion lies in crafting intuitive user interfaces and implementing
					robust back-end solutions.
				</p>
				<div className="flex gap-5 w-full justify-center items-center">
					<button
						type="button"
						className="bg-primary-color text-secondary-color rounded-md px-4 py-2 font-semibold"
					>
						👋🏻 Lets talk
					</button>
					<button
						type="button"
						className="flex gap-2 items-center border border-gray-600 px-4 py-2 rounded-md"
					>
						Get my CV <MoveUpRight className="size-4" />
					</button>
				</div>
			</section>
			<ExperiencesLogos />
		</div>
	);
};
