import type { ComponentProps } from "react";

import { Text } from "./text";
import { Skeleton } from "./skeleton";

const badgeVariants = {
  style: "inline-flex items-center justify-center rounded-full",
  variant: {
    none: "",
    primary: "bg-green-light",
    secondary: "bg-pink-light",
  },
  size: {
    sm: "py-0.5 px-2",
  },
};

const badgeTextVariants = {
  variant: {
    none: "",
    primary: "text-green-dark",
    secondary: "text-pink-dark",
  },
};

const badgeSkeletonVariants = {
  size: {
    sm: "w-6 h-6",
  },
};

type BadgeProps = ComponentProps<"div"> & {
  loading?: boolean;
  size?: keyof typeof badgeVariants.size;
  variant?: keyof typeof badgeVariants.variant;
};

export function Badge({
  variant = "primary",
  size = "sm",
  loading = false,
  className,
  children,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={`
        ${badgeVariants.style}
        ${badgeVariants.variant.none}
        ${badgeSkeletonVariants.size.sm}
        ${className ? className : ""}
      `}
      />
    );
  }

  return (
    <div
      className={`
        ${badgeVariants.style}
        ${badgeVariants.size[size]}
        ${badgeVariants.variant[variant]}
      `}
      {...props}
    >
      <Text className={badgeTextVariants.variant[variant]}>{children}</Text>
    </div>
  );
}
