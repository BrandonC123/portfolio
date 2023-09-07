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
          </p>
        </div>
      </div>
      <div className="mx-auto w-[90%] max-w-[1300px] mb-[50px]">
        <section className="flex flex-col md:flex-row gap-2">
          <div className="w-[50%]">
            <h2 className="mb-2 text-2xl font-medium">About</h2>
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
