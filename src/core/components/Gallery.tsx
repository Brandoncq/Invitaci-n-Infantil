import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MEIcon } from "../../features/melissa-eduardo/presentation/icon/ME";
import { GalleryProps } from "../interfaces/Gallery";
import { Column } from "./Column";

export const Gallery = ({ fontTitle, fontDescription, images }: GalleryProps) => {
	const settings = {
		dots: false,
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 3500,
		cssEase: "linear",
		pauseOnHover: true,
		swipeToSlide: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Column
			mainAxisAlignment="center"
			crossAxisAlignment="center"
			className="gallery-bg py-7 w-full"
			data-aos="fade-up"
			data-aos-duration="1500"
		>
			<style>
				{`
                    .slick-slider .slick-prev,
                    .slick-slider .slick-next {
                        display: none !important;
                    }
                    .slick-slider .slick-slide {
                        padding: 10px;
                    }
                `}
			</style>

			<Column className="text-center gap-1 lg:gap-2">
				<p className={`text-2xl ${fontTitle} lg:text-4xl text-[#000000] font-semibold`}>Nuestros momentos</p>
				<span className={`text-sm ${fontDescription} lg:text-base`}>Compartimos con ustedes nuestro amor</span>
			</Column>

			<div className="w-full lg:w-4/5">
				<div className="py-4">
					<Slider {...settings}>
						{images.map((imagen, i) => (
							<div
								className="relative bg-white p-4 lg:p-8 pb-12 lg:pb-24 shadow-[0_0_5px_rgba(0,0,0,0.133)]"
								key={i}
							>
								<img
									className={`w-full aspect-square object-cover object-center ${imagen?.class || ""}`}
									src={imagen.src}
									alt={imagen.alt}
								/>
								<MEIcon className="absolute bottom-14 lg:bottom-32 left-1/2 -translate-x-1/2 transform !w-10 !h-12 lg:!w-20 lg:!h-24 z-10" />
							</div>
						))}
					</Slider>
				</div>
			</div>
		</Column>
	);
};
