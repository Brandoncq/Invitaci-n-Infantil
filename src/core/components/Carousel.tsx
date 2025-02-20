import { useState } from "react";

interface CarouselProps {
	images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<div
			className="relative w-full h-[230px] lg:h-[250px]"
			data-carousel="slide"
		>
			<div className="relative overflow-hidden rounded-lg h-[230px] lg:h-[250px]">
				{images.map((image, index) => (
					<div
						key={index}
						className={`absolute transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"} w-full h-[230px] lg:h-[250px]`}
						data-carousel-item
					>
						<img
							src={image}
							className="object-cover block w-full h-full select-none"
							alt={`Slide ${index + 1}`}
						/>
					</div>
				))}
			</div>
			<button
				type="button"
				className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				onClick={goToPrevious}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
					<svg
						className="w-4 h-4 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				onClick={goToNext}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
					<svg
						className="w-4 h-4 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
};
