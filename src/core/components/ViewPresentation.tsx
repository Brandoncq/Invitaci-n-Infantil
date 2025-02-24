import { useEffect } from "react";
import { ViewProps } from "../interfaces/ViewPresentation";
import sal from 'sal.js';
import 'sal.js/dist/sal.css';

function ViewPresentation({
  onClose,
  husbandName,
  wifeName,
  fontSize = "text-4xl lg:text-6xl",
  fontTitle = "river-flows-custom",
  fontHusbands = "river-flows-custom",
  ampersandSize = "text-[6rem] lg:text-[10rem]",
  imageTopSrc = "./presentacion-flores-2.png",
  imageBottomSrc = "./presentacion-flores-1.png",
  buttonLabel = "Salir",
  buttonBg = "bg-gray-500",
  buttonTextColor = "text-white",
}: ViewProps) {

  useEffect(()=>{
    sal({
      root: null,
      threshold: 0.1,
      once: true,
    });
  },[])
  return (
    <div className="w-full h-lvh flex justify-center items-center flex-col">
      <img
        className="w-[300px] lg:w-[380px] border-b border-[#585249]"
        src={imageTopSrc}
        alt="flores-2"
      />

      <div className="flex flex-col gap-2 py-2">
        <span
          className={`text-base lg:text-2xl text-center tracking-widest py-1.5 font-light my-3 ${fontTitle}`}
        >
          Bienvenidos a la invitación de
        </span>

        <h1
          className={`relative pb-3 lg:pb-5 ${fontSize} flex flex-col text-center gap-3 mb-4`}
        >
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#433b314d] ${fontHusbands} ${ampersandSize} cinzel-decorative-custom`}
          >
            &amp;
          </span>
          <span className={fontHusbands}>{wifeName}</span>
          <span className={fontHusbands}>{husbandName}</span>
        </h1>
      </div>

      <img
        className="w-[300px] lg:w-[380px] border-t border-[#585249]"
        src={imageBottomSrc}
        alt="flores-1"
      />

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
