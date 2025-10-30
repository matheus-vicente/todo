import { type ComponentProps, createElement, type JSX } from "react";

const cardVariants = {
  style: "rounded-lg border border-solid border-gray-200 bg-white shadow-sm",
  size: {
    none: "",
    md: "p-5",
  },
};

type CardProps = ComponentProps<"div"> & {
  as?: keyof JSX.IntrinsicElements;
  size?: keyof typeof cardVariants.size;
};

export function Card({
  as = "div",
  size = "md",
  className,
  children,
}: CardProps) {
  return createElement(
    as,
    {
      className: `
      ${cardVariants.style}
      ${cardVariants.size[size]}
      ${className ? className : ""}
    `,
    },
    children
  );
}
