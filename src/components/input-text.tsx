import type { ComponentProps } from "react";
import { textVariants } from "./text";

const inputTextVariants = {
  style:
    "border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none",
  size: {
    md: "pb-2 px-2",
  },
  disabled: "pointer-events-none",
};

type InputTextProps = Omit<ComponentProps<"input">, "size"> & {
  size?: keyof typeof inputTextVariants.size;
};

export function InputText({
  size = "md",
  disabled = false,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={`
      ${inputTextVariants.style}
      ${inputTextVariants.size[size]}
      ${disabled && inputTextVariants.disabled}
      ${textVariants.style}
      ${textVariants.variant["body-md"]}
      ${className ? className : ""}
    `}
      {...props}
    />
  );
}
