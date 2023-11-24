import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {
  const defaultClassName = "w-full max-w-grid mx-auto px-3";
  const combinedClasses = twMerge(defaultClassName, className);

  return <div className={combinedClasses}>{children}</div>;
}
