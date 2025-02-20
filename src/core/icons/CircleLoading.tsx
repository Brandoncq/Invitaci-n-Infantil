export const CircleLoadingIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
	return (
		<svg
			className={`${className}`}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			style={{ shapeRendering: "auto", display: "block", background: "transparent" }}
		>
			<g>
				<circle
					strokeLinecap="round"
					fill="none"
					strokeDasharray="50.26548245743669 50.26548245743669"
					stroke="#ffffff"
					strokeWidth="8"
					r="32"
					cy="50"
					cx="50"
				>
					<animateTransform
						values="0 50 50;360 50 50"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						type="rotate"
						attributeName="transform"
					/>
				</circle>
				<g />
			</g>
		</svg>
	);
};
