"use client";
import { useState, useEffect } from "react";
import { ModalProps } from "../interfaces/ModalPresentation";

const ModalPresentation: React.FC<ModalProps> = ({
  isOpen,
  duration,
  children,
}) => {
  const [visible, setVisible] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setClosing(false);
    } else {
      setClosing(true);
      setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, duration * 1000);
    }
  }, [isOpen, duration]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpen || closing ? "opacity-100" : "opacity-0"
      }`}
      style={{ overflow: "hidden" }}
    >
      <div
        className="bg-white relative transform transition-all duration-300 ease-out w-full h-lvh overflow-hidden"
        style={{
          animation: closing
            ? `fadeOut ${duration}s ease-in forwards`
            : `fadeIn ${duration}s ease-out forwards`,
        }}
      >
        {children}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0%);
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            from {
              transform: translateY(0%);
              opacity: 1;
            }
            to {
              transform: translateY(-100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ModalPresentation;
