import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import NavAdmin from '@/components/NavAdmin';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/login");

  return (
    <>
      <NavAdmin />
      {children}
    </>
  );
}
