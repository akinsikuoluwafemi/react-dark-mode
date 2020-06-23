import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App()
{
    return (
        <div className="light-mode">
            <nav>Toggle Goes Here</nav>
            <main>
                <h1>"Light Mode"</h1>
                <h2>Toggle the switch to see some magic happen!</h2>
            </main>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
