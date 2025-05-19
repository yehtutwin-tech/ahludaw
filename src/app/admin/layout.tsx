import NavAdmin from '@/components/NavAdmin';
import React from 'react'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavAdmin />
      {children}
    </>
  );
}
