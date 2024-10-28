import { ArrowRight } from "lucide-react";
import ExperienceCard from "./experienceCard";

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