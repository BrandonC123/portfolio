import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectImageSlider from "./components/ProjectImageSlider";
import introBackground from "./img/intro-bg.png";
import githubClone from "./img/gh-home.png";
import todoList from "./img/todo-list.png";
import shoppingCart from "./img/shopping-cart.png";
import ContactContainer from "./components/ContactContainer";
import TechnologyStack from "./components/TechnologyStack";
import bg from "./img/bg.png";

function App() {
    useEffect(() => {
        document.querySelector(".intro-title").classList.add("slidein");
    });
    return (
        <>
            <Header />
            <main className="overall-content-container">
                <section className="intro-container">
                    <img src={bg} alt="" className="intro-bg" />
                    <div className="intro-content content-container">
                        <span
                            style={{ textAlign: "center" }}
                            className="intro-title title-text"
                        >
                            <h1>Hi, my name is Brandon.</h1>
                            <h2>
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
                <section className="about-container">
                    <div className="row content-container">
                        <span className="about-container-text">
                            <h1 className="title-text">About</h1>
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
                <section className="projects-container">
                    <div className="content-container">
                        <h1 className="title-text">Projects</h1>
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
                                <h2 className="title-text">GitHub Clone </h2>
                                <p>
                                    Partial clone of the GitHub website. Core
                                    implemented features include creating user
                                    accounts and repositories, file upload, and
                                    more. Feel free to visit the website and
                                    create an account or use the provided demo
                                    account to see more.
                                </p>
                                <p>
                                    Technolgies: <strong>React</strong>,{" "}
                                    <strong>JavaScript</strong>,{" "}
                                    <strong>CSS</strong>,{" "}
                                    <strong>Firebase</strong>
                                </p>
                                <a
                                    href="https://github.com/BrandonC123/github-clone"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="project-link"
                                >
                                    Repo
                                </a>{" "}
                                <a
                                    href="https://github-clone-5883f.web.app/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="project-link"
                                >
                                    Live
                                </a>
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
                                <h2 className="title-text">Todo List App </h2>
                                <p>
                                    Responsive todo list web app that tracks
                                    todos and projects. Each todo has the option
                                    to add a due date and priority level. After
                                    creation each item is saved into Cloud
                                    Firestore until deleted.
                                </p>
                                <p>
                                    Technolgies: <strong>HTML</strong>,{" "}
                                    <strong>JavaScript</strong>,{" "}
                                    <strong>CSS</strong>,{" "}
                                    <strong>Firebase</strong>
                                </p>
                                <span>
                                    <a
                                        href="https://github.com/BrandonC123/todo-list"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Repo
                                    </a>{" "}
                                    <a
                                        href="https://todo-list-f9f8d.web.app/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Live
                                    </a>
                                </span>
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
                                <h2 className="title-text">
                                    Shopping Cart App
                                </h2>
                                <p>
                                    Demo shopping cart webpage with an image
                                    slider homepage, main shop page, and view
                                    cart page.
                                </p>
                                <p>
                                    Technolgies: <strong>HTML</strong>,{" "}
                                    <strong>JavaScript</strong>,{" "}
                                    <strong>CSS</strong>,{" "}
                                </p>
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
                            </span>
                        </div>
                    </div>
                </section>
                <ContactContainer />
            </main>
        </>
    );
}

export default App;
