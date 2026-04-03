"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Summary", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <span className="text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-foreground">
            Getachew <span className="hidden sm:inline">Abegaz</span>
          </span>
        </Link>

        <nav className="flex items-center space-x-1 sm:space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path || pathname === `${item.path}/`;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative px-1 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

        </nav>
      </div>
    </header>
  );
}
