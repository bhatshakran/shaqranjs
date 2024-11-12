import ProjectCard from "./projectCard";

export const Projects = () => {
	return (
		<section id="projects" className="w-full flex flex-col justify-center items-center mt-60 md:mt-64 px-4 lg:px-0">
			<h4 className="gradient-text font-inter font-semibold">CURATED WORK</h4>
			<h1 className="text-3xl font-pockota mt-4">My Personal Projects</h1>
			<div className="mt-24 space-y-12">
				<ProjectCard
					title="Ottelo"
					image="/proj_a.jpg"
					results={[
						"A hotel booking website",
						"Built using nextjs and tailwindcss.",
						"You can search for top hotels and book them.",
					]}
					link="https://ottelo.vercel.app"
				/>
				<ProjectCard
					title="Snowstore"
					image="/proj_b.jpg"
					results={[
						"Beautiful store to get snowboards.",
						"Built on nextjs and tailwindcss.",
						"Integrated payment platforms like stripe and paypal.",
					]}
					link="https://snowboard-store.vercel.app"
				/>
				<ProjectCard
					title="Chatter web"
					image="/proj_c.jpg"
					results={[
						"A platform to chat with your friends.",
						"Built on reactjs, graphql and prisma.",
						"Modern design and easy to use.",
					]}
					link="https://chatterweb.netlify.app"
				/>
				<ProjectCard
					title="JD Design Agency"
					image="/proj_d.jpg"
					results={[
						"Website for a design agency",
						"Built using nextjs and tailwindcss.",
					]}
					link="https://designagency-lime.vercel.app/"
				/>
			</div>
		</section>
	);
};
