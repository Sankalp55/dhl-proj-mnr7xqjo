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
 * Minimal, build-safe AnimatedTestimonials placeholder.
 * Renders a simple list to satisfy imports during build.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      {testimonials.map((t, idx) => (
        <figure key={idx}>
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <div>{t.name}</div>
            {t.designation ? <div>{t.designation}</div> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default AnimatedTestimonials;
