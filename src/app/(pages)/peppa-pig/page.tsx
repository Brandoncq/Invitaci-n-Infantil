/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { StartPresentation } from "@/core/components/StartPresentation";
import "@/core/constants/fonts.css";
import { MEIcon } from "./presentation/icon/ME";
import { Gallery } from "@/core/components/Gallery";
import { Images } from "@/core/interfaces/Image";
import { Privilege } from "@/core/components/Privilege";
import { Celebration } from "@/core/components/EventLocation";
import { Schedule } from "@/core/components/Schedule";
import { ChurchIcon } from "@/core/icons/Church";
import { YapeIcon } from "@/core/icons/Yape";
import { PlinIcon } from "@/core/icons/Plin";
import { DressCode } from "@/core/components/DressCode";
import { FemaleIcon } from "@/core/icons/FemaleIcon";
import { MaleIcon } from "@/core/icons/Male";
import { RSVPConfirmation } from "@/core/components/RSVPConfirmation";
import { Note } from "@/core/components/Note";
import { WaterMark } from "@/core/components/WaterMark";
import ModalPresentation from "@/core/components/ModalPresentation";
import LoadingPresentation from "@/core/components/LoadingPresentation";
import ViewPresentation from "@/core/components/ViewPresentation";
import MusicButton from "@/core/components/MusicButton";
import ContentPresentation from "@/core/components/ContentPresentation";

export const MelissaEduardo: React.FC = () => {
  const presentationConfig = {
    isVisiblePresentation: true,
    openModalPresentation: true,
    isPlayingMusic: false,
  };

  const [presentationState, setPresentationState] =
    useState(presentationConfig);
  const toggleMusic = () => {
    setPresentationState((prev) => ({
      ...prev,
      isPlayingMusic: !prev.isPlayingMusic,
    }));
  };

  const closePresentation = () => {
    setPresentationState({
      isVisiblePresentation: false,
      openModalPresentation: false,
      isPlayingMusic: true,
    });
  };

  const FONT_TITLE = "font-cinzel-custom";
  const FONT_DESCRIPTION = "font-popins-custom";
  const FONT_SECONDARY = "font-river-flows-custom";
  const CHILD_NAME = "Camila Ramirez";

  const VIEW_PRESENTATION_DATA = {
    childName: CHILD_NAME,
    fontSize: "text-5xl lg:text-8xl",
    fontTitle: FONT_DESCRIPTION,
    fontChild: FONT_TITLE,
    ampersandSize: "text-[8rem] lg:text-[12rem]",
    imageTopSrc:
      "https://cdn.discordapp.com/attachments/1342238147811082242/1343416707884253315/carnaval.png?ex=67bd31ce&is=67bbe04e&hm=e43f97d4d18938a41de7e8bdc735ab121d95bebb558d8aaaf86665e1149c01c4&",
    imageBottomSrc:
      "https://cdn.discordapp.com/attachments/1342238147811082242/1343420077302747216/peppa-pig-globos.png?ex=67bd34f1&is=67bbe371&hm=837af5c89ea761780f5beddd739a3de99bb1d020342230b62915beb2fc01af59&",
    buttonLabel: "Ingresar",
    buttonBg: "bg-pink-500 hover:bg-pink-700",
    buttonTextColor: "hover:text-white text-white",
  };

  const MUSICBUTTON_DATA = {
    musicUrl:
      "https://res.cloudinary.com/db8eroacq/video/upload/v1740370118/Theme_Music_From_Peppa_Pig_-_Instrumental_aq6ten.mp3",
  };

  const YEAR_FINAL = 2025;
  const MONTH_FINAL = 3;
  const DAY_FINAL = 19;
  const HOUR_FINAL = 0;
  const MINUTE_FINAL = 0;
  const SECOND_FINAL = 0;

  const IMAGES: Images[] = [
    {
      src: "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Random Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Random Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1562346531-6fd51e998566?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Random Image 4",
      class: "!object-top",
    },
    {
      src: "https://images.unsplash.com/photo-1564157465092-eaa2a4c834ca?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Random Image 6",
    },
    {
      src: "https://images.unsplash.com/photo-1562773230-19b3d4eb1661?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Random Image 8",
    },
    {
      src: "https://images.unsplash.com/photo-1563981806515-cffc4485d070?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Random Image 9",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1703389457620-b76c38b8b0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Random Image 10",
    },
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

  const SCHEDULE_ITEMS = [
    {
      time: "3:00pm",
      description: "Recepción",
      icon: <ChurchIcon className="w-fit self-end h-[50px]" />,
      isUp: true,
    },
    {
      time: "3:30pm",
      description: "Juegos",
      icon: <ChurchIcon className="w-fit h-[50px]" />,
      isUp: false,
    },
    {
      time: "4:00pm",
      description: "Show",
      icon: <ChurchIcon className="w-fit self-end h-[50px]" />,
      isUp: true,
    },
    {
      time: "4:30pm",
      description: "Piñata",
      icon: <ChurchIcon className="w-fit h-[50px]" />,
      isUp: false,
    },
    {
      time: "5:00pm",
      description: "Pastel",
      icon: <ChurchIcon className="w-fit self-end h-[50px]" />,
      isUp: true,
    },
    {
      time: "5:30pm",
      description: "Despedida",
      icon: <ChurchIcon className="w-fit h-[50px]" />,
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

  const DRESS_CODE_CONFIG = {
    fontTitle: FONT_TITLE,
    fontDescription: FONT_DESCRIPTION,
    dressLabel: "Código de Vestimenta",
    maleLabel: "Niños",
    femaleLabel: "Niñas",
    femaleIcon: <FemaleIcon className="w-12 h-12" />,
    maleIcon: <MaleIcon className="w-12 h-12" />,
    femaleDescription: [
      "Vestido cómodo y elegante",
      "Evitar colores demasiado llamativos",
      "(fluorescentes o neón)",
    ],
    maleDescription: ["Pantalón y camisa formal", "Zapatos cómodos"],
    femaleDressType: "Vestido elegante",
    maleDressType: "Conjunto formal",
    colorGuide: true,
  };

  const RSVP_CONFIRMATION_CONFIG = {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfNVRvOfUmgY8P5K2g0sIiU8_35OHIpkLa3hRKHJoOEv1rwUQ/formResponse",
    text: "Me encantaría que me confirmes tu asistencia a la celebración antes del 20 de Octubre.",
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
      <LoadingPresentation
        duration={1.5}
        isVisible={presentationState.isVisiblePresentation}
      >
        <ModalPresentation
          isOpen={presentationState.openModalPresentation}
          duration={1}
        >
          <ViewPresentation
            onClose={closePresentation}
            childName={VIEW_PRESENTATION_DATA.childName}
            fontSize={VIEW_PRESENTATION_DATA.fontSize}
            fontTitle={VIEW_PRESENTATION_DATA.fontTitle}
            fontChild={VIEW_PRESENTATION_DATA.fontChild}
            ampersandSize={VIEW_PRESENTATION_DATA.ampersandSize}
            imageTopSrc={VIEW_PRESENTATION_DATA.imageTopSrc}
            imageBottomSrc={VIEW_PRESENTATION_DATA.imageBottomSrc}
            buttonLabel={VIEW_PRESENTATION_DATA.buttonLabel}
            buttonBg={VIEW_PRESENTATION_DATA.buttonBg}
            buttonTextColor={VIEW_PRESENTATION_DATA.buttonTextColor}
          />
        </ModalPresentation>
        <ContentPresentation
          isVisiblePresentation={presentationState.isVisiblePresentation}
        >
          <MusicButton
            isVisible={presentationState.openModalPresentation}
            isPlaying={presentationState.isPlayingMusic}
            togglePlay={toggleMusic}
            volume={0.1}
            musicUrl={MUSICBUTTON_DATA.musicUrl}
          />
          <StartPresentation
            fontTitle={FONT_TITLE}
            fontDescription={FONT_DESCRIPTION}
            fontSecondary={FONT_SECONDARY}
            name={CHILD_NAME}
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
              { name: "Eduardo Castro Román" },
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
          />
          <Schedule
            fontTitle={FONT_TITLE}
            fontDescription={FONT_DESCRIPTION}
            scheduleItems={SCHEDULE_ITEMS}
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
          />
          <RSVPConfirmation
            fontTitle={FONT_TITLE}
            fontDescription={FONT_DESCRIPTION}
            config={RSVP_CONFIRMATION_CONFIG}
          />
          <Note
            fontTitle={FONT_TITLE}
            fontDescription={FONT_DESCRIPTION}
            text={TEXT_NOTE}
          />
          <WaterMark />
        </ContentPresentation>
      </LoadingPresentation>
    </>
  );
};
export default MelissaEduardo;
