"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GalleryProps } from "../interfaces/Gallery";
import { Column } from "./Column";
import Slider from "react-slick";
const Gallery = ({ fontTitle, fontDescription, images }: GalleryProps) => {
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
      data-sal="slide-up"
      data-sal-duration="1500"
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
        <p
          className={`text-2xl ${fontTitle} lg:text-4xl text-[#000000] font-semibold`}
        >
          Mi cumpleaños
        </p>
        <span className={`text-sm ${fontDescription} lg:text-base`}>
          Comparto mis mejores momentos
        </span>
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
                  className={`w-full aspect-square object-cover object-center ${
                    imagen?.class || ""
                  }`}
                  src={imagen.src}
                  alt={imagen.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Column>
  );
};
export default Gallery;
