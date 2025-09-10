"use client";

import Image from "next/image";
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
  User,
  Phone,
  Code,
  Instagram,
  MessageCircle,
  Mail,
} from "lucide-react";

const contacts = [
  { name: "Amina Jubair", phone: "9037786170" },
  { name: "Daris Benny", phone: "9778135924" },
  { name: "Devan", phone: "8111835721" },
  { name: "Merlin Shiby", phone: "9072492427" },
  { name: "Anand Maheshwar", phone: "9447839911" },
  { name: "Mareo Manoj", phone: "7025458339", isDev: true },
  { name: "Mariam Jo", phone: "9496622452" },
  { name: "Noel Tom", phone: "6238999360" },
  { name: "Yamin Beck", phone: "7012837399" },
];

const resources = [
  {
    title: "Notes",
    desc: "Comprehensive study notes for all subjects, organized by department and semester.",
    btn: "View Notes",
    icon: <Book size={40} /> 
  },
  {
    title: "Textbooks",
    desc: "Find scanned textbooks and reference materials needed for your courses.",
    btn: "View Textbooks",
    icon: <BookOpen size={40} />
  },
  {
    title: "Papers",
    desc: "Access KTU model papers, series papers, and semester papers.",
    btn: "View Papers",
    icon: <FileText size={40} />

  },
  {
    title: "Syllabus & Curriculum",
    desc: "Department-wise syllabus and curriculum information for all semesters and courses.",
    btn: "View Syllabus & Curriculum",
    icon: <List size={40} />
  },
  {
    title: "New Admissions",
    desc: "Information for newly admitted students under the 2024 scheme.",
    btn: "View Details",
    icon: <UserPlus size={40} />
  },
  {
    title: "Minor Courses",
    desc: "Gain insight and information regarding the minor courses offered by the college.",
    btn: "View Minor Courses",
    icon: <GraduationCap size={40} />
  },
  {
    title: "Challenge Courses and Digital 101",
    desc: "Information regarding the challenge courses and digital 101 offered by the college.",
    btn: "View Challenge Courses and Digital 101",
    icon: <Calendar size={40} />
  },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0c1738] to-[#142c61] text-center py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-6xl font-bold text-cyan-400">
        KSU Student Assist Cell 2025
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-2xl text-gray-300">
        Your all-in-one resource hub for CET students
      </p>

      {/* Image */}
      <div className="mt-8 flex justify-center">
        <Image
          src="/cet.jpeg" // save your image inside /public/college.jpg
          alt="College of Engineering"
          width={800}
          height={800}
          className="rounded-xl shadow-lg"
        />
      </div>
      <div className="px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left hover:cursor-pointer">
        {resources.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] py-16 px-12 rounded-xl shadow-md text-white transition-all duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500"
          >
            <div className="mb-4 text-cyan-400 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-4xl font-bold mb-3 ">{item.title}</h3>
            <p className="text-xl text-gray-300 mb-5 mt-10 font-semibold">{item.desc}</p>
            <button className="px-4 py-2 mt-5  bg-gradient-to-b from-[#698aed] to-[#2861db] hover:bg-blue-700 rounded-4xl text-white text-2xl font-semibold hover:cursor-pointer">
              {item.btn}
            </button>

          </div>
        ))}
      </div>
    </div>
        <section className="px-6 py-10">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">Contact Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  ">
        {contacts.map((person, idx) => (                   
          <div
            key={idx}
            className="bg-[#0f172a] p-6  rounded-3xl shadow-md text-white text-left transition-all duration-300 transform hover:scale-105 hover:border-2 hover:border-blue-500 relative"
          >
            {/* Top Icon */}
            <div className="flex justify-between items-start mb-4 ">
              <User className="text-blue-500 w-7 h-7" />
              {person.isDev && <Code className="text-cyan-400 w-6 h-6" />}
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold mb-3">{person.name}</h3>

            {/* Phone */}
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2" />
              <span>{person.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
        <footer className=" text-white py-8">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <Instagram className="w-7 h-7" />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a
          href="mailto:info@ksucet.ac.in"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <Mail className="w-7 h-7" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-300 text-sm">
        © <span className="font-semibold">KSU CET 2025</span>. All rights reserved.
      </p>
    </footer>
    </section>
    
  );
}
