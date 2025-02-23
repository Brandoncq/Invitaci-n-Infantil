"use client";
import { useState, useEffect } from "react";
import { StartPresentation } from "@/core/components/StartPresentation";
import "@/core/constants/fonts.css";
import { MEIcon } from "./presentation/icon/ME";
import { Gallery } from "@/core/components/Gallery";
import { Images } from "@/core/interfaces/Image";
import { Privilege } from "@/core/components/Privilege";
import { Celebration } from "@/core/components/EventLocation";
import { Passes } from "@/core/components/Passes";
import { Schedule } from "@/core/components/Schedule";
import { ChurchIcon } from "@/core/icons/Church";
import { GiftCollection } from "@/core/components/GiftCollection";
import { YapeIcon } from "@/core/icons/Yape";
import { PlinIcon } from "@/core/icons/Plin";
import { DressCode } from "@/core/components/DressCode";
import { FemaleIcon } from "@/core/icons/FemaleIcon";
import { MaleIcon } from "@/core/icons/Male";
import { Restriction } from "@/core/components/Restriction";
import { RecomendationMusic } from "@/core/components/RecomendationMusic";
import { RSVPConfirmation } from "@/core/components/RSVPConfirmation";
import { Note } from "@/core/components/Note";
import { WaterMark } from "@/core/components/WaterMark";
import ModalPresentation from "@/core/components/ModalPresentation";
import LoadingPresentation from "@/core/components/LoadingPresentation";
import ViewPresentation from "@/core/components/ViewPresentation";
import MusicButton from "@/core/components/MusicButton";
export const MelissaEduardo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);
  const [isVisible, setVisible] = useState(true);
  const [openModal, setModal] = useState(true);
  const [isPlaying, setPlaying] = useState(false);

  const FONT_TITLE = "font-cinzel-custom";
  const FONT_DESCRIPTION = "font-popins-custom";
  const FONT_SECONDARY = "font-river-flows-custom";

  const BRIDE_NAME = "Melissa";
  const GROOM_NAME = "eduardo";

  const YEAR_FINAL = 2025;
  const MONTH_FINAL = 2;
  const DAY_FINAL = 19;
  const HOUR_FINAL = 0;
  const MINUTE_FINAL = 0;
  const SECOND_FINAL = 0;

  const IMAGES: Images[] = [
    { src: "https://picsum.photos/2200/3300", alt: "Random Image 1" },
    { src: "https://picsum.photos/3300/2200", alt: "Random Image 2" },
    {
      src: "https://picsum.photos/2200/3300",
      alt: "Random Image 4",
      class: "!object-top",
    },
    { src: "https://picsum.photos/3200/2200", alt: "Random Image 6" },
    { src: "https://picsum.photos/2100/3300", alt: "Random Image 8" },
    { src: "https://picsum.photos/3000/2200", alt: "Random Image 9" },
    { src: "https://picsum.photos/2000/3300", alt: "Random Image 10" },
  ];

  const CEREMONY_IMAGES = [
    "https://picsum.photos/500/300?random=1",
    "https://picsum.photos/500/300?random=2",
  ];
  const RECEPTION_IMAGES = [
    "https://picsum.photos/500/300?random=3",
    "https://picsum.photos/500/300?random=4",
  ];

  const CEREMONY_DETAILS = {
    time: "12:00pm (mediodía)",
    location: "Iglesia Virgen del Rosario",
    address: "Calana",
    mapLink: "https://maps.app.goo.gl/b7EGTjnnHHr7CU867",
  };

  const RECEPTION_DETAILS = {
    time: "1:30pm (area jardín)",
    location: "Italo Círculo Peruano",
    address: "Chacarilla Las Peañas, Pocollay",
    mapLink: "https://maps.app.goo.gl/ogCGqU4288VRrDjN8",
  };

  const NUM_PASSES = 2;
  const COLOR_BG = "#f4ffe8";
  const COLOR_PASSES = "#b3c79e";

  const SCHEDULE_ITEMS = [
    {
      time: "12:00pm",
      description: "¡Dijimos que sí!",
      icon: (
        <ChurchIcon className="w-fit max-lg:self-end self-center object-contain h-[50px]" />
      ),
      isUp: true,
    },
    {
      time: "1:30pm",
      description: "Recepción",
      icon: (
        <ChurchIcon className="w-fit max-lg:self-start self-center object-contain h-[50px]" />
      ),
      isUp: false,
    },
    {
      time: "2:30pm",
      description: "Ceremonia Civil",
      icon: (
        <ChurchIcon className="w-fit max-lg:self-end self-center object-contain h-[50px]" />
      ),
      isUp: true,
    },
    {
      time: "3:00pm",
      description: "Vals y Brindis",
      icon: (
        <ChurchIcon className="w-fit max-lg:self-start self-center object-contain h-[50px]" />
      ),
      isUp: false,
    },
    {
      time: "3:30pm",
      description: "Almuerzo",
      icon: (
        <ChurchIcon className="w-fit max-lg:self-end self-center object-contain h-[50px]" />
      ),
      isUp: true,
    },
    {
      time: "4:30pm",
      description: "¡Vamos a Festejar!",
      icon: (
        <ChurchIcon className="w-fit max-lg:self-start self-center object-contain h-[50px]" />
      ),
      isUp: false,
    },
  ];

  const MODALS_DATA = {
    yape: {
      name: "Melissa Aracely Santiago Angel - Yape",
      icon: <YapeIcon className="w-48 aspect-square" />,
    },
    plin: {
      name: "Melissa Aracely Málaga Zuñiga - Plin",
      icon: <PlinIcon className="p-4 w-36 aspect-square" />,
    },
    location: {
      name: "Melissa Aracely Málaga Zuñiga - Ubicación",
      icon: null,
    },
  };

  const ACCOUNT_DATA = {
    yapeNumber: "995 066 264",
    bankAccounts: [
      { type: "Número BCP", number: "54094210877025" },
      { type: "Número CCI", number: "00254019421087702538" },
    ],
  };

  const LOCATION_DATA = {
    url: "https://maps.app.goo.gl/---------",
  };

  const DRESS_CODE_CONFIG = {
    fontTitle: FONT_TITLE,
    fontDescription: FONT_DESCRIPTION,
    dressLabel: "Dress Code",
    maleLabel: "Hombres",
    femaleLabel: "Mujeres",
    femaleIcon: <FemaleIcon className="w-12 h-12" />,
    maleIcon: <MaleIcon className="w-12 h-12" />,
    femaleDescription: [
      "El blanco es exclusivo para la novia",
      "No colores claros",
      "(beige, perla, champagne, dorado)",
    ],
    maleDescription: ["Traje oscuro", "Corbata", "Zapatos formales"],
    femaleDressType: "Vestido de gala",
    maleDressType: "Traje formal",
    colorGuide: true,
  };

  const RESTRICTION_CONFIG = {
    title: "Sólo adultos",
    description: [
      "Adoramos a sus pequeños, sin embargo este evento está destinado sólo para adultos.",
      "¡Esperamos tu comprensión!",
    ],
  };

  const RECOMENDATION_MUSIC_CONFIG = {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfZrfD7ONob_dXH80yCnKGBAO8jgD4Bzjl3WxfCcrD74_23232386-g/formResponse",
    fields: {
      name: "entry.191711223703",
      message: "entry.652494823232399",
    },
  };

  const RSVP_CONFIRMATION_CONFIG = {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfNVRvOfUmgY8P5K2g0sIiU8_35OHIpkLa3hRKHJoOEv1rwUQ/formResponse",
    text: "Nos encantaría que nos confirmes si podrás acompañarnos antes del 20 de Octubre.",
    fields: {
      name: "entry.450108234",
      phone: "entry.145471448",
      confirmation: "entry.277424675",
      message: "entry.1818491866",
    },
  };

  const TEXT_NOTE = {
    textPrimary: "Te esperamos",
  };

  return (
    <>
      <LoadingPresentation duration={1.5} isVisible={isVisible}>
        <ModalPresentation isOpen={openModal} duration={1}>
          <ViewPresentation
            onClose={() => {
              setModal(false);
              setVisible(false);
              setPlaying(true);
            }}
            husbandName="eduardo"
            wifeName="Melissa"
            fontSize="text-5xl lg:text-6xl"
            fontTitle="fancy-font-class"
            fontHusbands={FONT_TITLE}
            ampersandSize="text-[8rem] lg:text-[12rem]"
            imageTopSrc="https://tema-verdor.vercel.app/presentacion-flores-2.png"
            imageBottomSrc="https://tema-verdor.vercel.app/presentacion-flores-1.png"
            buttonLabel="Ingresar"
            buttonBg="bg-gray-300 hover:bg-black"
            buttonTextColor="hover:text-white text-black"
          />
        </ModalPresentation>
        <MusicButton
          isVisible={openModal}
          isPlaying={isPlaying}
          togglePlay={() => {
            setPlaying((prev) => !prev);
          }}
          volume={0.1}
          musicUrl="https://res.cloudinary.com/dmo6ofy2z/video/upload/v1740252349/Feliz_Me_Siento_nmosap.mp3"
        />
        <StartPresentation
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          fontSecondary={FONT_SECONDARY}
          name={`${BRIDE_NAME} & ${GROOM_NAME}`}
          yearFinal={YEAR_FINAL}
          monthFinal={MONTH_FINAL}
          dayFinal={DAY_FINAL}
          hourFinal={HOUR_FINAL}
          minuteFinal={MINUTE_FINAL}
          secondFinal={SECOND_FINAL}
          icon={<MEIcon className="w-16 lg:w-24" />}
        />
        <Gallery
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          images={IMAGES}
        />
        <Privilege
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          brideParents={[
            { name: "Ronald Málaga Vásquez" },
            { name: "Rosalvina Zúñiga Olano" },
          ]}
          groomParents={[
            { name: "Eduardo Castro Román ✝" },
            { name: "Adalguisa Cúneo Toso" },
          ]}
          godparents={[
            { name: "Edward Vargas Valderrama" },
            { name: "Maritza Dávila Olano" },
          ]}
        />
        <Celebration
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          ceremonyImages={CEREMONY_IMAGES}
          receptionImages={RECEPTION_IMAGES}
          ceremonyTime={CEREMONY_DETAILS.time}
          ceremonyLocation={CEREMONY_DETAILS.location}
          ceremonyAddress={CEREMONY_DETAILS.address}
          ceremonyMapLink={CEREMONY_DETAILS.mapLink}
          receptionTime={RECEPTION_DETAILS.time}
          receptionLocation={RECEPTION_DETAILS.location}
          receptionAddress={RECEPTION_DETAILS.address}
          receptionMapLink={RECEPTION_DETAILS.mapLink}
          isMobile={isMobile}
        />
        <Passes
          id={NUM_PASSES}
          fontDescription={FONT_DESCRIPTION}
          colorBg={COLOR_BG}
          colorPasses={COLOR_PASSES}
        />
        <Schedule
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          scheduleItems={SCHEDULE_ITEMS}
        />
        <GiftCollection
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          modalsData={MODALS_DATA}
          accountData={ACCOUNT_DATA}
          locationData={LOCATION_DATA}
        />
        <DressCode
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          dressLabel={DRESS_CODE_CONFIG.dressLabel}
          maleLabel={DRESS_CODE_CONFIG.maleLabel}
          femaleLabel={DRESS_CODE_CONFIG.femaleLabel}
          femaleIcon={DRESS_CODE_CONFIG.femaleIcon}
          maleIcon={DRESS_CODE_CONFIG.maleIcon}
          femaleDescription={DRESS_CODE_CONFIG.femaleDescription}
          maleDescription={DRESS_CODE_CONFIG.maleDescription}
          femaleDressType={DRESS_CODE_CONFIG.femaleDressType}
          maleDressType={DRESS_CODE_CONFIG.maleDressType}
          colorGuide={DRESS_CODE_CONFIG.colorGuide}
          isMobile={isMobile}
        />
        <Restriction
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          restrictionConfig={RESTRICTION_CONFIG}
          isMobile={isMobile}
        />
        <RecomendationMusic
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          config={RECOMENDATION_MUSIC_CONFIG}
          isMobile={isMobile}
        />
        <RSVPConfirmation
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          config={RSVP_CONFIRMATION_CONFIG}
          isMobile={isMobile}
        />
        <Note
          fontTitle={FONT_TITLE}
          fontDescription={FONT_DESCRIPTION}
          text={TEXT_NOTE}
        />
        <WaterMark />
      </LoadingPresentation>
    </>
  );
};
export default MelissaEduardo;
