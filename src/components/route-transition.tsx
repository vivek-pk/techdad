'use client';

import { PropsWithChildren } from 'react';

// Disable page-level animations to avoid any hydration style mismatches.
export default function RouteTransition({ children }: PropsWithChildren) {
  return <>{children}</>;
}
