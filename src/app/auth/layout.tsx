import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-2xl space-y-6">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome to
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Open Hands Myanmar
            </h2>
            <p className="text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
