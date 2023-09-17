'use client';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        disableTransitionOnChange="false"
        enableSystem
      >
        {children}
      </ThemeProvider>
    </>
  );
}
