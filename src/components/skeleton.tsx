import type { ComponentProps } from "react";

const skeletonVariants = {
  style: "animate-pulse bg-gray-200 pointer-events-none",
  rounded: {
    sm: "rounded-sm",
    lg: "rounded-lg",
    full: "rounded-full",
  },
};

type SkeletonProps = ComponentProps<"div"> & {
  rounded?: keyof typeof skeletonVariants.rounded;
};

export function Skeleton({
  rounded = "lg",
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={`
        ${skeletonVariants.style}
        ${skeletonVariants.rounded[rounded]}
        ${className ? className : ""}
      `}
      {...props}
    />
  );
}
