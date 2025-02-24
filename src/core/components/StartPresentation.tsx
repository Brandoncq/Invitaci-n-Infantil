import { Column } from "./Column";
import { Countdown } from "./Countdown";
import { Row } from "./Row";
import { StartPresentationProps } from "../interfaces/StartPresentation";

export const StartPresentation = ({
  fontTitle,
  fontDescription,
  fontSecondary,
  name,
  yearFinal,
  monthFinal,
  dayFinal,
  hourFinal,
  minuteFinal,
  secondFinal,
  icon,
}: StartPresentationProps) => {
  return (
    <div className={`min-h-screen ${fontTitle}`}>
      <Column
        crossAxisAlignment="center"
        mainAxisAlignment="end"
        className="h-[65vh] pb-10 items-center bg-black text-white gap-4 lg:gap-8 bg-[url(https://cdn.discordapp.com/attachments/1342238147811082242/1343421539537653760/0015119_vestido-de-bebe-nina-de-manga-larga-con-tejido-estampado-de-mariposa-rosa.png?ex=67bd364e&is=67bbe4ce&hm=ea28e77d34f780d3a4b61cbe5bc46b3fc95ccd70d71dcf731c080d42289bdf01&)]"
      >
        <Column className="gap-10">
          <h1 className="text-3xl lg:text-6xl text-center font-bold">
            <div className="flex gap-2 lg:gap-4">
              <p className="flex gap-2 lg:gap-4">
                <span>{name.split(" & ")[0]}</span>
                <span></span>
              </p>
            </div>
            <span className="text-[1.7rem] lg:text-[2.5rem] tracking-wide font-bold">
              {String(dayFinal).padStart(2, "0")}.
              {String(monthFinal).padStart(2, "0")}.{yearFinal}
            </span>
          </h1>
        </Column>
      </Column>
      <Row
        className="h-[35vh] py-0 lg:py-4"
        crossAxisAlignment="center"
        mainAxisAlignment="center"
      >
        <Countdown
          yearFinal={yearFinal}
          monthFinal={monthFinal}
          fontDescription={fontDescription}
          fontSecondary={fontSecondary}
          dayFinal={dayFinal}
          hourFinal={hourFinal}
          minuteFinal={minuteFinal}
          secondFinal={secondFinal}
        />
      </Row>
    </div>
  );
};
