import NavUser from '@/components/NavUser';
import React from 'react'

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <NavUser />
        {children}
    </>
  );
}
