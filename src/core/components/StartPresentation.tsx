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
}: StartPresentationProps) => {
  return (
    <div className={`min-h-screen ${fontTitle}`}>
      <Column
        crossAxisAlignment="center"
        mainAxisAlignment="end"
        className="h-[65vh] pb-10 items-center bg-black text-white gap-4 lg:gap-8 bg-center bg-[url(https://media.discordapp.net/attachments/1342238147811082242/1343439730582356048/0015119_vestido-de-bebe-nina-de-manga-larga-con-tejido-estampado-de-mariposa-rosa.png?ex=67bd473f&is=67bbf5bf&hm=99c3d5e3eadb2cf1d4b90734e677c4884a5eec30a393c0e217e4dcf1816a2351&=&format=webp&quality=lossless&width=594&height=594)]"
      >
        <Column className="gap-10">
          <h1 className="text-5xl lg:text-6xl text-center font-bold">
            <div className="flex gap-2 lg:gap-4">
              <p className="flex gap-2 lg:gap-4">
                <span>{name.split(" & ")[0]}</span>
                <span></span>
              </p>
            </div>
            <span className="text-[2rem] lg:text-[2.5rem] tracking-wide font-bold">
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
