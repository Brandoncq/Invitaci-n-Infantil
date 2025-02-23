"use client";
import animationData from "@/core/assets/json/loading.json";
import Lottie from "lottie-react";

export default function Loading() {
  return (
    <div className="w-full h-lvh bg-white flex justify-center items-center">
      <div className="w-24 h-24">
        {<Lottie animationData={animationData} loop={true} />}
      </div>
    </div>
  );
}
