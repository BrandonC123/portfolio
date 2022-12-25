import { useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectImageSlider from "./components/ProjectImageSlider";
import githubClone from "./img/gh-home.png";
import todoList from "./img/todo-list.png";
import shoppingCart from "./img/shopping-cart.png";
import ContactContainer from "./components/ContactContainer";
import githubDemo from "./img/github-demo.gif";
import bg from "./img/bg.png";
import ProjectDemo from "./components/ProjectDemo";

function App() {
    const titleContainer = useRef();
    const introContainer = useRef();
    const aboutContainer = useRef();
    const projectsContainer = useRef();
    const contactContainer = useRef();

    useEffect(() => {
        titleContainer.current.classList.add("slidein");
    }, []);
    function toggleHeaderColor(e) {
        e.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".header-btn").forEach((btn) => {
                    btn.classList.remove("container-in-view");
                });
                const containerInView = entry.target;
                if (containerInView.isSameNode(introContainer.current)) {
                    document.querySelector(".header").style.backgroundColor =
                        "";
                } else if (containerInView.isSameNode(aboutContainer.current)) {
                    document.querySelector(".header").style.backgroundColor =
                        "#242424";
                    document
                        .querySelector(".about-btn")
                        .classList.toggle("container-in-view");
                } else if (
                    containerInView.isSameNode(projectsContainer.current)
                ) {
                    document.querySelector(".header").style.backgroundColor =
                        "#242424";
                    document
                        .querySelector(".projects-btn")
                        .classList.toggle("container-in-view");
                } else if (
                    containerInView.isSameNode(contactContainer.current)
                ) {
                    document.querySelector(".header").style.backgroundColor =
                        "#242424";
                    document
                        .querySelector(".contact-btn")
                        .classList.toggle("container-in-view");
                    console.log("contact");
                }
            }
        });
    }
    useEffect(() => {
        const fullThreshold = {
            threshold: 1.0,
        };
        const introObs = new IntersectionObserver(
            toggleHeaderColor,
            fullThreshold
        );
        const aboutObs = new IntersectionObserver(
            toggleHeaderColor,
            fullThreshold
        );
        const projectsObs = new IntersectionObserver(toggleHeaderColor, {
            threshold: window.innerHeight < 900 ? 0.35 : 0.75,
        });
        const contactObs = new IntersectionObserver(toggleHeaderColor, {
            threshold: 0.95,
        });
        console.log(window.innerHeight);
        introObs.observe(introContainer.current);
        aboutObs.observe(aboutContainer.current);
        projectsObs.observe(projectsContainer.current);
        contactObs.observe(contactContainer.current);
    }, []);
    return (
        <>
            <Header />
            <main className="overall-content-container">
                <section ref={introContainer} className="intro-container">
                    <img src={bg} alt="" className="intro-bg" />
                    <div className="intro-content content-container">
                        <span
                            ref={titleContainer}
                            style={{ textAlign: "center" }}
                            className="intro-title title-text"
                        >
                            <h1 className="text-3xl">
                                Hi, my name is Brandon.
                            </h1>
                            <h2 className="text-2xl">
                                I am a frontend developer majoring in Computer
                                Science.
                            </h2>
                        </span>
                        <button
                            onClick={() =>
                                document
                                    .querySelector(".about-container")
                                    .scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                        inline: "nearest",
                                    })
                            }
                            className="scroll-more-btn btn vertical-center"
                        >
                            Click to see more{" "}
                            <img
                                width={"25px"}
                                src={require("./img/down-arrow.svg").default}
                                alt=""
                            />
                        </button>
                    </div>
                </section>
                <section ref={aboutContainer} className="about-container">
                    <div className="row content-container">
                        <span className="about-container-text">
                            <h1 className="text-2xl title-text">About</h1>
                            <p>
                                Welcome to my website! Here you will find my
                                various projects as well as related links and
                                contact information.
                            </p>
                            <p>
                                I am currently looking for a web-based
                                internship opportunity. I invite you to explore
                                any of my projects and perhaps we can get in
                                touch. Thanks!
                            </p>
                        </span>
                        <ProjectImageSlider />
                    </div>
                </section>
                <section ref={projectsContainer} className="projects-container">
                    <div className="content-container">
                        <h1 className="text-2xl title-text">Projects</h1>
                        <div className="project-container">
                            <a
                                href="https://github-clone-5883f.web.app/"
                                rel="noreferrer"
                                target="_blank"
                                className="project-img-link"
                            >
                                <div className="project-container-display">
                                    <div className="project-container-backdrop "></div>
                                    <img
                                        src={githubClone}
                                        alt=""
                                        className="project-container-img"
                                    />
                                </div>
                            </a>
                            <span>
                                <h2 className="text-xl title-text">
                                    GitHub Clone
                                </h2>
                                <p>
                                    Clone of the GitHub website. Core
                                    implemented features include creating user
                                    accounts and repositories, file upload, and
                                    more. Feel free to visit the website and
                                    create an account or use the provided demo
                                    account to see more.
                                </p>
                                <p>
                                    Technologies: <strong>React</strong>,{" "}
                                    <strong>JavaScript</strong>,{" "}
                                    <strong>CSS</strong>,{" "}
                                    <strong>Firebase</strong>
                                </p>
                                <div className="flex items-center gap-2 mobile:justify-center lg:justify-start">
                                    <a
                                        href="https://github.com/BrandonC123/github-clone"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Repo
                                    </a>
                                    <a
                                        href="https://github-clone-5883f.web.app/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Live
                                    </a>
                                    <ProjectDemo demoSrc={githubDemo} />
                                </div>
                            </span>
                        </div>
                        <div className="project-container">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://todo-list-f9f8d.web.app/"
                                className="project-img-link"
                            >
                                <div className="project-container-display">
                                    <div className="project-container-backdrop "></div>
                                    <img
                                        src={todoList}
                                        alt=""
                                        className="project-container-img"
                                    />
                                </div>
                            </a>
                            <span>
                                <h2 className="text-xl title-text">
                                    Todo List App{" "}
                                </h2>
                                <p>
                                    Responsive todo list web app that tracks
                                    todos and projects. Each todo has the option
                                    to add a due date and priority level. After
                                    creation each item is saved into Cloud
                                    Firestore until deleted.
                                </p>
                                <p>
                                    Technologies: <strong>HTML</strong>,{" "}
                                    <strong>JavaScript</strong>,{" "}
                                    <strong>CSS</strong>,{" "}
                                    <strong>Firebase</strong>
                                </p>
                                <div className="flex items-center gap-2 mobile:justify-center lg:justify-start">
                                    <a
                                        href="https://github.com/BrandonC123/todo-list"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Repo
                                    </a>
                                    <a
                                        href="https://todo-list-f9f8d.web.app/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Live
                                    </a>
                                </div>
                            </span>
                        </div>
                        <div className="project-container">
                            <a
                                href="https://brandonc123.github.io/shopping-cart/"
                                rel="noreferrer"
                                target="_blank"
                                className="project-img-link"
                            >
                                <div className="project-container-display">
                                    <div className="project-container-backdrop "></div>
                                    <img
                                        src={shoppingCart}
                                        alt=""
                                        className="project-container-img"
                                    />
                                </div>
                            </a>
                            <span>
                                <h2 className="text-xl title-text">
                                    Shopping Cart App
                                </h2>
                                <p>
                                    Demo shopping cart webpage with an image
                                    slider homepage, main shop page, and view
                                    cart page.
                                </p>
                                <p>
                                    Technologies: <strong>HTML</strong>,{" "}
                                    <strong>JavaScript</strong>,{" "}
                                    <strong>CSS</strong>,{" "}
                                </p>
                                <div className="flex items-center gap-2 mobile:justify-center lg:justify-start">
                                    <a
                                        href="https://github.com/BrandonC123/shopping-cart"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Repo
                                    </a>{" "}
                                    <a
                                        href="https://brandonc123.github.io/shopping-cart/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Live
                                    </a>
                                </div>
                            </span>
                        </div>
                    </div>
                </section>
                <ContactContainer ref={contactContainer} />
            </main>
        </>
    );
}

export default App;
