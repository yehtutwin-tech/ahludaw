"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react"; // Uncomment if using NextAuth

const navItems = [
  { href: "/cash-in/entry", label: "Cash In Entry" },
  { href: "/cash-in/list", label: "Cash In List" },
  { href: "/cash-out/entry", label: "Cash Out Entry" },
  { href: "/cash-out/list", label: "Cash Out List" },
];

export default function NavAdmin() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={"/admin"} className="text-xl font-semibold text-gray-800">
            OHM Admin
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === "/admin" + item.href;
              return (
                <Link
                  key={item.href}
                  href={"/admin" + item.href}
                  className={`cursor-pointer hover:text-gray-800 ${
                    isActive ? "text-blue-600 underline" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => signOut({ callbackUrl: "/auth/login" })}
              className="text-red-600 hover:text-red-800 cursor-pointer flex items-center gap-1"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
