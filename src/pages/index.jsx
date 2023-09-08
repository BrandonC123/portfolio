import ProjectCarousel from "../components/ProjectCarousel";
import SlowText from "../components/SlowText";

const { default: Head } = require("next/head");

const HomePageContent = () => {
  return (
    <main>
      <div className="relative mb-[2rem]">
        <img
          src="/assets/images/homepage-bg.jpeg"
          alt=""
          className="w-[100vw] h-[100vh] opacity-40 object-cover"
        />
        <div className="absolute top-1/2 -translate-y-[50%] right-1/2 translate-x-[50%]">
          <p className="text-4xl mb-2 font-semibold">
            <SlowText text={"Hello my name is Brandon Chu."} speed={40} />
          </p>
          <p className="text-lg">
            <SlowText
              text={
                "I am currently a Computer Science major at California State University, Sacramento."
              }
              speed={40}
            />
            <span className="text-transparent invisible">
              I am currently a Computer Science major at California State
              University, Sacramento.
            </span>
          </p>
        </div>
      </div>
      <div className="mx-auto w-[90%] max-w-[1300px] mb-[50px]">
        <section className="flex flex-col md:flex-row gap-2">
          <div className="w-[50%]">
            <h2 className="mb-2 text-2xl font-semibold text-secondary">
              About
            </h2>
            <p className="text-md lg:text-lg mb-2">
              Welcome to my website! Here you will find my various projects as
              well as related links and contact information. The projects were
              include personal and academic based projects.
            </p>
            <p className="text-md lg:text-lg mb-2">
              My primary focus is Frontend Web Development as well as continuing
              to learn Full-Stack Development. I have deployed multiple projects
              utilizing technologies including React, Node, Express and
              Firebase.
            </p>
            <p className="text-md lg:text-lg">
              Most recently I have leveraged the above to create an AI image
              generation platform with the latest image models using services
              like Stable Diffusion and OpenAI's APIs (Chat GPT-4 & DALL-E).
            </p>
          </div>
          <ProjectCarousel />
        </section>
        <div class="my-8 w-full max-w-md mx-auto">
          <hr class="border-t border-base-content" />
        </div>
        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            Key Projects
          </h2>
          <ul className="flex flex-col gap-[2rem]">
            <li className="flex flex-col justify-between md:flex-row">
              <div className="w-[40%]">
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
                  <li>Image generation from 20+ models</li>
                  <li>User authentication</li>
                  <li>AI image model training</li>
                  <li>Subscription based payment using Stripe</li>
                  <li>Image editing</li>
                </ul>
                <p className="mb-1">
                  Technologies: React (Next.js), JavaScript, CSS, Tailwind,
                  Firebase
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
                className="w-[55%] shadow-accent rounded-md"
              />
            </li>
            <li className="flex flex-col justify-between md:flex-row">
              <div className="w-[40%]">
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
                  Visit the website and create an account or use the provided
                  demo account to see more.
                </p>
                <p className="mb-1">
                  Technologies: React (Create React App), JavaScript, CSS,
                  Firebase
                </p>
                <a
                  href=""
                  target="_blank"
                  className="text-accent underline font-bold"
                >
                  Visit the site
                </a>
              </div>
              <img
                src="/assets/images/ex-images/gh-home.png"
                alt=""
                className="w-[55%] rounded-md"
              />
            </li>
            <li className="flex flex-col justify-between md:flex-row">
              <div className="w-[40%]">
                <h3 className="text-xl mb-2 font-medium text-primary">
                  Form Creator App (Academic Project)
                </h3>
                <p className="mb-1">
                  Client requested project: A Drupal like form creator
                  application. This project also included regular meetings with
                  the client for updates and requirement gathering.
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
                src="/assets/images/ex-images/gh-home.png"
                alt=""
                className="w-[55%] rounded-md"
              />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

const HomePage = () => {
  return (
    <>
      <Head></Head>
      <HomePageContent />
    </>
  );
};

export default HomePage;
