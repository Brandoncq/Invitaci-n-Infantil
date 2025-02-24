"use client";
import { ViewProps } from "../interfaces/ViewPresentation";

function ViewPresentation({
  onClose,
  childName,
  fontSize = "text-4xl lg:text-6xl",
  imageTopSrc = "./presentacion-flores-2.png",
  imageBottomSrc = "./presentacion-flores-1.png",
  buttonLabel = "Salir",
  buttonBg = "bg-gray-500",
  buttonTextColor = "text-white",
}: ViewProps) {
  return (
    <div className="relative w-full h-lvh flex justify-center items-center flex-col">
      <img
        className="absolute top-0 left-0 w-[10rem] lg:w-[20rem]"
        src={imageTopSrc}
        alt="flores-2"
      />
      <img
        className="absolute top-0 right-0 w-[10rem] lg:w-[20rem]"
        src={imageTopSrc}
        alt="flores-2"
      />
      <img
        className="w-[300px] lg:w-[380px]"
        src={imageBottomSrc}
        alt="flores-1"
      />
      <div className="flex flex-col gap-2 py-2">
        <span
          className={`text-3xl text-wrap tex-center px-10 lg:text-5xl text-center font-semibold tracking-widest py-1.5 text-pink-500 my-3 font-boogaloo-regular`}
        >
          Bienvenidos a la invitación de
        </span>

        <h1
          className={`relative pb-3 uppercase lg:pb-5 ${fontSize} flex flex-col text-center gap-3 text-pink-500 mb-4 font-boogaloo-regular`}
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
