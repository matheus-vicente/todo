import type { ComponentProps, FC } from "react";

const iconVariant = {
  animate: "animate-spin",
};

type IconProps = ComponentProps<"svg"> & {
  animate?: boolean;
  svg: FC<ComponentProps<"svg">>;
};

export function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={`
      ${animate ? iconVariant.animate : ""}
      ${className ? className : ""}
    `}
      {...props}
    />
  );
}
