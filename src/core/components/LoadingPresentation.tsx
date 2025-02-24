"use client";
import { useState, useEffect } from "react";
import animationData from "../assets/json/loading.json";

import { LoadingPresentationProps } from "../interfaces/LoadingPresentation";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

function LoadingPresentation({
  children,
  duration = 3,
  isVisible,
}: LoadingPresentationProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className="w-full min-h-lvh bg-white">
      {isVisible && (
        <div className="w-full h-lvh bg-white flex justify-center items-center">
          <div className="w-24 h-24">
            {loading && <Lottie animationData={animationData} loop={true} />}
          </div>
        </div>
      )}
      <div className={`${!loading ? "" : "hidden"} w-full h-lvh bg-white`}>
        {children}
      </div>
    </div>
  );
}

export default LoadingPresentation;
