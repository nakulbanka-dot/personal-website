"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";
import { ResumeButton } from "./resume-button";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-tight transition-colors hover:text-accent"
        >
          {site.name}
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <ResumeButton compact />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
