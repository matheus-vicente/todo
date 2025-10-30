import type { ComponentProps } from "react";

import Check from "../assets/icons/check.svg?react";

import { Icon } from "./icon";
import { Skeleton } from "./skeleton";

const inputCheckboxWrapperVariants = {
  style: "inline-flex items-center justify-center relative group",
};

const inputCheckboxVariants = {
  style:
    "appearance-none peer flex items-center justify-center cursor-pointer transition overflow-hidden",
  variant: {
    none: "",
    default: `
      border-2 border-solid border-green-base
      hover:border-green-dark hover:bg-green-dark/20
      checked:border-green-base checked:bg-green-base
      group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
    `,
  },
  size: {
    md: "w-5 h-5 rounded-sm",
  },
  disabled: "pointer-events-none",
};

const inputCheckboxIconVariants = {
  style:
    "cursor-pointer absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white",
  size: {
    md: "w-3 h-3",
  },
};

type InputCheckboxProps = Omit<ComponentProps<"input">, "size"> & {
  loading?: boolean;
  size?: keyof typeof inputCheckboxVariants.size;
  variant?: keyof typeof inputCheckboxVariants.variant;
};

export function InputCheckbox({
  size = "md",
  variant = "default",
  loading = false,
  disabled = false,
  className,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={`
        ${inputCheckboxVariants.size[size]}
        ${inputCheckboxVariants.variant.none}
      `}
      />
    );
  }

  return (
    <label
      className={`
        ${inputCheckboxWrapperVariants.style}
        ${className ? className : ""}
      `}
    >
      <input
        type="checkbox"
        disabled={disabled}
        className={`
          ${inputCheckboxVariants.style}
          ${inputCheckboxVariants.size[size]}
          ${inputCheckboxVariants.variant[variant]}
          ${disabled && inputCheckboxVariants.disabled}
        `}
        {...props}
      />
      <Icon
        svg={Check}
        className={`
          ${inputCheckboxIconVariants.style}
          ${inputCheckboxIconVariants.size[size]}
        `}
      />
    </label>
  );
}
