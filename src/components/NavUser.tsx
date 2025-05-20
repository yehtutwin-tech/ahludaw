'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/cash-in", label: "Cash In" },
  { href: "/cash-out", label: "Cash Out" },
  { href: "/banking-info", label: "Banking Info" },
];

export default function NavUser() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={'/'} className="text-xl font-semibold text-gray-800 cursor-pointer">
            Open Hands Myanmar
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`cursor-pointer hover:text-gray-800 ${
                    isActive ? "text-blue-600 underline" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="mobile-menu-button p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="mobile-menu hidden md:hidden">
        <Link
          href="index"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Home
        </Link>
        <Link
          href="cash-in"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Cash In
        </Link>
        <Link
          href="cash-out"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Cash Out
        </Link>
        <Link
          href="banking-info"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Banking Info
        </Link>
      </div>
    </nav>
  );
}
