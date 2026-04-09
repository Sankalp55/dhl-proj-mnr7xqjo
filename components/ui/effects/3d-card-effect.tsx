import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Minimal, build-safe 3D card effect components.
 * Some templates import these named exports.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function CardBody({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export type CardItemProps = DivProps & {
  translateZ?: number | string;
  as?: keyof JSX.IntrinsicElements;
};

export function CardItem({ as, className, translateZ, style, ...props }: CardItemProps) {
  const Comp: any = as ?? "div";
  return (
    <Comp
      className={className}
      style={{
        ...(style ?? {}),
        ...(translateZ != null
          ? ({ transform: `translateZ(${typeof translateZ === "number" ? `${translateZ}px` : translateZ})` } as React.CSSProperties)
          : null),
      }}
      {...props}
    />
  );
}

export default CardContainer;
