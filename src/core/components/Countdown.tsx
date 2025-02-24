"use client";
import { useEffect, useRef, useState } from "react";
import { CountdownData } from "../interfaces/CountdownData";
import { CountdownProps } from "../interfaces/Countdown";
import { Column } from "./Column";

export const Countdown = ({
  fontDescription,
  fontSecondary,
  yearFinal,
  monthFinal,
  dayFinal,
  hourFinal = 0,
  minuteFinal = 0,
  secondFinal = 0,
}: CountdownProps) => {
  const [countdown, setCountdown] = useState<CountdownData>({
    day: "00",
    hour: "00",
    minutes: "00",
    seconds: "00",
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const finalDate = new Date(
      yearFinal,
      monthFinal - 1,
      dayFinal,
      hourFinal,
      minuteFinal,
      secondFinal
    );

    intervalRef.current = setInterval(() => {
      const now = new Date();
      const difference = finalDate.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdown({
          day: "00",
          hour: "00",
          minutes: "00",
          seconds: "00",
        });
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({
          day: days.toString().padStart(2, "0"),
          hour: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [yearFinal, monthFinal, dayFinal, hourFinal, minuteFinal, secondFinal]);

  return (
    <Column
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      className="relative w-full gap-3 lg:gap-4 h-[200px]"
      data-sal="slide-up"
      data-sal-duration="1500"
    >
      <p className="text-3xl lg:text-4xl text-[#000000] -m-2 font-semibold">
        faltan
      </p>
      <div
        className={`flex gap-1 lg:gap-2 lg:p-5 text-3xl md:text-3xl p-3 rounded-lg ${fontDescription} text-blackGray`}
      >
        <Column className="text-center w-12 lg:w-20 gap-2">
          <span className={`${fontSecondary}`}>{countdown.day}</span>
          <span className="text-sm lg:text-sm">DÍAS</span>
        </Column>
        :
        <Column className="text-center w-12 lg:w-20 gap-2">
          <span className={`${fontSecondary}`}>{countdown.hour}</span>
          <span className="text-sm lg:text-sm">HORAS</span>
        </Column>
        :
        <Column className="text-center w-12 lg:w-20 gap-2">
          <span className={`${fontSecondary}`}>{countdown.minutes}</span>
          <span className="text-sm lg:text-sm">MIN.</span>
        </Column>
        :
        <Column className="text-center w-12 lg:w-20 gap-2">
          <span className={`${fontSecondary}`}>{countdown.seconds}</span>
          <span className="text-sm lg:text-sm">SEG.</span>
        </Column>
      </div>
    </Column>
  );
};
