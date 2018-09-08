import React from "react";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import CaesarSolver from "./CaesarSolver";
import "./App.css";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Monoalphabetic Substitution</h1>
                <div className="messagepane">
                    <TextInput className="leftMessage" caption="Ciphertext" value="Enter some text..." />
                    <TextOutput className="rightMessage" caption="Plaintext" value="Result goes here..." />
                </div>
                <CaesarSolver ciphertext="lorem ipsum" alphabet="abcdefghijklmnopqrstuvwxyz" cipherkey={3} />
            </div>
        );
    }
}

export default App;
