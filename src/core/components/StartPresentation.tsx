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
        className="h-[65vh] pb-24 items-center bg-black text-white gap-4 lg:gap-8"
      >
        {icon && <div className="w-16 lg:w-24">{icon}</div>}

        <Column className="gap-10">
          <h1 className="text-3xl lg:text-5xl text-center">
            <div className="flex gap-2 lg:gap-4">
              <p className="flex gap-2 lg:gap-4">
                <span>{name.split(" & ")[0]}</span>
                <span> & </span>
                <span className="ml-2 lg:ml-3">{name.split(" & ")[1]}</span>
              </p>
            </div>
            <span className="text-[1.7rem] lg:text-[2.5rem] tracking-wide">
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
