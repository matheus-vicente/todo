import { createElement, type JSX, type ReactNode } from "react";

export const textVariants = {
  style: "font-sans text-gray-400",
  variant: {
    "body-sm-bold": "text-sm leading-5 font-semibold",
    "body-md": "text-base leading-6 font-normal",
    "body-md-bold": "text-base leading-6 font-semibold",
  },
};

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: keyof typeof textVariants.variant;
  className?: string;
  children: ReactNode;
};

export function Text({
  as = "span",
  variant = "body-md",
  children,
  className,
  ...props
}: TextProps) {
  return createElement(
    as,
    {
      className: `
        ${textVariants.style}
        ${textVariants.variant[variant]}
        ${className ? className : ""}
      `,
      ...props,
    },
    children
  );
}
