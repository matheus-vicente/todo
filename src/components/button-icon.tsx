import type { ComponentProps } from "react";

import { Icon } from "./icon";
import { Skeleton } from "./skeleton";

const buttonIconVariants = {
  style:
    "inline-flex items-center justify-center cursor-pointer transition group",
  variant: {
    none: "",
    primary: "bg-green-base hover:bg-green-dark",
    secondary: "bg-gray-200 hover:bg-pink-base",
    tertiary: "bg-transparent hover:bg-gray-200",
  },
  size: {
    sm: "w-6 h-6 p-1 rounded",
  },
  disabled: "opacity-50 pointer-events-none",
};

const buttonIconIconVariants = {
  style: "transition",
  variant: {
    none: "",
    primary: "fill-white",
    secondary: "fill-pink-base group-hover:fill-white",
    tertiary: "fill-gray-300 group-hover:fill-gray-400",
  },
  size: {
    sm: "w-4 h-4",
  },
};

type ButtonIconProps = Omit<ComponentProps<"button">, "size"> & {
  loading?: boolean;
  icon: ComponentProps<typeof Icon>["svg"];
  size?: keyof typeof buttonIconVariants.size;
  variant?: keyof typeof buttonIconVariants.variant;
};

export function ButtonIcon({
  icon,
  loading = false,
  size = "sm",
  disabled = false,
  variant = "primary",
  className,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={`
        ${buttonIconVariants.style}
        ${buttonIconVariants.size[size]}
        ${buttonIconVariants.variant.none}
        ${className ? className : ""}
      `}
      />
    );
  }

  return (
    <button
      className={`
        ${buttonIconVariants.style}
        ${buttonIconVariants.variant[variant]}
        ${buttonIconVariants.size[size]}
        ${disabled && buttonIconVariants.disabled}
        ${className ? className : ""}
      `}
      {...props}
    >
      <Icon
        svg={icon}
        className={`
          ${buttonIconIconVariants.style}
          ${buttonIconIconVariants.variant[variant]}
          ${buttonIconIconVariants.size[size]}
        `}
      />
    </button>
  );
}
