"use client";
import { CelebrationProps } from "../interfaces/Celebration";
import { Carousel } from "./Carousel";
import { Column } from "./Column";

export const Celebration = ({
  fontTitle,
  fontDescription,
  ceremonyImages,
  receptionImages,
  ceremonyTime,
  ceremonyLocation,
  ceremonyAddress,
  ceremonyMapLink,
  receptionTime,
  receptionLocation,
  receptionAddress,
  receptionMapLink,
}: CelebrationProps) => {
  const renderPart = (
    title: string,
    images: string[],
    time: string,
    location: string,
    address: string,
    mapLink: string
  ) => {
    return (
      <>
        <div
          className="w-[80%] lg:w-full h-[230px] lg:h-[250px]"
          data-sal="slide-up"
          data-sal-duration="1500"
        >
          <Carousel images={images} />
        </div>
        <Column
          crossAxisAlignment="center"
          className={`gap-3 ${fontDescription}`}
          data-sal="slide-up"
          data-sal-duration="1500"
        >
          <h2
            className={`text-xl lg:text-4xl pt-2 text-[#000000] ${fontTitle} font-semibold`}
          >
            {title}
          </h2>
          <span className="text-blackGray">{time}</span>
          <Column
            crossAxisAlignment="center"
            mainAxisAlignment="center"
            className="lg:text-xl gap-2 lg:gap-3 w-full text-blackGray"
          >
            <span className="lg:w-3/3 max-lg:text-base font-medium uppercase">
              {location}
            </span>
            <span className="max-lg:text-base w-4/4">{address}</span>
          </Column>
          <a
            href={mapLink}
            rel="noreferrer"
            target="_blank"
            className="text-xs w-[200px] lg:w-[340px] text-black"
          >
            Ver ubicación
          </a>
        </Column>
      </>
    );
  };

  return (
    <Column
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      className="relative celebration w-full lg:py-10"
    >
      <h2
        className={`text-xl lg:text-4xl pt-4 max-lg:px-20 lg:pt-8 ${fontTitle} max-lg:hidden text-[#000000] font-semibold`}
        data-sal="slide-up"
        data-sal-duration="1500"
      >
        ¿Dónde y cuándo?
      </h2>
      <article className="max-lg:flex-col max-lg:items-center flex justify-center text-center lg:py-16 w-full lg:w-[50rem] gap-0 lg:gap-16">
        <Column
          crossAxisAlignment="center"
          className="max-lg:pt-0 max-lg:pb-4 w-full gap-4 lg:gap-8 lg:w-1/2"
        >
          <h2
            className={`lg:hidden max-lg:pb-4 ${fontTitle} text-2xl pt-4 lg:pt-8 text-[#000000] mt-10 font-semibold`}
            data-sal="slide-up"
            data-sal-duration="1500"
          >
            ¿Dónde y cuándo?
          </h2>
          {renderPart(
            "Ceremonia",
            ceremonyImages,
            ceremonyTime,
            ceremonyLocation,
            ceremonyAddress,
            ceremonyMapLink
          )}
        </Column>

        <Column
          crossAxisAlignment="center"
          className="max-lg:pt-4 max-lg:pb-8 gap-4 lg:gap-8 w-full lg:w-1/2"
        >
          {renderPart(
            "Recepción",
            receptionImages,
            receptionTime,
            receptionLocation,
            receptionAddress,
            receptionMapLink
          )}
        </Column>
      </article>
      <div className="absolute w-full h-full flex flex-wrap justify-between">
        <div className="w-1/5">
          <img
            src="https://cdn.discordapp.com/attachments/1342238147811082242/1343428568469864551/fondo-nube-estrella.png?ex=67bd3cda&is=67bbeb5a&hm=1afa02e333bb30c95d6c043deb36de822777170f283ebb1b7e5b0e702f43de18&"
            alt=""
            className="w-52 h-auto"
          />
        </div>
        <div className="w-1/5 flex justify-end items-end">
          <img
            src="https://cdn.discordapp.com/attachments/1342238147811082242/1343429120566100018/fondo-nube-estrella-2.png?ex=67bd3d5e&is=67bbebde&hm=c1f482288049ea24a1587de8978f91b1ff49871a300c2b2305fd4138fd3cf96c&"
            alt=""
            className="w-52 h-auto"
          />
        </div>
      </div>
    </Column>
  );
};
