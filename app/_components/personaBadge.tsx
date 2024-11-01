import React from "react";

const PersonaBadge = (props: { rotation: string; text: string }) => {
	return (
		<div
			className={`gradient-bg-without-noise p-2 w-fit h-8 rounded-2xl ${props.rotation} flex items-center`}
		>
			{props.text}
		</div>
	);
};

export default PersonaBadge;
