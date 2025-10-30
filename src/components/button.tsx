import type { ComponentProps } from "react";

import { Icon } from "./icon";
import { Text } from "./text";

const buttonVariants = {
  style:
    "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  variant: {
    primary: "bg-gray-200 hover:bg-pink-light",
  },
  size: {
    md: "h-14 py-4 px-5",
  },
  disabled: "opacity-50 pointer-events-none",
};

const buttonIconVariants = {
  style: "transition",
  variant: {
    primary: "fill-pink-base",
  },
  size: {
    md: "w-5 h-5",
  },
};

const buttonTextVariants = {
  variant: {
    primary: "text-gray-400",
  },
};

type ButtonProps = Omit<ComponentProps<"button">, "size"> & {
  size?: keyof typeof buttonVariants.size;
  variant?: keyof typeof buttonVariants.variant;
  icon?: ComponentProps<typeof Icon>["svg"];
};

export function Button({
  icon,
  disabled = false,
  size = "md",
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${buttonVariants.style}
        ${buttonVariants.size[size]}
        ${buttonVariants.variant[variant]}
        ${disabled && buttonVariants.disabled}
        ${className ? className : ""}
      `}
      {...props}
    >
      {icon && (
        <Icon
          svg={icon}
          className={`
            ${buttonIconVariants.style}
            ${buttonIconVariants.size[size]}
            ${buttonIconVariants.variant[variant]}
          `}
        />
      )}
      <Text className={buttonTextVariants.variant[variant]}>{children}</Text>
    </button>
  );
}
