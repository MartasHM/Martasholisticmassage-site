// src/components/Layout.tsx
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles: { [key: string]: React.CSSProperties } = {
    layoutWrapper: {
      minHeight: '100vh',
      width: '100vw',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column' as const,
      background: 'linear-gradient(to bottom right, #e7f5ec, #d2ebe1)',
      fontFamily: 'Playfair Display, serif',
    },
    header: {
      backgroundImage: 'url(cover.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
    },
    logo: {
      height: '150px',
      width: 'auto',
    },
    main: {
      flex: 1,
      padding: '2rem',
      width: '100%',
    },
  };

  return (
    <div style={styles.layoutWrapper}>
      <header style={styles.header}>
        <img src="mhm-logo.png" alt="Logo" style={styles.logo} />
      </header>
      <main style={styles.main}>{children}</main>
    </div>
  );
}
