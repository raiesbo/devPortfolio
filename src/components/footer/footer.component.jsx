import React from "react";
import Fade from 'react-reveal/Fade';


const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="footer-container">
                <Fade cascade>
                    <div className="icons">
                        <a href="https://github.com/raiesbo" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github fa-lg"></i></a>
                        <a href="https://codepen.io/raiesbo" target="_blank" rel="noreferrer" title="CodePen"><i className="fab fa-codepen fa-lg"></i></a>
                        <a href="https://www.freecodecamp.org/raiesbo" target="_blank" rel="noreferrer" title="freeCodeCamp"><i className="fab fa-free-code-camp fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/raiesbo/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in fa-lg"></i></a>
                        <a href="https://archive.raiesbo.com/" target="_blank" rel="noreferrer" title="Archive"><i className="fas fa-archive"></i></a>
                        <a href="https://raiesbo.com/" target="_blank" rel="noreferrer" title="Portfolio"><i className="far fa-file fa-lg"></i></a>
                    </div>
                </Fade>
                <Fade >
                    <h5>
                        Built and Designed with <span>React, react-reveal, Scss</span> by <br />
                        <a href="https://raiesbo.com/" title="personal website" target="_blank" rel="noreferrer"><span className="enfas">raiesbo</span></a>
                    </h5>
                </Fade>
            </div>
        </footer>
    )
}



export default Footer;