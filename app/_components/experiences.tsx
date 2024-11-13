import { ArrowRight } from "lucide-react";
import ExperienceCard from "./experienceCard";
import experiences from "../utils/experiences.json";
import Image from "next/image";
import Link from "next/link";

export const Experiences = () => {
	return (
		<section
			id="experience"
			className="flex flex-col justify-center items-center mt-32 md:mt-32 px-4 lg:px-0 bg-[url('/ellipse.svg')] bg-cover bg-top w-full py-12 md:pt-60"
		>
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
					description={experiences[0].hootboard}
				/>
				<ExperienceCard
					title="Front end developer,"
					company="Versai"
					duration="May 2022 - Jul 2022"
					location="Remote"
					description={experiences[0].versai}
				/>
				<ExperienceCard
					title="Front end developer,"
					company="Zivaka LLP"
					duration="Jan 2022 - Mar 2022"
					location="Remote"
					description={experiences[0].zivaka}
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
					className="bg-secondary-color text-primary-color rounded-md px-4 py-2 font-semibold flex items-center gap-2 relative has-tooltip"
				>
					<div
						data-popover
						id="popover-default"
						role="tooltip"
						className="bg-secondary-color rounded-xl p-3 flex flex-wrap w-20 gap-3 absolute -right-10 -top-60 transition-opacity duration-600 z-10 tooltip"
					>
						<Link href={"https://github.com/bhatshakran"} target="_blank">
							<Image
								src={"/gh.png"}
								width={500}
								height={500}
								alt="gh"
								className="size-12 hover:opacity-60"
							/>
						</Link>
						<Link href={"mailto:bhatshakran@gmail.com"} target="_blank">
							<Image
								src={"/email.webp"}
								width={500}
								height={500}
								alt="email"
								className="size-12 scale-75 hover:opacity-60"
							/>
						</Link>
						<Link href={"tel:9149659818"} target="_blank">
							<Image
								src={"/phone.webp"}
								width={500}
								height={500}
								alt="phone"
								className="size-12 scale-75 hover:opacity-60"
							/>
						</Link>
						<Link
							href={
								"https://www.linkedin.com/in/shaqran-bhat-2150121b7/?_l=en_US"
							}
							target="_blank"
						>
							<Image
								src={"/linkedin.png"}
								width={500}
								height={500}
								alt="linkedin"
								className="size-12 scale-95 hover:opacity-60"
							/>
						</Link>
					</div>
					Contact me <ArrowRight className="size-4" />
				</button>
			</div>
		</section>
	);
};
