import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <main className='max-w-4xl mx-auto grid grid-cols-12 py-10'>
        <Sidebar />
        {/* main content */}
        <div className='flex flex-col flex-1 col-start-5 col-end-13'>
          <div className='flex flex-col gap-4 mb-6'>
            <h3 className='text-black border-b self-start'>About</h3>
            <p>
              Hi, my name is Brandon. I am a Software Developer focused on
              building full-stack web applications. I hold a Bachelor's of
              Science in Computer Science from California State University,
              Sacramento.
            </p>
            <p></p>
          </div>
          <div className='flex flex-col items-start gap-4 mb-6'>
            <h3 className='text-black border-b'>Skills</h3>
            <div className='bg-white p-4 rounded-lg shadow'>
              <img
                src='https://skillicons.dev/icons?i=js,ts,react,nextjs,python,java,html,css,tailwind,nodejs,github,firebase,vscode&perline=7'
                alt=''
              />
            </div>
          </div>
          <Experience />
          <div className='flex flex-col gap-4 mb-6'>
            <h3 className='text-black border-b self-start'>Education</h3>
            <div className='flex gap-4 items-center justify-between bg-white p-4 rounded-lg shadow mb-4'>
              <div className='flex items-center gap-4'>
                <img src='/csus.png' alt='' className='h-15 w-15' />
                <div>
                  <p className='text-black'>
                    California State University, Sacramento
                  </p>
                  <p className='text-sm'>
                    Bachelor's of Science - Computer Science
                  </p>
                  <p className='text-sm'>
                    Dean's Honor List 2020-2024, GPA: 3.8
                  </p>
                </div>
              </div>
              <p className='text-sm'>Aug 2020-Jul 2024</p>
            </div>
          </div>
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
