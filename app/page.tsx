import { Banner } from "./_components/banner";
import { Experiences } from "./_components/experiences";
import { BeyondPortfolio } from "./_components/beyondPortfolio";
import { SkillStrap } from "./_components/skillStrap";
import { Projects } from "./_components/projects";

export default function Home() {
	return (
		<div className="flex flex-col w-full font-inter md:px-0 overflow-hidden">
			<Banner />
			<Projects />
			<SkillStrap />
			<BeyondPortfolio />
			<Experiences />
		</div>
	);
}
