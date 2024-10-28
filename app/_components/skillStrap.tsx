import StarSvg from "./starSvg";

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
