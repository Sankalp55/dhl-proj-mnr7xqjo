"use client";

import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

type CardItemProps = DivProps & {
  translateZ?: number | string;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Minimal 3D card effect components to satisfy imports.
 * These are intentionally lightweight wrappers.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function CardBody({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function CardItem({ as, className, translateZ, style, ...props }: CardItemProps) {
  const Comp: any = as ?? "div";
  const z = typeof translateZ === "number" ? `${translateZ}px` : translateZ;
  return (
    <Comp
      className={className}
      style={{
        ...style,
        transform: z ? `translateZ(${z})` : style?.transform,
      }}
      {...props}
    />
  );
}

export default CardContainer;
