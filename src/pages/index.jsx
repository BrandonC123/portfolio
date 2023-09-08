import ProjectCarousel from "../components/ProjectCarousel";
import SlowText from "../components/SlowText";
import Contact from "../components/Contact";

const { default: Head } = require("next/head");

const HomePageContent = () => {
  return (
    <main className="mb-[75px]">
      <div className="relative">
        <img
          src="/assets/images/homepage-bg.jpeg"
          alt=""
          className="w-[100vw] h-[100vh] opacity-40 object-cover"
        />
        <div className="absolute min-w-[350px] max-md:text-center top-1/2 -translate-y-[50%] right-1/2 translate-x-[50%]">
          <p className="text-4xl mb-2 font-semibold">
            <SlowText text={"Hello my name is Brandon Chu."} speed={50} />
          </p>
          <p className="text-lg">
            <SlowText
              text={
                "I am currently a Computer Science major at California State University, Sacramento."
              }
              speed={50}
            />
            <span className="text-transparent invisible">
              I am currently a Computer Science major at California State
              University, Sacramento.
            </span>
          </p>
        </div>
      </div>
      <div class="my-8 w-full max-w-md mx-auto">
        <hr class="border-t border-base-content" />
      </div>
      <div className="mx-auto w-[90%] max-w-[1100px] mb-[50px]">
        <section className="text-center md:text-left">
          <h2 className="mb-2 text-2xl font-semibold text-secondary">About</h2>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-[50%]">
              <p className="text-md mb-2">
                Welcome to my website! Here you will find my various projects as
                well as related links and contact information. The projects
                include personal and academic based projects.
              </p>
              <p className="text-md mb-2">
                My primary focus is Frontend Web Development as well as
                continuing to learn Full-Stack Development. I have deployed
                multiple projects using technologies including React, Node,
                Express and Firebase.
              </p>
              <p className="text-md">
                Most recently I have leveraged the above to contribute in
                creating an AI image generation platform with using services
                like Stable Diffusion and OpenAI's APIs (Chat GPT-4 & DALL-E,
                Whisper).
              </p>
              <div>
                <p className="mb-2 text-lg font-semibold">Let's connect!</p>
                <div className="flex gap-[2rem] max-md:justify-center">
                  <a
                    href="https://www.linkedin.com/in/brandon-chu-02a87b23a/"
                    rel="noreferrer"
                    target="_blank"
                    className="contact-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        fill="#C8CAD0"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/BrandonC123"
                    rel="noreferrer"
                    target="_blank"
                    className="contact-link"
                  >
                    <svg width="32px" height="32px" viewBox="0 0 32 32">
                      <path
                        d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
                        fill="#C8CAD0"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-[50%]">
              <ProjectCarousel />
            </div>
          </div>
        </section>
        <div class="my-8 w-full max-w-md mx-auto">
          <hr class="border-t border-base-content" />
        </div>
        <section className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            Key Projects
          </h2>
          <ul className="flex flex-col gap-[2rem]">
            <li className="flex flex-col gap-3 lg:hover:shadow lg:hover:shadow-primary justify-between md:flex-row bg-base-200 rounded-md p-[1.5rem]">
              <div className="md:w-[40%]">
                <h3 className="text-xl mb-2 font-medium text-primary">
                  Image App
                </h3>
                <p className="mb-1">
                  Core contributor (team of 4) of a full-stack AI image
                  generation and model training platform. Over 1,500 unique
                  visitors.
                </p>
                <p>Key implemented features include:</p>
                <ul className="list-disc mb-1 list-inside">
                  <li>AI image generation & model training</li>
                  <li>User authentication</li>
                  <li>Subscription based payment using Stripe</li>
                  <li>Image editing</li>
                </ul>
                <p className="mb-1">
                  Technologies: React (Next.js), JavaScript Tailwind, Firebase
                </p>
                <a
                  href="https://imageapp.xyz"
                  target="_blank"
                  className="text-accent underline font-bold"
                >
                  Visit the site
                </a>
              </div>
              <img
                src="/assets/images/ex-images/imageapp-light.png"
                alt=""
                className="md:w-[55%] shadow-accent rounded-md"
              />
            </li>
            <li className="flex flex-col gap-3 lg:hover:shadow lg:hover:shadow-primary justify-between md:flex-row bg-base-200 rounded-md p-[1.5rem]">
              <div className="md:w-[40%]">
                <h3 className="text-xl mb-2 font-medium text-primary">
                  Github Clone
                </h3>
                <p className="mb-1">Clone of the GitHub website.</p>
                <p>Key implemented features include:</p>
                <ul className="list-disc mb-1 list-inside">
                  <li>Creating repositories</li>
                  <li>User authentication via Firebase</li>
                  <li>File upload</li>
                </ul>
                <p className="mb-1">
                  Technologies: React (Create React App), JavaScript, CSS,
                  Firebase
                </p>
                <a
                  href="https://github-clone-5883f.web.app/"
                  target="_blank"
                  className="text-accent underline font-bold"
                >
                  Visit the site
                </a>
              </div>
              <img
                src="/assets/images/ex-images/gh-home.png"
                alt=""
                className="md:w-[55%] rounded-md"
              />
            </li>
            <li className="flex flex-col gap-3 lg:hover:shadow lg:hover:shadow-primary justify-between md:flex-row bg-base-200 rounded-md p-[1.5rem]">
              <div className="md:w-[40%]">
                <h3 className="text-xl mb-2 font-medium text-primary">
                  Form Creator App (Academic Project)
                </h3>
                <p className="mb-1">
                  Client requested project: A Drupal like form creator
                  application. (Team of 7)
                </p>
                <p>Key implemented features include:</p>
                <ul className="list-disc mb-1 list-inside">
                  <li>Form creation</li>
                  <li>Fetching and viewing different form responses</li>
                  <li>Sharing forms via a dynamic link</li>
                </ul>
                <p className="mb-1">
                  Technologies: React (Create React App), JavaScript, CSS,
                  Springboot
                </p>
              </div>
              <img
                src="/assets/images/ex-images/form-creator.png"
                alt=""
                className="md:w-[55%] rounded-md"
              />
            </li>
          </ul>
        </section>
      </div>
      <div class="my-8 w-full max-w-md mx-auto">
        <hr class="border-t border-base-content" />
      </div>
      <Contact />
    </main>
  );
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Brandon's Portfolio</title>
        <meta
          property="description"
          content="View my latest projects and contact information. Let's connect!"
        />
        <meta property="og:title" content="Brandon's Portfolio" />
        <meta
          property="og:description"
          content="View my latest projects and contact information. Let's connect!"
        />
        <meta property="og:image" content="https://iili.io/J9WNNhN.md.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:src"
          content="https://iili.io/J9WNNhN.md.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brandon's Portfolio" />
        <meta
          name="twitter:description"
          content="View my latest projects and contact information. Let's connect!"
        />
        <link rel="canonical" href="https://brandonchu.dev" />
      </Head>
      <HomePageContent />
    </>
  );
};

export default HomePage;
