import React from "react";

interface Props {
	title: string;
	company: string;
	duration: string;
	location: string;
	description: string;
}

const ExperienceCard = (props: Props) => {
	const { title, company, duration, location, description } = props;
	return (
		<div className="flex flex-col md:flex-row gap-6 w-full  text-left border-b pb-3 border-white/20">
			<div className="w-full md:w-2/5">
				<h3>
					{title}
					<span className="gradient-text"> {company}</span>
				</h3>
				<p className="text-sm text-white/80 italic">
					{duration}/{location}
				</p>
			</div>
			<div className="w-full md:w-3/5 text-white/80">{description}</div>
		</div>
	);
};

export default ExperienceCard;
