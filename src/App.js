import { useEffect } from "react";
import "./App.css";
import ProjectImageSlider from "./ProjectImageSlider";
import githubClone from "./img/home.png";

function App() {
    useEffect(() => {
        document.querySelector(".intro-title").classList.add("slidein");
    });
    return (
        <>
            <header className="header">
                <nav className="header-nav container">
                    <a href="" className="header-link">
                        Home
                    </a>
                    <a href="#" className="header-link">
                        About
                    </a>
                    <a href="" className="header-link">
                        Contact
                    </a>
                </nav>
            </header>
            <main className="overall-content-container">
                <section className="intro-container">
                    <img
                        src={require("./img/intro-bg.png")}
                        alt=""
                        className="intro-bg"
                    />
                    <div className="intro-content content-container">
                        <span className="intro-title">
                            <h1>Hi, my name is Brandon.</h1>
                            <h2>
                                I am a frontend developer majoring in Computer
                                Science.
                            </h2>
                        </span>
                        <button
                            onClick={() => console.log("t")}
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
                    <div className="content-container">
                        <span>
                            <h1>About</h1>
                            <p>
                                Welcome to my website! Here you will find my
                                various projects as well as related links and
                                contact information.
                            </p>
                            <p>
                                I am currently looking for a web-based
                                internship position. I invite you to explore any
                                of my projects and perhaps we can get in touch.
                                Thanks!
                            </p>
                        </span>
                        <ProjectImageSlider />
                    </div>
                </section>
                <section className="projects-container">
                    <div className="content-container">
                        <h1>Projects</h1>
                        <div className="project-container">
                            <div className="project-container-display">
                                <div className="project-container-backdrop "></div>
                                {/* <svg className="project-container-backdrop">
                                    <rect width="100%" height="100%" />
                                </svg> */}
                                <img
                                    src={githubClone}
                                    alt=""
                                    className="project-container-img"
                                />
                            </div>
                            <span>
                                <h2>
                                    GitHub Clone{" "}
                                    <a
                                        href="https://github.com/BrandonC123/github-clone"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Repo
                                    </a>{" "}
                                    <a
                                        href="https://github-clone-5883f.web.app/"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Live
                                    </a>
                                </h2>
                                <p>
                                    Partial clone of the GitHub website. <br />{" "}
                                    Core implemented features include creating
                                    user accounts and repositories, file upload,
                                    and more. Please visit the website and
                                    create an account or use the provided demo
                                    account to see more.
                                </p>
                            </span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
