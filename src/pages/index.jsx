import {
  BusinessCenterOutlined,
  ContactMailOutlined,
  CopyrightOutlined,
  HomeOutlined,
  PersonOutlineOutlined,
  PersonPinCircleOutlined,
} from "@mui/icons-material";
import Contact from "../components/Contact";

const { default: Head } = require("next/head");

const HomePageContent = () => {
  return (
    <main data-theme='base' className='bg-base-100 flex'>
      <aside className='hidden md:block bg-base-200 xl:w-[13vw] px-2 lg:px-6 h-screen sticky top-0'>
        <div className='flex flex-col mt-10 items-center justify-center mb-4'>
          <img
            src='https://media.licdn.com/dms/image/C5603AQHpDXHAJlO2Dg/profile-displayphoto-shrink_100_100/0/1662268175900?e=1709769600&v=beta&t=XsBExfa9ulVfgYVClaA0Ht5P6iWyfSx2Vg3b5bgIC54'
            alt=''
            className='rounded-full w-14 h-14 mb-4'
          />
          <p>Brandon Chu</p>
          <p className='opacity-80'>Web Developer</p>
        </div>
        <div className='flex gap-3 justify-center items-center mb-4'>
          <a
            href='https://www.linkedin.com/in/brandon-chu-02a87b23a/'
            target='_blank'
            className='icon'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25px'
              height='25px'
              viewBox='0 0 24 24'
            >
              <path
                d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                fill='#C8CAD0'
              ></path>
            </svg>
          </a>
          <a
            href='https://github.com/BrandonC123'
            target='_blank'
            className='icon'
          >
            <svg width='25px' height='25px' viewBox='0 0 32 32'>
              <path
                d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'
                fill='#C8CAD0'
              ></path>
            </svg>
          </a>
        </div>
        <div className='flex flex-col items-center xl:items-stretch'>
          <button className='flex items-center hover:bg-base-100 gap-3 p-2 rounded-lg'>
            <HomeOutlined />
            <span className='hidden xl:block'>Home</span>
          </button>
          <button className='flex items-center hover:bg-base-100 gap-3 p-2 rounded-lg'>
            <PersonOutlineOutlined />
            <span className='hidden xl:block'>About</span>
          </button>
          <button className='flex items-center hover:bg-base-100 gap-3 p-2 rounded-lg'>
            <BusinessCenterOutlined />
            <span className='hidden xl:block'>Projects</span>
          </button>
          <button className='flex items-center hover:bg-base-100 gap-3 p-2 rounded-lg'>
            <ContactMailOutlined />
            <span className='hidden xl:block'>Contact</span>
          </button>
        </div>
      </aside>
      <div className='w-[85vw] lg:w-[60vw] xl:w-[50vw] mx-auto'>
        <section id='home' className='mt-[100px] mb-[75px]'>
          <div className='mb-4'>
            <h1 className='text-4xl font-semibold mb-2'>
              Hello my name is Brandon Chu. <br />
            </h1>
            <p className='opacity-80 font-semibold text-4xl'>
              Full-Stack Web Developer
            </p>
          </div>
          <p className='text-xl flex items-center gap-3 mb-4'>
            <PersonPinCircleOutlined
              style={{ fontSize: "2rem" }}
              className='text-primary'
            />
            Sacramento, California
          </p>
          <p className='text-lg'>
            Results-driven Computer Science senior with proven work in
            foundational web technologies. Eager to join a team as a full-time
            web developer, leveraging quick learning abilities and passion for
            technology to build innovative web solutions that engage users and
            deliver business results.
          </p>
        </section>
        <section id='about' className='mb-[75px]'>
          <h2 className='text-3xl font-medium mb-4'>About</h2>
          <div className='text-lg mb-4'>
            <p>
              Welcome to my website! Here you will find my various projects as
              well as related links and contact information. The projects
              include personal and academic based projects.
            </p>
            <p>
              My primary focus is Full-Stack Web Development. I have deployed
              multiple projects using technologies including React, Node,
              Express and Firebase.
            </p>
            <p>
              At my most recent position I have leveraged the above to
              contribute in creating a SaaS focused around AI technologies using
              services like{" "}
              <a href='https://replicate.com/' target='_blank' className='link'>
                Replicate
              </a>
              ,{" "}
              <a href='https://stability.ai/' target='_blank' className='link'>
                Stable Diffusion
              </a>{" "}
              and{" "}
              <a
                href='https://openai.com/blog/openai-api'
                target='_blank'
                className='link'
              >
                OpenAI
              </a>{" "}
              (Chat GPT-4, DALL-E, & Whisper).
            </p>
          </div>
          <div>
            <h3 className='text-xl font-medium pt-4 mb-2'>Education</h3>
            <div className='flex gap-4'>
              <p>2020 - May 2024</p>
              <div>
                <p className='text-lg'>
                  <span className='font-semibold'>
                    California State University, Sacramento
                  </span>{" "}
                  <br />
                  Bachelor of Science in Computer Science - Dean's Honor List
                  2020-2024, GPA: 3.8
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <section id='projects' className='mb-[75px]'>
          <h2 className='text-3xl font-medium mb-4'>Key Projects</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div>
              <div className='relative mb-2'>
                <img
                  src='/assets/images/projects/imageapp-home.webp'
                  alt=''
                  className='rounded-lg'
                />
                <p className='absolute bg-base-200 font-medium text-sm bottom-0 right-0 p-1 rounded-tl-md'>
                  Full-Stack Developer @ Image App
                </p>
              </div>
              <h4 className='font-medium text-lg'>
                Image App <br />
                React TypeScript, Tailwind, Node, Express, Firebase
              </h4>
              <p>
                SaaS platform focused around AI generative technology
                integrating services like image generation & LLMs.
              </p>
            </div>
            <div>
              <div className='relative mb-2'>
                <img
                  src='/assets/images/projects/gh-home.png'
                  alt=''
                  className='rounded-lg'
                />
                <p className='absolute bg-base-200 font-medium text-sm bottom-0 right-0 p-1 rounded-tl-md'>
                  Personal Project
                </p>
              </div>
              <h4 className='font-medium text-lg'>
                GitHub Clone <br />
                React & Firebase (Auth, Hosting, DB)
              </h4>
              <p>
                A GitHub clone featuring repository creation, secure user
                authentication via Firebase, and file upload capabilities.
              </p>
            </div>
            <div>
              <div className='relative mb-2'>
                <img
                  src='/assets/images/projects/video.png'
                  alt=''
                  className='rounded-lg'
                />
                <p className='absolute bg-base-200 font-medium text-sm bottom-0 right-0 p-1 rounded-tl-md'>
                  @ CSUS - CSC Senior Project
                </p>
              </div>
              <h4 className='font-medium text-lg'>
                Web Conferencing App (Ongoing) <br /> Vue, Node, FaunaDB, WebRTC
              </h4>
              <p>
                Video conferencing application with a focus on client specific
                requests including specialized breakout rooms and video primers.
              </p>
            </div>
            <div>
              <div className='relative mb-2'>
                <img
                  src='/assets/images/projects/form-creator.png'
                  alt=''
                  className='rounded-lg'
                />
                <p className='absolute bg-base-200 font-medium text-sm bottom-0 right-0 p-1 rounded-tl-md'>
                  @ CSUS - CSC 131
                </p>
              </div>
              <h4 className='font-medium text-lg'>
                Form Creator Application <br /> React & Springboot
              </h4>
              <p>
                A Drupal-like application which allows for form creation,
                retrieval, and display of various form responses. It also
                enables users to share forms conveniently through dynamic links.
              </p>
            </div>
          </div>
        </section>
        <section id='contact' className='mb-14'>
          <h2 className='text-3xl font-medium mb-2'>Contact</h2>
          <Contact />
        </section>
        <footer className='py-6 border-t border-opacity-30 border-base-content'>
          <p className='opacity-80 flex items-center justify-end gap-1 text-lg'>
            <CopyrightOutlined /> 2024 Brandon Chu
          </p>
        </footer>
      </div>
    </main>
  );
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Brandon's Portfolio</title>
        <meta
          property='description'
          content="View my latest projects and contact information. Let's connect!"
        />
        <meta property='og:title' content="Brandon's Portfolio" />
        <meta
          property='og:description'
          content="View my latest projects and contact information. Let's connect!"
        />
        <meta property='og:image' content='https://iili.io/J7YV1lp.jpg' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='1200' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:src' content='https://iili.io/J7YV1lp.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Brandon's Portfolio" />
        <meta
          name='twitter:description'
          content="View my latest projects and contact information. Let's connect!"
        />
        <link rel='canonical' href='https://brandonchu.dev' />
      </Head>
      <HomePageContent />
    </>
  );
};

export default HomePage;
