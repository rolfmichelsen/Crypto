import React from "react";
import PropTypes from "prop-types";


class CaesarSolver extends React.Component {


    render() {
        let solutions = [];
        for (let i=0; i<this.props.alphabet.length; i++) {
            solutions.push(
                <CaesarSolverRow cipherkey={i} selected={false} solution={this.props.ciphertext} />
            );
        }
        return(
            <fieldset>
                <legend>Caesar solver</legend>
                <div>
                    <label htmlFor="alphabet">Alphabet: </label>
                    <input name="alphabet" value={this.props.alphabet} />
                    <span>  {this.props.alphabet.length} characters</span>
                </div>
                {solutions}
            </fieldset>
        );
    }

}


class CaesarSolverRow  extends React.Component {

    render() {
        return(
            <div>
                <span>{this.props.cipherkey}</span>
                <span><input type="radio" checked={this.props.selected} /></span>
                <span>{this.props.solution}</span>
            </div>
        );
    }


}


CaesarSolver.propTypes = {
    ciphertext: PropTypes.string,       // The ciphertext to solve for
    alphabet: PropTypes.string,         // The alphabet to use
    cipherkey: PropTypes.number,        // The key, shift offset in alphabet
};


CaesarSolverRow.propTypes = {
    solution: PropTypes.string,         // The ciphertext to solve for
    cipherkey: PropTypes.number,        // The key, shift offset in alphabet
    selected: PropTypes.bool,           // Is this the selected solution
};


export default CaesarSolver;
