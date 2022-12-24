const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <button
                    onClick={() => {
                        document
                            .querySelector(".intro-container")
                            .scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "nearest",
                            });
                    }}
                    className="img-btn"
                >
                    <img
                        src={require("../img/logo.png")}
                        alt=""
                        className="header-logo"
                    />
                </button>
                <nav className="header-nav container">
                    <button
                        onClick={() => {
                            document
                                .querySelector(".about-container")
                                .scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "nearest",
                                });
                        }}
                        className="about-btn header-btn"
                    >
                        About
                    </button>
                    <button
                        onClick={() => {
                            document
                                .querySelector(".projects-container")
                                .scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "nearest",
                                });
                        }}
                        className="projects-btn header-btn"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => {
                            document
                                .querySelector(".contact-container")
                                .scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "nearest",
                                });
                        }}
                        className="contact-btn header-btn"
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
