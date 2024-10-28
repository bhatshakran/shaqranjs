import { ArrowRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import ExperienceCard from "./_components/experienceCard";
import ProjectCard from "./_components/projectCard";
import Card from "./_components/card";
import StarSvg from "./_components/starSvg";
import { PersonaBadge } from "./_components/PersonaBadge";

export const Hero = () => {
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
export const Experiences = () => {
	return (
		<section className="flex flex-col justify-center items-center mt-32 md:mt-32 px-4 lg:px-0 bg-[url('/ellipse.svg')] bg-cover bg-top w-full py-12 md:pt-60">
			<h4 className="gradient-text font-inter font-semibold">MY EXPERIENCES</h4>
			<h1 className="text-3xl font-pockota mt-4">
				Where I&apos;ve Been Employed
			</h1>

			<div className="max-w-4xl flex flex-col gap-6 mt-16">
				<ExperienceCard
					title="Full stack developer,"
					company="Hootboard"
					duration="May 2023-October 2024"
					location="Remote"
					description="Designed key features for embedding in-platform data widgets,
          charts, and objects to generate technical reports. Designed
          interactions for users to"
				/>
				<ExperienceCard
					title="Front end developer,"
					company="Versai"
					duration="May 2022 - Jul 2022"
					location="Remote"
					description="Designed key features for embedding in-platform data widgets,
          charts, and objects to generate technical reports. Designed
          interactions for users to"
				/>
				<ExperienceCard
					title="Front end developer,"
					company="Zivaka LLP"
					duration="Jan 2022 - Mar 2022"
					location="Remote"
					description="Designed key features for embedding in-platform data widgets,
          charts, and objects to generate technical reports. Designed
          interactions for users to"
				/>
			</div>
			<div className="w-full flex-wrap gap-y-6 max-w-5xl my-48 flex items-center justify-between gradient-bg-without-noise p-6 text-black rounded-2xl">
				<div>
					<h2 className="text-3xl font-pockota">
						Let&apos;s connect and create something amazing!
					</h2>
					<p className="text-sm">
						Reach out to me for collabrations, inquiries or just to say hello
					</p>
				</div>
				<button
					type="button"
					className="bg-secondary-color text-primary-color rounded-md px-4 py-2 font-semibold flex items-center gap-2"
				>
					Contact me <ArrowRight className="size-4" />
				</button>
			</div>
		</section>
	);
};

export const Projects = () => {
	return (
		<section className="w-full flex flex-col justify-center items-center mt-60 md:mt-64 px-4 lg:px-0">
			<h4 className="gradient-text font-inter font-semibold">CURATED WORK</h4>
			<h1 className="text-3xl font-pockota mt-4">My Personal Projects</h1>
			<div className="mt-24 space-y-12">
				<ProjectCard
					title="Ottelo"
					image="/proj_a.jpg"
					results={[
						"Beautiful store to get snowboards.",
						"Built on reactjs and tailwindcss.",
						"Integrated payment platforms like stripe and paypal.",
					]}
				/>
				<ProjectCard
					title="Snowstore"
					image="/proj_b.jpg"
					results={[
						"Beautiful store to get snowboards.",
						"Built on reactjs and tailwindcss.",
						"Integrated payment platforms like stripe and paypal.",
					]}
				/>
				<ProjectCard
					title="Chatter web"
					image="/proj_c.jpg"
					results={[
						"Beautiful store to get snowboards.",
						"Built on reactjs and tailwindcss.",
						"Integrated payment platforms like stripe and paypal.",
					]}
				/>
				<ProjectCard
					title="JD Design Agency"
					image="/proj_d.jpg"
					results={[
						"Beautiful store to get snowboards.",
						"Built on reactjs and tailwindcss.",
						"Integrated payment platforms like stripe and paypal.",
					]}
				/>
			</div>
		</section>
	);
};

export const SkillStrap = () => {
	return (
		<div className="w-full h-16 flex justify-evenly gradient-bg-without-noise items-center text-black uppercase font-semibold font-pockota -rotate-3 my-40">
			<p>Performance</p>
			<StarSvg className="text-black min-w-9 size-9 -rotate-6" />
			<p>Accessibility</p>
			<StarSvg className="text-black min-w-9 size-9 -rotate-6" />
			<p>Security</p>
			<StarSvg className="text-black min-w-9 size-9 -rotate-6" />
			<p>User Centric</p>
			<StarSvg className="text-black min-w-9 size-9 -rotate-6" />
			<p>Maintainability</p>
		</div>
	);
};

export const BeyondPortfolio = () => {
	return (
		<div className="flex flex-col lg:flex-row mx-auto max-w-4xl gap-x-8 gap-y-20 px-4 lg:px-0 my-32">
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
					<div className="mt-8 flex justify-start gap-y-3 gap-x-2 flex-wrap">
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
					</div>
				</Card>

				<div className="bg-gradient-to-r from-gradient-start-color from-50% to-gradient-end-color p-3 rounded-xl relative text-black">
					<div className="bg-[url('/noise_texture.svg')] absolute inset-0 opacity-20" />
					<div className="relative z-30 space-y-3">
						<div className="flex gap-4">
							<Image
								src={"/akram.jfif"}
								width={40}
								height={40}
								alt="aws"
								className="rounded-full shadow shadow-black"
							/>
							<Image
								src={"/traversy.jfif"}
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

export default function Home() {
	return (
		<div className="flex flex-col w-full font-inter md:px-0 overflow-hidden">
			<Hero />
			<Projects />
			<SkillStrap />
			<BeyondPortfolio />
			<Experiences />
		</div>
	);
}
