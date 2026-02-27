// app/layout.tsx

import { ReactNode } from 'react';
import LayoutClient from '@/app/_components/sections/LayoutClient';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <LayoutClient>{children}</LayoutClient>;
}
