const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav container">
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
                    className="header-btn"
                >
                    Home
                </button>
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
                    className="header-btn"
                >
                    About
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
                    className="header-btn"
                >
                    Contact
                </button>
            </nav>
        </header>
    );
};

export default Header;
