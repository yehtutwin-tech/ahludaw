"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/cash-in", label: "Cash In" },
  { href: "/cash-out", label: "Cash Out" },
  { href: "/banking-info", label: "Banking Info" },
];

export default function NavUser() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href={"/"}
            className="text-xl font-semibold text-gray-800 cursor-pointer"
          >
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
            <button className="mobile-menu-button p-2" onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? "" : "hidden"} md:hidden`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className={`block py-2 px-4 text-sm hover:bg-gray-200 ${
                isActive ? "text-blue-600 underline" : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
