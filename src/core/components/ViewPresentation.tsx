import { useEffect } from "react";
import { ViewProps } from "../interfaces/ViewPresentation";
import sal from "sal.js";
import "sal.js/dist/sal.css";

function ViewPresentation({
  onClose,
  childName,
  fontSize = "text-4xl lg:text-6xl",
  fontTitle = "river-flows-custom",
  fontChild = "river-flows-custom",
  imageTopSrc = "./presentacion-flores-2.png",
  imageBottomSrc = "./presentacion-flores-1.png",
  buttonLabel = "Salir",
  buttonBg = "bg-gray-500",
  buttonTextColor = "text-white",
}: ViewProps) {
  useEffect(() => {
    sal({
      root: null,
      threshold: 0.1,
      once: true,
    });
  }, []);
  return (
    <div className="w-full h-lvh flex justify-center items-center flex-col">
      <div className="w-[300px] lg:w-[380px] flex flex-wrap">
        <img className="w-1/2" src={imageTopSrc} alt="flores-2" />
        <img className="w-1/2 scale-x-[-1]" src={imageTopSrc} alt="flores-2" />
      </div>
      <img
        className="w-[300px] lg:w-[280px]"
        src={imageBottomSrc}
        alt="flores-1"
      />
      <div className="flex flex-col gap-2 py-2">
        <span
          className={`text-base lg:text-5xl text-center font-semibold tracking-widest py-1.5 text-pink-500 my-3 font-boogaloo-regular`}
        >
          Bienvenidos a mi Cumpleaños
        </span>

        <h1
          className={`relative pb-3 lg:pb-5 ${fontSize} flex flex-col text-center gap-3 text-pink-500 mb-4 font-boogaloo-regular`}
        >
          <span>{childName}</span>
        </h1>
      </div>

      <button
        className={`text-xs lg:text-sm w-[200px] px-5 py-3 rounded-lg transition-all ease-in-out duration-500 ${buttonBg} ${buttonTextColor}`}
        onClick={onClose}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default ViewPresentation;
