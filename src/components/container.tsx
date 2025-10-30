import { createElement, type ComponentProps, type JSX } from "react";

const containerVariants = {
  style: "mx-auto",
  size: {
    md: "max-w-[31.5rem] px-2",
  },
};

type ContainerProps = ComponentProps<"div"> & {
  as?: keyof JSX.IntrinsicElements;
  size?: keyof typeof containerVariants.size;
};

export function Container({
  as = "div",
  size = "md",
  className,
  children,
  ...props
}: ContainerProps) {
  return createElement(
    as,
    {
      className: `
        ${containerVariants.style}
        ${containerVariants.size[size]}
        ${className ? className : ""}
      `,
      ...props,
    },
    children
  );
}
