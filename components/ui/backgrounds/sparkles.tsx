import * as React from "react";

export type SparklesCoreProps = {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

/**
 * Minimal SparklesCore implementation to satisfy imports.
 * This is a lightweight placeholder (no canvas/WebGL) to avoid build errors.
 */
export function SparklesCore({
  className,
  background,
}: SparklesCoreProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        background: background ?? "transparent",
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default SparklesCore;
