import React from "react";

const StarSvg = (props: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 25 25"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className || ""}
		>
			<path
				d="M12.5114 24.481C12.4018 13.1076 12.1238 12.8195 0.765037 12.2325C12.1383 12.123 12.4265 11.845 13.0135 0.48621C13.1229 11.8595 13.401 12.1477 24.7597 12.7347C13.3864 12.8459 13.0983 13.1187 12.5114 24.481Z"
				fill=" currentColor"
			/>
		</svg>
	);
};

export default StarSvg;
