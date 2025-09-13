import React from 'react'

//sample new page creation

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#131c2b] to-[#1a2740]">
      <div className="flex flex-col items-center justify-start flex-grow py-8">
        <h1 className="text-5xl font-extrabold text-white text-center mt-4 mb-2">About Us</h1>
        <p className="text-lg text-[#dbeafe] text-center mb-8 font-semibold">
          Learn more about the KSU CET Student Assist Cell and our mission.
        </p>
        <div className="bg-[#0d1626]/80 rounded-2xl shadow-lg px-8 py-10 max-w-2xl w-full flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Our Mission</h2>
          <p className="text-[#c7d2fe] text-center font-semibold mb-8">
            KSU CET Student Assist Cell was created by students, for students. Our goal is simple: make it effortless to find resources for studies, help with question papers and more.
          </p>
          <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">What We Do</h3>
          <ol className="text-white font-bold text-lg list-decimal list-inside text-left space-y-1">
            <li>Curate up-to-date notes and textbooks.</li>
            <li>Help with question papers and more.</li>
            <li>Provide a platform to access all the resources for studies.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}