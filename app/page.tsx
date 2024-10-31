import { Banner } from "./_components/banner";
import { Experiences } from "./_components/experiences";
import { BeyondPortfolio } from "./_components/beyondPortfolio";
import { SkillStrap } from "./_components/skillStrap";
import { Projects } from "./_components/projects";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col w-full font-inter md:px-0 overflow-hidden relative">
			<nav className="bg-white/20 px-3 py-2 border border-gray-500 rounded-full mx-auto fixed top-3 left-1/2 z-50 -translate-x-1/2">
				<ul className="flex gap-4 text-sm w-full">
					<Link
						href={"#banner"}
						className="cursor-pointer hover:text-teritiary-color"
					>
						Home
					</Link>
					<Link
						href={"#experience"}
						className="cursor-pointer hover:text-teritiary-color"
					>
						Experience
					</Link>
					<Link
						href={"#projects"}
						className="cursor-pointer hover:text-teritiary-color"
					>
						Projects
					</Link>
					<Link
						href={"#beyond-pf"}
						className="cursor-pointer hover:text-teritiary-color"
					>
						Tools
					</Link>
				</ul>
			</nav>
			<Banner />
			<Projects />
			<SkillStrap />
			<BeyondPortfolio />
			<Experiences />
		</div>
	);
}
