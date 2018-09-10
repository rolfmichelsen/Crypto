import React from "react";
import PropTypes from "prop-types";
import CaesarCipher from "./CaesarCipher";


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
        cipher.ciphertext = this.props.ciphertext;
        cipher.alphabet = this.props.alphabet;
        for (let cipherkey=0; cipherkey<this.props.alphabet.length; cipherkey++) {
            cipher.cipherkey = cipherkey;
            solutions.push(
                <CaesarSolverRow key={cipherkey} cipherkey={cipherkey} selected={this.props.cipherkey === cipherkey} solution={cipher.plaintext} onKeyChange={this.props.onKeyChange} />
            );
        }
        return(
            <fieldset>
                <legend>Caesar solver</legend>
                <div>
                    <label htmlFor="alphabet">Alphabet: </label>
                    <input name="alphabet" value={this.props.alphabet} onChange={this.handleAlphabetChange} />
                    <span>  {this.props.alphabet.length} characters</span>
                </div>
                {solutions}
            </fieldset>
        );
    }

}


class CaesarSolverRow  extends React.Component {


    handleKeySelected(event, key) {
        this.props.onKeyChange(key);
    }


    render() {
        return(
            <div>
                <span>{this.props.cipherkey}</span>
                <span><input type="radio" checked={this.props.selected} onChange={(e) => this.handleKeySelected(e, this.props.cipherkey)} /></span>
                <span>{this.props.solution}</span>
            </div>
        );
    }


}


CaesarSolver.propTypes = {
    ciphertext: PropTypes.string,       // The ciphertext to solve for
    alphabet: PropTypes.string,         // The alphabet to use
    cipherkey: PropTypes.number,        // The key, shift offset in alphabet
    onAlphabetChange: PropTypes.func,   // Callback for cipher alphabet change
    onKeyChange: PropTypes.func,        // Callback for cipher key change
};


CaesarSolverRow.propTypes = {
    solution: PropTypes.string,         // The ciphertext to solve for
    cipherkey: PropTypes.number,        // The key, shift offset in alphabet
    selected: PropTypes.bool,           // Is this the selected solution
    onKeyChange: PropTypes.func,        // Callback for cipher key change
};


export default CaesarSolver;
