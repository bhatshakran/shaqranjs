import type React from "react";
import StarSvg from "./starSvg";

interface Props {
	startColor: string;
	endColor: string;
	direction: string;
	fromPercentange?: number;
	title: string;
	description: string;
	children: React.ReactNode;
}

const Card = (props: Props) => {
	return (
		<div
			className="p-6 rounded-xl relative shadow-inner shadow-white/30"
			style={{
				backgroundImage: `linear-gradient(${props.direction}, ${props.startColor} ${props.fromPercentange}%, ${props.endColor})`,
			}}
		>
			<div className="absolute inset-0 bg-[url('/noise_texture.svg')] z-10 bg-cover bg-no-repeat bg-center" />
			<div className="relative z-20">
				<div className="space-y-2">
					<h5 className="flex gap-2 items-center text-lg justify-start">
						<StarSvg className="text-gradient-start-color size-8" />
						{props.title}
					</h5>
					<p className="text-sm text-gray-400">{props.description}</p>
				</div>
				{props.children}
			</div>
		</div>
	);
};

export default Card;
