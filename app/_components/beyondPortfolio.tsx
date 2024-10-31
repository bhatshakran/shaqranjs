import Image from "next/image";
import Card from "./card";
import PersonaBadge from "./personaBadge";

export const BeyondPortfolio = () => {
	return (
		<div
			id="beyond-pf"
			className="flex flex-col lg:flex-row mx-auto max-w-4xl gap-x-8 gap-y-20 px-4 lg:px-0 my-32"
		>
			<div className="w-full lg:w-1/3 space-y-3">
				<div>
					<h4 className="gradient-text font-inter font-semibold">
						BEYOND PORTFOLIO
					</h4>
					<h1 className="text-3xl font-pockota mt-4">
						Let&apos;s know more about me
					</h1>
				</div>
				<Card
					direction="-30deg"
					startColor="var(--secondary-color)"
					endColor="var(--gradient-start-color)"
					fromPercentange={60}
					title="Currently learning"
					description="Technologies I am currently learning"
				>
					<div className="flex justify-start gap-3 mt-4">
						<Image
							src={"/python.jpg"}
							width={65}
							height={65}
							alt="python"
							className="rounded-md"
						/>
						<Image
							src={"/aws.jpg"}
							width={65}
							height={80}
							alt="aws"
							className="rounded-md shadow shadow-black"
						/>
					</div>
				</Card>
			</div>
			<div className="w-full lg:w-1/3 space-y-3">
				<Card
					direction="-30deg"
					startColor="var(--secondary-color)"
					endColor="var(--gradient-start-color)"
					fromPercentange={60}
					title="My Tech Stack"
					description="Developed key feature for embedding in-platform data widgets,
					charts."
				>
					<div className="mt-8 flex justify-start items-center gap-y-3 gap-x-2 flex-wrap">
						<Image
							src={"/nodejs.png"}
							width={40}
							height={40}
							alt="tech_stack"
						/>
						<Image
							src={"/tailwindcss.png"}
							width={40}
							height={40}
							alt="tech_stack"
						/>
						<Image src={"/ts.png"} width={40} height={40} alt="tech_stack" />
						<Image src={"/sql.png"} width={40} height={40} alt="tech_stack" />
						<Image
							src={"/reactjs.png"}
							width={40}
							height={40}
							alt="tech_stack"
						/>
						<Image src={"/mongo.png"} width={40} height={40} alt="tech_stack" />
						<Image src={"/redis.png"} width={40} height={40} alt="tech_stack" />
						<Image
							src={"/terraform.png"}
							width={40}
							height={40}
							alt="tech_stack"
							className="bg-white rounded-xl scale-90 p-1"
						/>
						<Image
							src={"/gh.png"}
							width={40}
							height={40}
							alt="tech_stack"
							className="scale-125"
						/>
						<Image
							src={"/aws.jpg"}
							width={40}
							height={40}
							alt="tech_stack"
							className="rounded-xl scale-110"
						/>
						<Image
							src={"/redux.png"}
							width={40}
							height={40}
							alt="tech_stack"
							className="bg-white rounded-full p-1"
						/>
					</div>
				</Card>

				<div className="bg-gradient-to-r from-gradient-start-color from-50% to-gradient-end-color p-3 rounded-xl relative text-black">
					<div className="bg-[url('/noise_texture.svg')] absolute inset-0 opacity-20" />
					<div className="relative z-30 space-y-3">
						<div className="flex gap-4">
							<Image
								src={"/akram.png"}
								width={40}
								height={40}
								alt="aws"
								className="rounded-full shadow shadow-black"
							/>
							<Image
								src={"/traversy.png"}
								width={40}
								height={40}
								alt="aws"
								className="rounded-full shadow shadow-black"
							/>
						</div>
						<p>
							Some developers <span className="font-semibold">I admire 🤩</span>
						</p>
					</div>
				</div>
			</div>
			<div className="space-y-6 w-full lg:w-1/3">
				<div>
					<Image
						src={"/location.svg"}
						width={2000}
						height={2000}
						alt="location"
						className="w-full"
					/>
				</div>
				<Card
					direction="-30deg"
					startColor="var(--secondary-color)"
					endColor="var(--gradient-start-color)"
					fromPercentange={70}
					title="My Persona"
					description="Know me as a person"
				>
					<div className="text-sm my-4 flex flex-wrap justify-center gap-3 text-black">
						<PersonaBadge text="Diligent🧠" rotation="rotate-3" />
						<PersonaBadge text="Hiker🚶🏻‍➡️" rotation="-rotate-6" />
						<PersonaBadge text="Night  owl🦉" rotation="-rotate-12" />
						<PersonaBadge
							text="Opinionated extrovert 👾"
							rotation="-rotate-3"
						/>
					</div>
				</Card>
			</div>
		</div>
	);
};
