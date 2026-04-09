"use client";

import * as React from "react";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  designation?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  className?: string;
};

/**
 * Minimal AnimatedTestimonials implementation to satisfy imports.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      {testimonials.map((t, idx) => (
        <figure key={idx} className="space-y-2">
          <blockquote className="text-sm leading-relaxed">{t.quote}</blockquote>
          <figcaption className="text-xs opacity-80">
            <span className="font-medium">{t.name}</span>
            {t.designation ? <span> · {t.designation}</span> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default AnimatedTestimonials;
