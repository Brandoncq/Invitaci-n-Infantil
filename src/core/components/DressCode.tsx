"use client";
import { DressIcon } from "../icons/Dress";
import { DressCodeProps } from "../interfaces/DressCode";
import { Column } from "./Column";
import { Row } from "./Row";

export const DressCode = ({
  fontTitle,
  fontDescription,
  dressLabel,
  maleLabel,
  femaleLabel,
  femaleIcon,
  maleIcon,
  femaleDescription,
  maleDescription,
  femaleDressType,
  maleDressType,
  colorGuide,
  isMobile,
}: DressCodeProps) => {
  return (
    <Column
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      className={`${
        isMobile && "assistance-assistance "
      } celebration py-8 lg:py-12 gap-3 lg:gap-5 w-full text-center`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <DressIcon className="h-[70px] lg:h-[80px]" />
      <h2
        className={`retro-signature-custom text-2xl lg:text-4xl -mb-2 font-semibold ${fontTitle}`}
      >
        {dressLabel}
      </h2>
      <Column
        mainAxisAlignment="center"
        crossAxisAlignment="center"
        className={`gap-1 lg:gap-2 lg:w-1/2 ${fontDescription}`}
      >
        {colorGuide && (
          <>
            <span className="text-sm lg:text-base">Guía de colores:</span>
            <Column
              mainAxisAlignment="center"
              crossAxisAlignment="center"
              className="gap-1 lg:gap-2"
            >
              <Row className="gap-1 lg:gap-2">
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#2e2e2f]" />
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#4C6A9C]" />
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#64B3EB]" />
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#5E65AD]" />
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#DB869D]" />
              </Row>
              <Row className="gap-1 lg:gap-2">
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#960019]" />
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#D98267]" />
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#E7B35D]" />
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#BBB791]" />
                <span className="h-7 w-7 lg:h-7 lg:w-7 rounded-full bg-[#687C60]" />
              </Row>
            </Column>
          </>
        )}
        <Row className="px-5 gap-3 w-full mt-5">
          <Column crossAxisAlignment="center" className="w-1/2 gap-2">
            <Column crossAxisAlignment="center">
              <p className="text-sm lg:text-base uppercase font-semibold">
                {femaleLabel}
              </p>
              <p className="text-sm lg:text-base uppercase font-semibold">
                {femaleDressType}
              </p>
            </Column>
            {femaleIcon}
            {femaleDescription.map((desc, index) => (
              <p key={index} className="text-sm lg:text-base">
                {desc}
              </p>
            ))}
          </Column>
          <hr className="border-l border-[#000] h-auto" />
          <Column crossAxisAlignment="center" className="w-1/2 gap-2">
            <Column crossAxisAlignment="center">
              <p className="text-sm lg:text-base uppercase font-semibold">
                {maleLabel}
              </p>
              <p className="text-sm lg:text-base uppercase font-semibold">
                {maleDressType}
              </p>
            </Column>
            {maleIcon}
            {maleDescription.map((desc, index) => (
              <p key={index} className="text-sm lg:text-base">
                {desc}
              </p>
            ))}
          </Column>
        </Row>
      </Column>
    </Column>
  );
};
