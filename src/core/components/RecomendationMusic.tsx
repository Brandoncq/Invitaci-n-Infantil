import { ChangeEvent, useState } from "react";
import { ModalData } from "./ModalData";
import animationCargando from "../assets/json/check.json";
import { MusicIcon } from "../icons/Music";
import { RecomendationMusicProps } from "../interfaces/RecomendationMusic";
import { Column } from "./Column";

export const RecomendationMusic = ({
  fontTitle,
  fontDescription,
  config,
  isMobile,
}: RecomendationMusicProps) => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    isNameValid: true,
    isMessageValid: true,
  });

  const [isConfirmation, setIsConfirmation] = useState(false);
  const [isOpenMusic, setIsOpenMusic] = useState(false);

  const defaultOptionsChecked = {
    loop: true,
    autoplay: true,
    animationData: animationCargando,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleChangeMusic = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      isNameValid: name === "name" ? !!value.trim() : prevData.isNameValid,
      isMessageValid:
        name === "message" ? !!value.trim() : prevData.isMessageValid,
    }));
  };

  const handleSubmitMusic = async () => {
    const { name, message } = formData;

    if (!name.trim()) {
      setFormData((prevData) => ({ ...prevData, isNameValid: false }));
      return;
    }
    if (!message.trim()) {
      setFormData((prevData) => ({ ...prevData, isMessageValid: false }));
      return;
    }

    const form = new FormData();
    form.append(config.fields.name, name);
    form.append(config.fields.message, message);

    try {
      const response = await fetch(config.url, {
        method: "POST",
        mode: "no-cors",
        body: form,
      });

      if (response) {
        setFormData({
          name: "",
          message: "",
          isNameValid: true,
          isMessageValid: true,
        });
        setIsConfirmation(true);
        setIsOpenMusic(false);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <>
      <ModalData
        isOpen={isConfirmation}
        onClose={() => setIsConfirmation(false)}
        onSubmit={() => setIsConfirmation(false)}
        title="¡Gracias por recomendar tu música!"
        animationOptions={defaultOptionsChecked}
      >
        <button
          type="button"
          onClick={() => setIsConfirmation(false)}
          className="button-enviar w-[150px]"
        >
          Cerrar
        </button>
      </ModalData>

      <ModalData
        isOpen={isOpenMusic}
        onClose={() => {
          setIsOpenMusic(false);
        }}
        onSubmit={() => {}}
        title="Ingresa la información"
        animationOptions={defaultOptionsChecked}
      >
        <Column
          className={`gap-2 w-[80%] lg:w-[90%] text-[#212121] ${fontDescription}`}
        >
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre del asistente:"
            className={`w-full border py-1.5 px-4 hover:bg-[#ceefd5a6] hover:border-[#5a8766a6] text-sm rounded-md focus:outline-none focus:bg-[#ceefd548] placeholder-[#212121] focus:border-[#5a8766a6] ${
              !formData.isNameValid
                ? "bg-[#FF8A85a6] border-[#ff4040]"
                : "bg-[#ceefd548] border-transparent"
            }`}
            value={formData.name}
            onChange={handleChangeMusic}
            autoComplete="off"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Nombre de la canción:"
            className={`w-full h-28 resize-none border py-2 px-4 hover:bg-[#ceefd5a6] hover:border-[#5a8766a6] text-sm rounded-md focus:outline-none focus:bg-[#ceefd548] placeholder-[#212121] focus:border-[#5a8766a6] ${
              !formData.isMessageValid
                ? "bg-[#FF8A85a6] border-[#ff4040]"
                : "bg-[#ceefd548] border-transparent"
            }`}
            value={formData.message}
            onChange={handleChangeMusic}
          />
          <div className="flex justify-end">
            <button
              onClick={handleSubmitMusic}
              className="button-enviar text-xs lg:text-sm"
            >
              Enviar
            </button>
          </div>
        </Column>
      </ModalData>

      <Column
        mainAxisAlignment="center"
        crossAxisAlignment="center"
        className={`${isMobile && "recomendationmusic-bg"} gap-5 w-full py-7`}
        data-sal="slide-up"
        data-sal-duration="1500"
      >
        <h2
          className={`retro-signature-regular text-2xl lg:text-4xl text-[#000000] font-semibold ${fontTitle}`}
        >
          Recomienda tu música
        </h2>
        <Column
          className={`text-sm lg:text-base w-[80%] lg:w-[30rem] text-center ${fontDescription}`}
        >
          ¿Cuáles son esas canciones que no pueden faltar en nuestra boda?{" "}
          <br /> Comparte tus favoritas con nosotros.
        </Column>
        <button
          className="flex justify-center items-center gap-1 w-[130px] lg:w-[150px] button-secundario text-xs"
          onClick={() => {
            setIsOpenMusic(true);
          }}
        >
          <MusicIcon />
          <span>Música</span>
        </button>
      </Column>
    </>
  );
};
