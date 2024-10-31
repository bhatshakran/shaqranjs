import { CircleCheck, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
	title: string;
	results: Array<string>;
	image: string;
	link: string;
}

const ProjectCard = (props: Props) => {
	return (
		<div className="flex flex-col md:flex-row items-center md:items-end md:justify-between gap-12 rounded-xl gradient-bg shadow-sm overflow-hidden shadow-white/30 max-w-3xl relative">
			<Image
				src={props.image}
				width={2000}
				height={2000}
				alt={props.title}
				className="absolute md:hidden w-40 h-50 opacity-45 bottom-0 rounded-tl-3xl right-0  w-30 h-30 z-20"
			/>
			<div className="p-4 md:p-12 z-20">
				<h2 className="text-lg md:text-3xl font-pockota border-b border-white/10 pb-3 md:pb-6">
					{props.title}
				</h2>
				<div className="mt-6 space-y-3">
					{props.results?.map((item) => {
						return (
							<p
								key={item}
								className="flex text-white/60 gap-2 text-sm md:text-base"
							>
								{" "}
								<CircleCheck className="" />
								{item}
							</p>
						);
					})}
				</div>
				<Link target="blank" href={props.link}>
					<button
						type="button"
						className="mt-8 bg-primary-color text-black px-5 py-2 rounded-md flex gap-2 items-center text-sm font-semibold"
					>
						View live site <MoveUpRight className="size-4" />
					</button>
				</Link>
			</div>
			<div className="hidden md:flex items-end justify-end relative w-full md:w-auto z-20">
				<Image
					src={props.image}
					width={2000}
					height={2000}
					alt={props.title}
					className="w-full w-30 h-80 md:rounded-tl-3xl"
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
