import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

export default function Home() {
  return (
    <div>
      <main className='max-w-4xl mx-auto flex'>
        {/* Left sidebar */}
        <div className='flex flex-col gap-4 pr-4'>
          <div className='p-2 rounded bg-white shadow flex flex-col gap-2'>
            <img
              src='/IMG_4999.jpeg'
              alt=''
              className='w-40 h-40 rounded mx-auto'
            />
            <div>
              <h3 className='font-semibold'>Brandon Chu</h3>
              <p className='font-semibold'>Software Developer</p>
              <p className='text-sm'>Open to work</p>
              <div className='flex'>
                <p className='text-sm'>Sacramento, California</p>
              </div>
            </div>
          </div>
          <div className='p-2 rounded bg-white shadow flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
              <TbBrandLinkedin />
              <a href='' className='text-sm'>
                Linkedin
              </a>
            </div>
            <div className='flex gap-2 items-center'>
              <TbBrandGithub />
              <a href='' className='text-sm'>
                GitHub
              </a>
            </div>
            <div className='flex gap-2 items-center'>
              <TbMail /> <p className='text-sm'>brandonchu@gmail.com</p>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className='flex flex-col flex-1'>
          <div>
            <h3>About</h3>
            <p>
              Hi, my name is Brandon. I am a Software Developer focused on
              building full-stack web applications. I hold a Bachelor's of
              Science in Computer Science from California State University,
              Sacramento.
            </p>
          </div>
          <div>
            <h3>Skills</h3>
          </div>
          <div>
            <h3>Experience</h3>
          </div>
          <div>
            <h3>Education</h3>
          </div>
          <div>
            <h3>Projects</h3>
          </div>
          <div>
            <h3>Contact</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
