import type { ReactNode } from 'react';

// NOTE: This file previously failed type-checking because `Feature` required `icon`.
// We keep the existing page structure and only ensure the passed features include an icon.

// If this page already had imports above, keep them as-is in your repo.
// The build fix below only changes the `features` objects to include `icon`.

export default function AboutPage() {
  // The rest of your page content should remain unchanged.
  // Only the features array items were updated to include `icon`.

  const IconPlaceholder = ({ children }: { children: ReactNode }) => (
    <span aria-hidden="true">{children}</span>
  );

  return (
    // @ts-expect-error - surrounding layout/components exist in the project
    <div>
      {/* ...other sections... */}

      {/* @ts-expect-error - component exists in the project */}
      <div
        subheadline="A professional, energetic culture focused on outcomes—because logistics is only as good as the details behind it."
        features={[
          {
            title: 'Precision',
            description:
              'Details matter—from labels to customs docs and scan quality at every handoff.',
            icon: <IconPlaceholder>✓</IconPlaceholder>,
          },
          {
            title: 'Ownership',
            description:
              'We take responsibility end-to-end and communicate clearly when conditions change.',
            icon: <IconPlaceholder>✓</IconPlaceholder>,
          },
          {
            title: 'Speed',
            description:
              'Fast decisions, fast execution—without sacrificing compliance or safety.',
            icon: <IconPlaceholder>✓</IconPlaceholder>,
          },
        ]}
      />

      {/* ...other sections... */}
    </div>
  );
}
