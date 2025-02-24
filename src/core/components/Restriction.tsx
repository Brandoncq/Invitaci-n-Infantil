"use client";
import { RestrictionProps } from "../interfaces/Restriction";
import { Column } from "./Column";

export const Restriction = ({
  fontTitle,
  fontDescription,
  restrictionConfig,
  isMobile,
}: RestrictionProps) => {
  return (
    <Column
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      className={`${
        isMobile && "assistance-ninios"
      } max-lg:py-10 gap-5 w-full text-center`}
      data-sal="slide-up"
      data-sal-duration="1500"
    >
      <h2
        className={`retro-signature-custom text-2xl lg:text-4xl font-semibold ${fontTitle}`}
      >
        {restrictionConfig.title}
      </h2>
      <Column
        className={`text-sm lg:text-base w-[90%] lg:w-[30rem] leading-loose ${fontDescription}`}
      >
        {restrictionConfig.description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </Column>
    </Column>
  );
};
