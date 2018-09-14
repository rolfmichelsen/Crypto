import React from "react";
import PropTypes from "prop-types";
import CaesarCipher from "./CaesarCipher";
import "./CaesarSolver.css";


class CaesarSolver extends React.Component {

    constructor(props) {
        super(props);
        this.handleAlphabetChange = this.handleAlphabetChange.bind(this);
    }


    handleAlphabetChange(event) {
        this.props.onAlphabetChange(event.target.value);
    }


    render() {
        let solutions = [];
        const cipher = new CaesarCipher();
        cipher.ciphertext = this.props.cipher.ciphertext;
        cipher.alphabet = this.props.cipher.alphabet;
        for (let cipherkey=0; cipherkey<cipher.alphabet.length; cipherkey++) {
            cipher.key = cipherkey;
            solutions.push(
                <CaesarSolverRow key={cipherkey} cipherkey={cipherkey} selected={this.props.cipher.key === cipherkey} solution={cipher.plaintext} onKeyChange={this.props.onKeyChange} />
            );
        }
        return(
            <div>
                <div>
                    <label htmlFor="alphabet">Alphabet: </label>
                    <input name="alphabet" value={this.props.cipher.alphabet} onChange={this.handleAlphabetChange} />
                    <span>  {this.props.cipher.alphabet.length} characters</span>
                </div>
                <table className="caesarKeyTable">
                    <thead>
                        <tr  className="caesarKeyRow">
                            <th className="caesarKey">Key</th>
                            <th className="caesarKeySelect">Sel</th>
                            <th className="caesarPlaintext">Plaintext excerpt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {solutions}
                    </tbody>
                </table>
            </div>
        );
    }

}


class CaesarSolverRow  extends React.Component {


    handleKeySelected(event, key) {
        this.props.onKeyChange(key);
    }


    render() {
        return(
            <tr className="caesarKeyRow">
                <td className="caesarKey">{this.props.cipherkey}</td>
                <td className="caesarKeySelect"><input type="radio" checked={this.props.selected} onChange={(e) => this.handleKeySelected(e, this.props.cipherkey)} /></td>
                <td className="caesarPlaintext">{this.props.solution}</td>
            </tr>
        );
    }


}


CaesarSolver.propTypes = {
    cipher: PropTypes.instanceOf(CaesarCipher).isRequired,      // Caesar cipher instance
    onAlphabetChange: PropTypes.func.isRequired,                // Callback for cipher alphabet change
    onKeyChange: PropTypes.func.isRequired,                     // Callback for cipher key change
};


CaesarSolverRow.propTypes = {
    solution: PropTypes.string,         // The ciphertext to solve for
    cipherkey: PropTypes.number,        // The key, shift offset in alphabet
    selected: PropTypes.bool,           // Is this the selected solution
    onKeyChange: PropTypes.func,        // Callback for cipher key change
};


export default CaesarSolver;
