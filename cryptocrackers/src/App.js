import React from "react";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import CaesarSolver from "./CaesarSolver";
import CaesarCipher from "./CaesarCipher";
import "./App.css";


class App extends React.Component {

    constructor(props) {
        super(props);

        const cipher = new CaesarCipher();
        cipher.ciphertext = "Type some text...";

        this.state = {
            cipher: cipher,
        };

        this.handleCiphertextChange = this.handleCiphertextChange.bind(this);
        this.handleCipherAlphabetChange = this.handleCipherAlphabetChange.bind(this);
        this.handleCipherKeyChange = this.handleCipherKeyChange.bind(this);
    }


    handleCiphertextChange(text) {
        this.setState((state) => {
            state.cipher.ciphertext = text;
            return ({cipher: state.cipher });
        });
    }


    handleCipherAlphabetChange(text) {
        this.setState((state) => {
            state.cipher.alphabet = text;
            return ({cipher: state.cipher});
        });
    }


    handleCipherKeyChange(cipherkey) {
        this.setState((state) => {
            state.cipher.cipherkey = cipherkey;
            return ({cipher: state.cipher});
        });
    }


    render() {
        const cipher = this.state.cipher;
        return (
            <div className="App">
                <h1>Monoalphabetic Substitution</h1>
                <div className="messagepane">
                    <TextInput className="leftMessage" caption="Ciphertext" value={cipher.ciphertext} onTextChange={this.handleCiphertextChange} />
                    <TextOutput className="rightMessage" caption="Plaintext" value={cipher.plaintext} />
                </div>
                <CaesarSolver ciphertext={cipher.ciphertext} alphabet={cipher.alphabet} cipherkey={cipher.cipherkey} onAlphabetChange={this.handleCipherAlphabetChange} onKeyChange={this.handleCipherKeyChange} />
            </div>
        );
    }
}

export default App;
