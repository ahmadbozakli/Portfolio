"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }, // Uncomment when Contact section is ready
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md ">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-medium text-lg flex items-center gap-2"
        >
          <Code2 className="h-6 w-6 text-primary text-gray-500/50" />
          <span className="font-bold text-xl text-gray-500/50">Noirfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-white text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-accent transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="outline" size="sm">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-white border border-white/20 bg-white/5 hover:bg-white/10 transition px-4 py-1.5 rounded-full text-sm"
          >
            Download Resume
          </a>
        </Button>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] p-0 bg-card text-card-foreground"
            >
              <div className="flex h-full flex-col">
                <div className="p-6 border-b border-border">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex items-center space-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Code2 className="h-6 w-6 text-primary" />
                      <span className="font-bold text-xl">Noirfolio</span>
                    </Link>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2 p-6 flex-grow">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-md text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-6 border-t border-border mt-auto">
                  <SheetClose asChild>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Resume
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
