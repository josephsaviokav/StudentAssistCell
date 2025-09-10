"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  BookOpen,
  FileText,
  List,
  UserPlus,
  GraduationCap,
  Info,
  Calendar,
  X,
  Menu,
} from "lucide-react"; // using lucide icons

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/notes", label: "Notes", icon: <Book size={40} /> },
    { href: "/textbooks", label: "Textbooks", icon: <BookOpen size={40} /> },
    { href: "/papers", label: "Papers", icon: <FileText size={40} /> },
    {
      href: "/syllabus",
      label: "Syllabus & Curriculum",
      icon: <List size={40} />,
    },
    { href: "/admissions", label: "New Admissions", icon: <UserPlus size={40} /> },
    { href: "/minor", label: "Minor Courses", icon: <GraduationCap size={40} /> },
    { href: "/about", label: "About Us", icon: <Info size={40} /> },
    {
      href: "/challenge",
      label: "Challenge Courses",
      icon: <Calendar size={40} />,
    },
  ];

  return (
    <nav className="bg-[#0d1325] text-white flex items-center justify-between px-6 py-8 shadow-md">
      {/* Logo + Title */}
      <div className="flex items-center gap-2">
        <Image src="/ksulogo.png" alt="Logo" width={60} height={60} />
        <span className="font-bold text-cyan-400 text-3xl">KSU Student Assist Cell</span>
      </div>

      {/* Desktop Menu */}
<div className="hidden md:flex gap-12">
  {links.map((link, idx) => (
    <Link
      key={idx}
      href={link.href}
      className="group relative flex items-center text-white hover:text-cyan-400 transition-colors duration-300"
    >
      {/* Icon always visible */}
      {link.icon}

      {/* Label appears only on hover */}
      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded-md bg-gray-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {link.label}
      </span>
    </Link>
  ))}
</div>


      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-50">
          <div className="absolute top-0 left-0 w-64 h-full bg-[#0d1325] p-4 flex flex-col">
            {/* Header with logo + close button */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Image src="/ksulogo.png" alt="Logo" width={30} height={30} />
                <span className="font-bold text-cyan-400 text-base">
                  KSU Student Assist Cell
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
