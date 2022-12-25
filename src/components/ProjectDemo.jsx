import { useState } from "react";

const ProjectDemo = ({ demoSrc }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button
                onClick={() => {
                    setShow(true);
                }}
                className="demo-btn"
            >
                Demo
            </button>
            {show && (
                <div className="demo-proj-gif ">
                    <button
                        className="demo-btn absolute top-0 right-0"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        X
                    </button>
                    <img src={demoSrc} alt="" />
                </div>
            )}
        </>
    );
};

export default ProjectDemo;
