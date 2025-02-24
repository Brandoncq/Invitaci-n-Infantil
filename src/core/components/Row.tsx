import { forwardRef } from "react";

interface CustomRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  flexible?: boolean;
  responsiveCol?: boolean;
  mainAxisAlignment?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly";
  crossAxisAlignment?: "start" | "center" | "end" | "stretch";
}

export const Row = forwardRef<HTMLDivElement, CustomRowProps>(
  (
    {
      children,
      className = "",
      flexible = false,
      responsiveCol = false,
      mainAxisAlignment = "start",
      crossAxisAlignment = "stretch",
      ...props
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
        className={`flex ${
          responsiveCol ? "flex-col md:flex-row" : "flex-row"
        } ${mainAxisClass} ${crossAxisClass} ${
          !flexible ? "w-full" : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Row.displayName = "Row";
