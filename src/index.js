import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import Anime from './gsap';
import Aos from 'aos';
import "aos/dist/aos.css";

import "./styles.css";

function App(){
    
    useEffect(() => {
        Aos.init({
            
            duration: 2000
        
        });
    }, [])

    
    



    const [darkMode, setDarkMode] = React.useState(getInitialmode());
    React.useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode))
    }, [darkMode])

    function getInitialmode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPrefersDark = getPrefColorScheme();

        // if mode was saved -> dark / light
        if(isReturningUser) {
            return savedMode;
        // if preferred color scheme is dark -> dark

        } else if (userPrefersDark) {
            return true;
        // otherwise -< light

        } else {
            return false;
        }

    }
    
    function getPrefColorScheme() {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    

    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <nav>
                <div className="toggle-container">
                    <span style={{color: darkMode ? "grey": "yellow" }}>*</span>
                    <span className="toggle">
                        <input
                            checked={darkMode}
                            onChange={() => setDarkMode(prevMode => !prevMode)}
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                        />
                        <label htmlFor="checkbox"/>
                    </span>
                    <span style={{ color: darkMode ? "slateblue" : "grey" }}>(</span>
                </div>
            </nav>
            <main>
                <h1>{darkMode ? "dark mode" : "Light mode"}</h1>
                <h2>Toggle the switch to see some magic happen!</h2>

                <div className="boxes" style={{ height: '30vh', background: darkMode ? "green" : "#666", color: darkMode ? "white" : "#000" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </div>

                <div className="boxes" style={{ height: '30vh', background: darkMode ? "green" : "#666", color: darkMode ? "white" : "#000" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </div>

                <div data-aos="fade-up" className="boxes" style={{ height: '30vh', background: darkMode ? "green" : "#666", color: darkMode ? "white" : "#000" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </div>

                <div data-aos="fade-right" className="boxes" style={{ height: '30vh', background: darkMode ? "green" : "#666", color: darkMode ? "white" : "#000" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </div>
                <div data-aos="flip-up" className="boxes" style={{ height: '30vh', background: darkMode ? "green" : "#666", color: darkMode ? "white" : "#000" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </div>
            </main>
            
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Anime />, rootElement);
