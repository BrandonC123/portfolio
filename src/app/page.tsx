import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TbUser, TbCode, TbSchool } from "react-icons/tb";

export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      {/* Decorative gradient blobs */}
      <div className='gradient-blob w-72 h-72 bg-blue-400 top-20 -left-36' />
      <div className='gradient-blob w-96 h-96 bg-purple-400 top-96 -right-48' />

      <main className='w-9/10 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto lg:grid grid-cols-12 py-10'>
        <Sidebar />
        {/* main content */}
        <div className='flex flex-col flex-1 col-start-5 col-end-13'>
          {/* Hero Section */}
          <ScrollReveal className='mb-10'>
            <div className='flex flex-col gap-3'>
              <p className='text-accent font-medium text-sm tracking-wide uppercase'>
                Welcome to my portfolio
              </p>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight'>
                Hi, I'm <span className='gradient-text'>Brandon Chu</span>
              </h1>
              <p className='text-lg sm:text-xl text-gray-600 max-w-lg'>
                Building intuitive digital experiences with modern web
                technologies.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className='flex flex-col gap-4 mb-8'>
            <SectionHeader
              title='About'
              icon={<TbUser className='text-lg' />}
            />
            <p className='text-base leading-relaxed'>
              I am a Software Developer focused on building full-stack web
              applications. I hold a Bachelor's of Science in Computer Science
              from California State University, Sacramento.
            </p>
          </ScrollReveal>
          <ScrollReveal
            className='flex flex-col items-start gap-4 mb-8'
            delay={100}
          >
            <SectionHeader
              title='Skills'
              icon={<TbCode className='text-lg' />}
            />
            <div className='bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300'>
              <img
                src='https://skillicons.dev/icons?i=js,ts,react,nextjs,python,java,html,css,tailwind,nodejs,github,firebase,vscode&perline=7'
                alt='Skills icons'
              />
            </div>
          </ScrollReveal>
          <Experience />
          <ScrollReveal className='flex flex-col gap-4 mb-8' delay={100}>
            <SectionHeader
              title='Education'
              icon={<TbSchool className='text-lg' />}
            />
            {/* Mobile version */}
            <div className='lg:hidden bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300'>
              <div className='flex items-center gap-3'>
                <img
                  src='/csus.png'
                  alt='CSUS Logo'
                  className='h-14 w-14 flex-shrink-0 object-contain rounded-lg'
                />
                <div className='flex-1 min-w-0'>
                  <div className='pb-1'>
                    <p className='text-black font-semibold text-sm sm:text-base'>
                      California State University, Sacramento
                    </p>
                    <p className='text-xs sm:text-sm text-gray-600'>
                      Bachelor's of Science - Computer Science
                    </p>
                  </div>
                  <div className='border-t pt-1'>
                    <p className='text-xs sm:text-sm text-gray-600'>
                      Dean's Honor List 2020-2024, GPA: 3.8
                    </p>
                    <p className='text-xs sm:text-sm font-medium text-accent'>
                      Aug 2020 - Jul 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop version */}
            <div className='hidden lg:flex gap-4 items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300'>
              <div className='flex items-center gap-4'>
                <img
                  src='/csus.png'
                  alt='CSUS Logo'
                  className='h-15 w-15 rounded-lg'
                />
                <div>
                  <p className='text-black font-semibold'>
                    California State University, Sacramento
                  </p>
                  <p className='text-sm text-gray-600'>
                    Bachelor's of Science - Computer Science
                  </p>
                  <p className='text-sm text-gray-600'>
                    Dean's Honor List 2020-2024, GPA: 3.8
                  </p>
                </div>
              </div>
              <p className='text-sm font-medium text-accent'>
                Aug 2020 - Jul 2024
              </p>
            </div>
          </ScrollReveal>
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
