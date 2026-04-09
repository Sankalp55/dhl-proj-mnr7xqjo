import * as React from "react";

export type SparklesCoreProps = React.HTMLAttributes<HTMLDivElement> & {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
};

/**
 * Minimal, build-safe SparklesCore placeholder.
 * Some templates expect this export from this path.
 */
export function SparklesCore({
  className,
  background,
  particleColor,
  style,
  ...props
}: SparklesCoreProps) {
  return (
    <div
      className={className}
      style={{
        background: background ?? undefined,
        ...(particleColor ? ({ ["--sparkle-color" as any]: particleColor } as any) : null),
        ...style,
      }}
      {...props}
    />
  );
}

export default SparklesCore;
