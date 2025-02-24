"use client";
import { ContentPresentationProps } from "../interfaces/ContentPresentation";
const ContentPresentation: React.FC<ContentPresentationProps> = ({
  isVisiblePresentation,
  children,
}) => {
  return (
    <div className={`w-full ${isVisiblePresentation ? "hidden" : ""}`}>
      {children}
    </div>
  );
};

export default ContentPresentation;
