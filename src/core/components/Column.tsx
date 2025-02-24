"use client";
import { forwardRef } from "react";

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  mainAxisAlignment?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "maxmdstart";
  crossAxisAlignment?: "start" | "center" | "end" | "stretch";
}

export const Column = forwardRef<HTMLDivElement, ColumnProps>(
  (
    {
      children,
      className = "",
      mainAxisAlignment = "start",
      crossAxisAlignment = "stretch",
      ...rest
    },
    ref
  ) => {
    const mainAxisClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      maxmdstart: "max-md:justify-start justify-center",
    };

    const crossAxisClasses = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    };

    const mainAxisClass = mainAxisClasses[mainAxisAlignment];
    const crossAxisClass = crossAxisClasses[crossAxisAlignment];

    return (
      <div
        ref={ref}
        className={`flex flex-col ${mainAxisClass} ${crossAxisClass} ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
Column.displayName = "Column";
