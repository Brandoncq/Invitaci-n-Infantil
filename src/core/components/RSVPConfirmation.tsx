"use client";
import { ChangeEvent, useState } from "react";
import { ModalData } from "./ModalData";
import { RSVPConfirmationProps } from "../interfaces/RSVPConfirmation";
import { Column } from "./Column";

export const RSVPConfirmation = ({
  fontTitle,
  fontDescription,
  config,
}: RSVPConfirmationProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    confirmation: "",
    message: "",
    isNameValid: true,
    isConfirmationValid: true,
    isMessageValid: true,
  });
  const [isConfirmation, setIsConfirmation] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      [`is${name.charAt(0).toUpperCase() + name.slice(1)}Valid`]:
        !!value.trim(),
    }));
  };

  const handleSubmit = async () => {
    const { name, confirmation, message, phone } = formData;

    if (!name.trim() || !confirmation.trim() || !message.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        isNameValid: !!name.trim(),
        isConfirmationValid: !!confirmation.trim(),
        isMessageValid: !!message.trim(),
      }));
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append(config.fields.name, name);
    formDataToSubmit.append(config.fields.phone, phone);
    formDataToSubmit.append(config.fields.confirmation, confirmation);
    formDataToSubmit.append(config.fields.message, message);

    try {
      const response = await fetch(config.url, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });

      if (response) {
        setFormData({
          name: "",
          phone: "",
          confirmation: "",
          message: "",
          isNameValid: true,
          isConfirmationValid: true,
          isMessageValid: true,
        });
        setIsConfirmation(true);
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
        title="¡Gracias por confirmar tu asistencia!"
      >
        <button
          type="button"
          onClick={() => setIsConfirmation(false)}
          className="button-enviar px-20"
        >
          Cerrar
        </button>
      </ModalData>

      <Column
        mainAxisAlignment="center"
        crossAxisAlignment="center"
        className="gap-3 max-lg:pt-10 max-lg:pb-16 w-full mt-28"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2
          className={`text-2xl lg:text-4xl text-[#000000] font-semibold ${fontTitle}`}
        >
          Confirma tu Asistencia
        </h2>
        {config.text && (
          <p className="text-sm lg:text-base w-[80%] lg:w-[30rem]">
            {config.text}
          </p>
        )}
        <Column
          className={`gap-2 w-[80%] lg:w-[30rem] text-[#212121] ${fontDescription}`}
        >
          <div className="max-lg:flex-col flex gap-2">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nombre del asistente"
              className={`w-full border py-1.5 px-4 hover:bg-[#ceefd5a6] hover:border-[#5a8766a6] text-sm rounded-md focus:outline-none focus:bg-[#ceefd548] placeholder-[#212121] focus:border-[#5a8766a6] ${
                !formData.isNameValid
                  ? "bg-[#FF8A85a6] border-[#ff4040]"
                  : "bg-[#ceefd548] border-transparent"
              }`}
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              id="phone"
              name="phone"
              type="number"
              placeholder="Celular"
              className="w-full border-transparent border py-1.5 px-4 bg-[#ceefd548] hover:bg-[#ceefd5a6] hover:border-[#5a8766a6] text-sm rounded-md focus:outline-none focus:bg-[#ceefd548] placeholder-[#212121] focus:border-[#5a8766a6]"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <select
            id="confirmation"
            name="confirmation"
            value={formData.confirmation}
            className={`w-full cursor-pointer border py-1.5 px-3 hover:bg-[#ceefd5a6] hover:border-[#5a8766a6] text-sm rounded-md focus:outline-none focus:bg-[#ceefd548] placeholder-[#212121] focus:border-[#5a8766a6] ${
              !formData.isConfirmationValid
                ? "bg-[#ff404033] border-[#ff4040]"
                : "bg-[#ceefd548] border-transparent"
            }`}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Confirmación
            </option>
            <option value="Sí, asistiremos">Sí, asistiremos</option>
            <option value="Lo siento, no podremos asistir">
              Lo siento, no podremos asistir
            </option>
          </select>
          <textarea
            id="message"
            name="message"
            placeholder="Mensaje el cumpleañero:"
            className={`w-full h-28 resize-none border py-2 px-4 hover:bg-[#ceefd5a6] hover:border-[#5a8766a6] text-sm rounded-md focus:outline-none focus:bg-[#ceefd548] placeholder-[#212121] focus:border-[#5a8766a6] ${
              !formData.isMessageValid
                ? "bg-[#ff404033] border-[#ff4040]"
                : "bg-[#ceefd548] border-transparent"
            }`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-end mb-2">
            <button
              onClick={handleSubmit}
              className="button-secundario w-[150px] text-xs lg:text-sm bg-slate-300 text-center px-5 py-2 rounded-lg"
            >
              Enviar
            </button>
          </div>
        </Column>
      </Column>
    </>
  );
};
