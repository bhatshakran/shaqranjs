import ProjectCard from "./projectCard";

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
					link="https://ottelo.vercel.app"
				/>
				<ProjectCard
					title="Snowstore"
					image="/proj_b.jpg"
					results={[
						"Beautiful store to get snowboards.",
						"Built on reactjs and tailwindcss.",
						"Integrated payment platforms like stripe and paypal.",
					]}
					link="https://snowboard-store.vercel.app"
				/>
				<ProjectCard
					title="Chatter web"
					image="/proj_c.jpg"
					results={[
						"Beautiful store to get snowboards.",
						"Built on reactjs and tailwindcss.",
						"Integrated payment platforms like stripe and paypal.",
					]}
					link="https://chatterweb.netlify.app"
				/>
				<ProjectCard
					title="JD Design Agency"
					image="/proj_d.jpg"
					results={[
						"Beautiful store to get snowboards.",
						"Built on reactjs and tailwindcss.",
						"Integrated payment platforms like stripe and paypal.",
					]}
					link="https://designagency-lime.vercel.app/"
				/>
			</div>
		</section>
	);
};
