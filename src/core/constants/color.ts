export const colorClasses: Record<string, Record<string, string>> = {
	primary: {
		red: "text-white bg-primaryRed hover:bg-darkRed",
		blue: "text-white bg-primaryBlue hover:bg-darkBlue",
		green: "text-secondaryGreen bg-lightGreen hover:bg-primaryGreen",

		roseWhite: "text-white bg-primaryRoseWhite hover:bg-darkRoseWhite",
		purple: "text-white bg-primaryPurple hover:bg-darkPurple",
		violet: "text-white bg-primaryViolet hover:bg-darkViolet",
		mutedViolet: "text-white bg-primaryMutedViolet hover:bg-darkMutedViolet",

		default: "text-white bg-primaryPurple hover:bg-darkPurple",
	},
	secondary: {
		red: "text-secondaryRed bg-lightRed hover:bg-primaryRed",
		blue: "text-secondaryBlue bg-lightBlue hover:bg-primaryBlue",
		green: "text-white bg-primaryGreen hover:bg-darkGreen",

		roseWhite: "text-secondaryRoseWhite bg-lightRoseWhite hover:bg-primaryRoseWhite",
		purple: "text-secondaryPurple bg-lightPurple hover:bg-primaryPurple",
		violet: "text-secondaryViolet bg-lightViolet hover:bg-primaryViolet",
		mutedViolet: "text-secondaryMutedViolet bg-lightMutedViolet hover:bg-primaryMutedViolet",

		default: "text-secondaryPurple bg-lightPurple hover:bg-primaryPurple",
	},
};
