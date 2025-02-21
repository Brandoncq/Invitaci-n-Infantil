"use client";
import { useState, useEffect } from "react";
import animationData from "../assets/json/loading.json";
import Lottie from "lottie-react";
import { LoadingPresentationProps } from "../interfaces/LoadingPresentation";

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
    <div className="w-full h-lvh bg-white">
      {isVisible && (
        <div className="w-full h-lvh bg-white flex justify-center items-center">
          <div className="w-24 h-24">
            {loading && <Lottie animationData={animationData} loop={true} />}
          </div>
        </div>
      )}
      {!loading && children}
    </div>
  );
}

export default LoadingPresentation;
