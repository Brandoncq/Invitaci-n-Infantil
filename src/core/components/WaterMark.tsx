import { businessName, urlBusinessName } from "../constants/utils";

export const WaterMark = () => {
	return (
		<footer className="flex w-full text-black opacity-70 justify-center mt-auto px-4 py-5 text-sm lg:text-base bg-transparent">
			<a
				href={urlBusinessName}
				target="_blank"
				rel="noreferrer"
			>
				Creado con ♥️ por <span className="underline">{businessName}</span>
			</a>
		</footer>
	);
};
