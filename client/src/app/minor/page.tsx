"use client";
 
import React, { useMemo, useState } from "react";
import NavBar from "@/components/NavBar";
import Sidebar, { type SidebarButton as SidebarButtonType } from "@/components/Sidebar";

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ open, title, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative mx-4 w-full max-w-2xl rounded-2xl bg-slate-900 text-slate-100 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-lg font-semibold tracking-tight text-slate-100">
            {title}
          </h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-full p-1 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            {/* X Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function MinorPage() {
  const [openModal, setOpenModal] = useState<null | "general">(null);
  const [expandedDepartment, setExpandedDepartment] = useState<string | null>(null);
  const [showDepartments, setShowDepartments] = useState(false);

  const generalInfo = useMemo(
    () => (
      <div className="space-y-5 text-slate-200">
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            Those who complete the minor scheme along with the regular B-Tech
            Programme will get an additional minor degree.
          </li>
          <li>Minor Programme starts in Semester 3.</li>
          <li>Enrolment to the minor programme is NOT COMPULSORY.</li>
          <li>
            Students are generally not allowed to register for minors offered by
            their parent branches. Additionally, students are prohibited from
            opting for minor courses if there is more than 30% syllabus content
            overlap between courses listed in the major and minor programmes.
          </li>
          <li>
            Some of the slots for the course will be outside regular working
            hours (before/after regular hours).
          </li>
          <li>
            There shall not be any supplementary examinations for the theory
            courses listed in the Minor curriculum. If a student fails in any of
            the theory courses, they shall be permitted to register for the
            alternate MOOC course specified in the Minor curriculum.
          </li>
          <li>
            Each department might offer one or more minor programs. Each minor
            program contains courses in a specific domain (details in the next
            page).
          </li>
          <li>
            The student has to complete <span className="font-semibold">15 CREDITS</span> to get the Minor
            degree; the split-up is as follows:
            <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-300">
              <li>Semester 3: 4 Credits</li>
              <li>Semester 4: 4 Credits</li>
              <li>Semester 5: 4 Credits</li>
              <li>Semester 6: 3 Credits</li>
            </ul>
            <p className="mt-2 text-slate-300">
              You can also take a maximum of two MOOC courses approved by the
              University – 7 to 8 credits.
            </p>
          </li>
          <li>
            The minimum number of students per minor batch is 15 and maximum is
            66. Minor programmes without minimum enrolment will not be offered.
          </li>
        </ol>

        <div className="pt-2">
          <h4 className="text-base font-semibold text-white">
            Allotment of Minor Program
          </h4>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-200">
            <li>You can give maximum 7 choices for Minor programs.</li>
            <li>
              Allotment is based on your choice and your SGPA in the first
              semester. If none of the choices can be allotted, you will be
              allotted a minor program at random, in which case you may drop
              minor if you wish.
            </li>
            <li>Re-allotment requests will not be considered.</li>
          </ul>
        </div>
      </div>
    ),
    []
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openPDF = (pdfPath: string) => {
    window.open(pdfPath, '_blank');
  };

  // Sidebar configuration
  const sidebarButtons: SidebarButtonType[] = [
    {
      id: 'general-info',
      title: 'General Info',
      onClick: () => setOpenModal("general"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-6">
          <path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5A2.25 2.25 0 0 1 19.5 5.25v13.5a.75.75 0 0 1-1.2.6l-1.8-1.35-1.8 1.35a.75.75 0 0 1-.9 0L12 18l-1.8 1.35a.75.75 0 0 1-.9 0L7.5 18l-1.8 1.35a.75.75 0 0 1-1.2-.6V5.25Z" />
        </svg>
      ),
    },
    {
      id: 'overview',
      title: 'Overview',
      onClick: () => scrollTo("overview"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-6">
          <path d="M12 6.75c-1.768-1.228-3.88-1.5-6-.75a.75.75 0 0 0-.5.71v9.03a.75.75 0 0 0 1.01.71c1.86-.62 3.71-.42 5.49.59.47.27 1.03.27 1.5 0 1.78-1.01 3.63-1.21 5.49-.59a.75.75 0 0 0 1.01-.71V6.71a.75.75 0 0 0-.5-.71c-2.12-.75-4.23-.48-6 .75Z" />
        </svg>
      ),
    },
    {
      id: 'credits',
      title: 'Credits',
      onClick: () => scrollTo("credits"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-6">
          <path d="M19.5 3.75h-9A2.25 2.25 0 0 0 8.25 6v12A2.25 2.25 0 0 0 10.5 20.25h9A2.25 2.25 0 0 0 21.75 18V6A2.25 2.25 0 0 0 19.5 3.75Z" />
          <path d="M3.75 6.75A.75.75 0 0 1 4.5 6h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm0 3A.75.75 0 0 1 4.5 9h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" />
        </svg>
      ),
    },
    {
      id: 'departments',
      title: 'Departments',
      onClick: () => scrollTo("departments"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-6">
          <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
        </svg>
      ),
    },
    {
      id: 'allotment',
      title: 'Allotment',
      onClick: () => scrollTo("allotment"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-6">
          <path d="M15.75 8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          <path d="M1.5 20.25a9 9 0 1 1 21 0v.75H1.5v-.75Z" />
        </svg>
      ),
    },
    {
      id: 'home',
      title: 'Home',
      onClick: () => (window.location.href = "/"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" className="size-6">
          <path d="M12 3 1.5 9l10.5 6 9-5.143V18h1.5V9L12 3Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-slate-100">
  {/* <NavBar active="home" /> */}

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-14">
        {/* Title */}
        <section id="overview" className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Minor Courses
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-slate-300">
            Access information and resources for Minor Courses offered at CET.
          </p>
        </section>

        {/* Intro card */}
        <section className="mt-10">
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 px-6 py-8 shadow-2xl ring-1 ring-white/10 sm:px-10">
            <h2 className="text-center text-3xl font-semibold text-slate-200">
              What is a Minor in
             
                Engineering
              
              ?
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-center text-slate-300">
              A B.Tech. Minor lets you take additional courses outside your main
              branch of study. This helps you gain expertise in a secondary
              engineering field, expand your knowledge, and improve your career
              prospects by diversifying your skills and opening up more
              opportunities in multidisciplinary areas.
            </p>
          </div>
        </section>

        {/* Action buttons */}
        <section className="mx-auto mt-10 grid max-w-3xl gap-4">
          <button
            onClick={() => setOpenModal("general")}
            className="group w-full rounded-2xl border border-white/10 bg-slate-800/60 px-5 py-4 text-left text-slate-100 shadow-lg ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-slate-800/80 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">View General Information</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-blue-300 transition group-hover:translate-x-0.5"
              >
                <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6.31l-7.22 7.22a.75.75 0 0 1-1.06-1.06L16.94 5.25h-2.69a.75.75 0 0 1-.75-.75Z" />
                <path d="M5.25 6A.75.75 0 0 1 6 5.25h4.5a.75.75 0 0 1 0 1.5H7.56l10.19 10.19a.75.75 0 1 1-1.06 1.06L6.5 7.81v2.94a.75.75 0 0 1-1.5 0V6Z" />
              </svg>
            </div>
            <p className="mt-1 text-sm text-slate-300">
              Eligibility basics, rules, scheduling, and exam policy.
            </p>
          </button>

          {/* <a
            href="#departments"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("departments");
            }}
            className="w-full rounded-2xl border border-white/10 bg-slate-800/60 px-5 py-4 text-left text-slate-100 shadow-lg ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-slate-800/80 hover:shadow-xl"
          > */}
            {/* <div className="flex items-center justify-between">
              <span className="text-base font-semibold">Browse Departments</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-blue-300"
              >
                <path d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25A.75.75 0 0 1 4.5 11h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" />
              </svg>
            </div> */}
            {/* <p className="mt-1 text-sm text-slate-300">Find minor offerings across branches.</p> */}
          {/* </a> */}
        </section>

  {/* Departments dropdown section */}
        <section id="departments" className="mt-14">
          <h3 className="text-xl font-semibold">Departments</h3>
          <p className="mt-1 text-slate-300">
            Explore minors typically offered by various departments.
          </p>

          <div className="mt-6 space-y-4">
            {/* Browse Departments Button */}
            <button
              onClick={() => setShowDepartments(!showDepartments)}
              className="w-full rounded-2xl border border-blue-500/30 bg-slate-900/60 px-6 py-4 text-left text-slate-100 shadow-lg ring-1 ring-white/10 transition hover:bg-slate-900/80 flex items-center justify-between"
            >
              <div>
                <span className="text-base font-semibold">Browse Departments</span>
                <p className="mt-1 text-sm text-slate-300">Find minor offerings across branches.</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`size-5 text-slate-400 transition-transform ${showDepartments ? 'rotate-180' : ''}`}
              >
                <path d="M6.75 9.75a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19a.75.75 0 1 1 1.06 1.06l-4.72 4.72a.75.75 0 0 1-1.06 0L6.75 10.81a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </button>

            {/* Department List - Shows when Browse Departments is clicked */}
            {showDepartments && (
              <div className="ml-4 space-y-2">
                {/* AEI Department */}
                <div>
                  <button
                    onClick={() => setExpandedDepartment(expandedDepartment === 'aei' ? null : 'aei')}
                    className="w-full rounded-xl border border-blue-500/30 bg-slate-800/40 px-4 py-3 text-left text-slate-100 shadow ring-1 ring-white/10 transition hover:bg-slate-800/60 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium">Applied Electronics & Instrumentation (AEI)</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 text-slate-400 transition-transform ${expandedDepartment === 'aei' ? 'rotate-180' : ''}`}
                    >
                      <path d="M6.75 9.75a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19a.75.75 0 1 1 1.06 1.06l-4.72 4.72a.75.75 0 0 1-1.06 0L6.75 10.81a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </button>

                  {/* Expanded content for AEI */}
                  {expandedDepartment === 'aei' && (
                    <div className="ml-6 mt-3">
                      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor in Applied Electronics and Instrumentation.
                        </h4>
                        <button 
                          onClick={() => openPDF('/pdfs/AEI/AE Applied Electronics and Instrumentation.pdf')}
                          className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                        >
                          View Curriculum
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Computer Science and Engineering - Special case with two minors */}
                <div>
                  <button
                    onClick={() => setExpandedDepartment(expandedDepartment === 'cse' ? null : 'cse')}
                    className="w-full rounded-xl border border-blue-500/30 bg-slate-800/40 px-4 py-3 text-left text-slate-100 shadow ring-1 ring-white/10 transition hover:bg-slate-800/60 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium">Computer Science and Engineering (CSE)</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 text-slate-400 transition-transform ${expandedDepartment === 'cse' ? 'rotate-180' : ''}`}
                    >
                      <path d="M6.75 9.75a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19a.75.75 0 1 1 1.06 1.06l-4.72 4.72a.75.75 0 0 1-1.06 0L6.75 10.81a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </button>

                  {/* Expanded content for CSE - Two minor options */}
                  {expandedDepartment === 'cse' && (
                    <div className="ml-6 mt-3 space-y-3">
                      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor in Artificial Intelligence
                        </h4>
                        <button 
                          onClick={() => openPDF('/pdfs/CSE/CS Artificial Intelligence.pdf')}
                          className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                        >
                          View Curriculum
                        </button>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor in Computer Science
                        </h4>
                        <button 
                          onClick={() => openPDF('/pdfs/CSE/CS Computer Science and Engineering.pdf')}
                          className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                        >
                          View Curriculum
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Other departments */}
                {[
                  { key: 'ece', name: 'Electronics and Communication (ECE)' },
                  { key: 'ie', name: 'Industrial and Systems Engineering (IE)' },
                ].map((dept) => (
                  <div key={dept.key}>
                    <button
                      onClick={() => setExpandedDepartment(expandedDepartment === dept.key ? null : dept.key)}
                      className="w-full rounded-xl border border-blue-500/30 bg-slate-800/40 px-4 py-3 text-left text-slate-100 shadow ring-1 ring-white/10 transition hover:bg-slate-800/60 flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">{dept.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-4 text-slate-400 transition-transform ${expandedDepartment === dept.key ? 'rotate-180' : ''}`}
                      >
                        <path d="M6.75 9.75a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19a.75.75 0 1 1 1.06 1.06l-4.72 4.72a.75.75 0 0 1-1.06 0L6.75 10.81a.75.75 0 0 1 0-1.06Z" />
                      </svg>
                    </button>

                    {/* Expanded content for other departments */}
                    {expandedDepartment === dept.key && (
                      <div className="ml-6 mt-3">
                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Minor in {dept.name.split(' (')[0]}.
                          </h4>
                          <button 
                            onClick={() => {
                              const pdfPaths = {
                                'ece': '/pdfs/ECE/ECE Electronics and Communication Engg.pdf',
                                'ie': '/pdfs/IE/IE Industrial and Systems Engineering.pdf'
                              };
                              openPDF(pdfPaths[dept.key as keyof typeof pdfPaths]);
                            }}
                            className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                          >
                            View Curriculum
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Mechanical Engineering - Special case with two minors */}
                <div>
                  <button
                    onClick={() => setExpandedDepartment(expandedDepartment === 'me' ? null : 'me')}
                    className="w-full rounded-xl border border-blue-500/30 bg-slate-800/40 px-4 py-3 text-left text-slate-100 shadow ring-1 ring-white/10 transition hover:bg-slate-800/60 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium">Mechanical Engineering (ME)</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 text-slate-400 transition-transform ${expandedDepartment === 'me' ? 'rotate-180' : ''}`}
                    >
                      <path d="M6.75 9.75a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19a.75.75 0 1 1 1.06 1.06l-4.72 4.72a.75.75 0 0 1-1.06 0L6.75 10.81a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </button>

                  {/* Expanded content for ME - Two minor options */}
                  {expandedDepartment === 'me' && (
                    <div className="ml-6 mt-3 space-y-3">
                      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor in Financial Management
                        </h4>
                        <button 
                          onClick={() => openPDF('/pdfs/ME/ME Financial Management (Additional Offer).pdf')}
                          className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                        >
                          View Curriculum
                        </button>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor in Intelligent Systems Design Manufacturing
                        </h4>
                        <button 
                          onClick={() => openPDF('/pdfs/ME/ME Intelligent Systems Design Manufacturing.pdf')}
                          className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                        >
                          View Curriculum
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Electrical and Electronics Engineering - Special case with three minors */}
                <div>
                  <button
                    onClick={() => setExpandedDepartment(expandedDepartment === 'eee' ? null : 'eee')}
                    className="w-full rounded-xl border border-blue-500/30 bg-slate-800/40 px-4 py-3 text-left text-slate-100 shadow ring-1 ring-white/10 transition hover:bg-slate-800/60 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium">Electrical and Electronics (EEE)</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 text-slate-400 transition-transform ${expandedDepartment === 'eee' ? 'rotate-180' : ''}`}
                    >
                      <path d="M6.75 9.75a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19a.75.75 0 1 1 1.06 1.06l-4.72 4.72a.75.75 0 0 1-1.06 0L6.75 10.81a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </button>

                  {/* Expanded content for EEE - Three minor options */}
                  {expandedDepartment === 'eee' && (
                    <div className="ml-6 mt-3 space-y-3">
                      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor in Control Engineering
                        </h4>
                        <button 
                          onClick={() => openPDF('/pdfs/EEE/EEE Control Engineering.pdf')}
                          className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                        >
                          View Curriculum
                        </button>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor in Energy Engineering
                        </h4>
                        <button 
                          onClick={() => openPDF('/pdfs/EEE/EEE Energy Engineering.pdf')}
                          className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                        >
                          View Curriculum
                        </button>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Minor in Power Converters & Drives
                        </h4>
                        <button 
                          onClick={() => openPDF('/pdfs/EEE/EEE POWER CONVERTERS & DRIVES.pdf')}
                          className="rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-600/20"
                        >
                          View Curriculum
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Credit structure section */}
        <section id="credits" className="mt-14">
          <h3 className="text-xl font-semibold">Credit Structure</h3>
          <p className="mt-1 text-slate-300">
            Students must complete a total of 15 credits to be awarded the Minor degree.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { sem: "Semester 3", cr: 4 },
              { sem: "Semester 4", cr: 4 },
              { sem: "Semester 5", cr: 4 },
              { sem: "Semester 6", cr: 3 },
            ].map((item) => (
              <div
                key={item.sem}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 text-center shadow ring-1 ring-white/10"
              >
                <p className="text-slate-300">{item.sem}</p>
                <p className="mt-1 text-2xl font-bold text-white">{item.cr} Credits</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Additionally, you may take up to two University-approved MOOC courses (7–8 credits).
          </p>
        </section>

        {/* Allotment section */}
        <section id="allotment" className="mt-14">
          <h3 className="text-xl font-semibold">Allotment</h3>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
            <li>You can give a maximum of 7 choices for Minor programs.</li>
            <li>
              Allotment is based on your choices and SGPA in the first semester. If none of the choices can be
              allotted, a program will be allotted at random; you may drop the minor if you wish.
            </li>
            <li>Re-allotment requests will not be considered.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              {/* Instagram with hover tooltip */}
              <div className="relative group">
                <a 
                  
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Hover tooltip */}
                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                  <div className="bg-slate-800/95 backdrop-blur-md rounded-xl border border-slate-600/50 px-4 py-3 shadow-2xl ring-1 ring-white/10 min-w-[200px] pointer-events-auto">
                    {/* First Instagram Account */}
                    <a 
                      href="https://www.instagram.com/studentassistcell_cet/" 
                      target="_blank"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors group/item"
                    >
                      <div className="flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white group-hover/item:text-blue-300 transition-colors truncate">
                          KSU Student Assist Cell
                        </div>
                      </div>
                    </a>

                    {/* Divider */}
                    <div className="border-t border-slate-600/30 my-1"></div>

                    {/* Second Instagram Account */}
                    <a 
                      href="https://www.instagram.com/ksu.cet/" 
                      target="_blank"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors group/item"
                    >
                      <div className="flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white group-hover/item:text-blue-300 transition-colors truncate">
                          KSU CET
                        </div>
                      </div>
                    </a>

                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/95"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a 
                href="https://chat.whatsapp.com/JYDuhIWcdQLH2mud9LkkuU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:studentassist@cet.ac.in" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-slate-400 text-sm text-center">
              © KSU CET 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating sidebar */}
      <Sidebar buttons={sidebarButtons} />

      {/* Modal instances */}
      <Modal
        open={openModal === "general"}
        title="General Information"
        onClose={() => setOpenModal(null)}
      >
        {generalInfo}
      </Modal>
    </div>
  );
}

