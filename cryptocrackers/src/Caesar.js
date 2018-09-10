import React from "react";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import CaesarSolver from "./CaesarSolver";
import CaesarCipher from "./CaesarCipher";
import "./App.css";


class Caesar extends React.Component {

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
                <h1>Caesar</h1>
                <p>The Caesar cipher is a special case of the monoalphabetic substitution cipher.  It works by replacing each character
                    in the plaintext with a cipher alphabet constructed by shifting the plaintext alphabet by three positions.  In this way
                    &#34;a&#34; is encrypted as &#34;d&#34;, &#34;b&#34; is encrypted as &#34;e&#34; and so on.  The key is fixed for all
                    messages.</p>
                <p>This application provides a more generalized Caesar cipher where the key, number of positions to shift the alphabet,
                    can be changed.  For this to work, the alphabet must be known.  Another well known instance of this class of ciphers is
                    ROT-13, where the alphabet is shifted 13 places.  This means that encryption and decryption becomes the same operation
                    for the English alphabet of 26 letters.</p>
                <div className="messagepane">
                    <TextInput className="leftMessage" caption="Ciphertext" value={cipher.ciphertext} onTextChange={this.handleCiphertextChange} />
                    <TextOutput className="rightMessage" caption="Plaintext" value={cipher.plaintext} />
                </div>
                <CaesarSolver ciphertext={cipher.ciphertext} alphabet={cipher.alphabet} cipherkey={cipher.cipherkey} onAlphabetChange={this.handleCipherAlphabetChange} onKeyChange={this.handleCipherKeyChange} />
            </div>
        );
    }
}

export default Caesar;
