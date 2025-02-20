"use client";
import { useState } from "react";
import { GiftIcon } from "../icons/Gift";
import { Column } from "./Column";
import { ModalGiftCollection } from "./ModalGiftCollection";
import { GiftCollectionProps } from "../interfaces/GiftCollection";

export const GiftCollection = ({
  fontTitle,
  fontDescription,
  modalsData,
  accountData,
  locationData,
}: GiftCollectionProps) => {
  const [modalType, setModalType] = useState<
    "yape" | "plin" | "location" | null
  >(null);

  const handleModal = (type: "yape" | "plin" | "location") => {
    setModalType(type);
  };

  return (
    <Column
      mainAxisAlignment="center"
      crossAxisAlignment="center"
      className="gift-bg py-12 w-full text-center"
    >
      <ModalGiftCollection
        isVisible={modalType !== null}
        onClose={() => setModalType(null)}
        fontDescription={fontDescription}
        name={modalType ? modalsData[modalType].name : ""}
        icon={modalType ? modalsData[modalType].icon : null}
        accountData={
          modalType === "yape"
            ? [
                { type: "Número de Yape", number: accountData.yapeNumber },
                ...accountData.bankAccounts,
              ]
            : modalType === "plin"
            ? [
                { type: "Número de Plin", number: "1234567890" },
                ...accountData.bankAccounts,
              ]
            : undefined
        }
        locationData={modalType === "location" ? locationData : undefined}
      />
      <Column
        mainAxisAlignment="center"
        crossAxisAlignment="center"
        className="bg-white/66 shadow-[0_0_5px_rgba(0,0,0,0.65)] gap-4 lg:gap-5 p-4 py-8 lg:p-12 rounded-lg w-[90%] lg:w-[30rem] text-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <GiftIcon className="h-[50px] lg:h-[60px]" />
        <h2
          className={`text-2xl lg:text-4xl retro-signature-custom text-[#000000] font-semibold ${fontTitle}`}
        >
          Mesa de Regalos
        </h2>
        <Column
          mainAxisAlignment="center"
          crossAxisAlignment="center"
          className=" gap-3 lg:gap-5 lg:w-[90%] pr-2"
        >
          <p
            className={`text-sm leading-relaxed lg:text-base ${fontDescription}`}
          >
            El mejor regalo es que estés presente en este día tan esperado, pero
            si deseas hacernos un obsequio tenemos estas opciones:
          </p>
        </Column>
        <Column crossAxisAlignment="center" className="gap-2 lg:gap-3">
          <div
            className={`flex flex-wrap items-center justify-center gap-2 lg:gap-3 ${fontDescription}`}
          >
            <button
              className="w-[130px] lg:w-[150px] button-secundario text-xs"
              onClick={() => handleModal("location")}
            >
              Ubicación
            </button>
            <button
              className="w-[130px] lg:w-[150px] button-secundario text-xs"
              onClick={() => handleModal("yape")}
            >
              Yape
            </button>
            <button
              className="w-[130px] lg:w-[150px] button-secundario text-xs"
              onClick={() => handleModal("plin")}
            >
              Plin
            </button>
          </div>
        </Column>
      </Column>
    </Column>
  );
};
