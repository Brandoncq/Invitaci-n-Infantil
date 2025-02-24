"use client";
import { businessName, urlBusinessName } from "../constants/utils";
import { Row } from "./Row";

export const WaterMark = () => {
  return (
    <Row
      mainAxisAlignment="center"
      className="w-full text-black opacity-70 mt-auto px-4 py-5 text-sm lg:text-base bg-transparent"
    >
      <a href={urlBusinessName} target="_blank" rel="noreferrer">
        Creado con ♥️ por <span className="underline">{businessName}</span>
      </a>
    </Row>
  );
};
