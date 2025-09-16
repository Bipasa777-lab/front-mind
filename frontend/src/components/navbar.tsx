"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  // ✅ Local state inside Navbar (no props required)
  const [mounted, setMounted] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 lg:px-24 py-3 bg-[#80b6ff] shadow-md">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/min.svg"
          alt="Mind Haven"
          width={40}
          height={40}
          priority
        />
        <div className="text-black">
          <div className="font-semibold text-lg md:text-xl leading-none">Mind</div>
          <div className="text-xs md:text-sm -mt-1 tracking-wide">Haven</div>
        </div>
      </Link>

      {/* Buttons Section */}
      {mounted && (
        <div className="flex gap-3">
          <Link href="/dashboard">
            <Button
              onClick={() => setActivePage("dashboard")}
              className={`rounded-full px-5 transition ${
                activePage === "dashboard"
                  ? "bg-sky-600 text-white"
                  : "bg-sky-400 hover:bg-sky-500 text-white"
              }`}
            >
              Dashboard
            </Button>
          </Link>

          <Link href="/faq">
            <Button
              onClick={() => setActivePage("faq")}
              className={`rounded-full px-5 transition ${
                activePage === "faq"
                  ? "bg-sky-600 text-white"
                  : "bg-sky-400 hover:bg-sky-500 text-white"
              }`}
            >
              FAQ
            </Button>
          </Link>

          <Link href="/about">
            <Button
              onClick={() => setActivePage("about")}
              className={`rounded-full px-5 transition ${
                activePage === "about"
                  ? "bg-sky-600 text-white"
                  : "bg-sky-400 hover:bg-sky-500 text-white"
              }`}
            >
              About
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
