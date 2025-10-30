import type { ComponentProps } from "react";

type MainContentProps = ComponentProps<"main">;

export function MainContent({
  className,
  children,
  ...props
}: MainContentProps) {
  return (
    <main className={`mt-4 md:mt-8 ${className ? className : ""}`} {...props}>
      {children}
    </main>
  );
}
