import React from "react";
import PropTypes from "prop-types";
import CipherSolver from "./CipherSolver";
import SubstitutionCipher from "./SubstitutionCipher";
import "./Substitution.css";


class Substitution extends React.Component {

    constructor(props) {
        super(props);

        const cipher = new SubstitutionCipher();
        cipher.ciphertext = "Enter some text...";

        this.state = {
            cipher: cipher,
        };

        this.handleCiphertextChange = this.handleCiphertextChange.bind(this);
        this.handleCipherkeyChange = this.handleCipherkeyChange.bind(this);
    }


    handleCiphertextChange(text) {
        this.setState((state) => {
            const cipher = state.cipher;
            cipher.ciphertext = text;
            return ({
                cipher: cipher,
            });
        });
    }


    handleCipherkeyChange(key) {
        this.setState((state) => {
            const cipher = state.cipher;
            cipher.key = key;
            return ({
                cipher: cipher,
            });
        });
    }


    render() {
        return (
            <CipherSolver
                cipherName="Substition cipher"
                cipherText={<p>bla bla bla...</p>}
                cipherSolver={<SubstitutionSolver cipher={this.state.cipher} onCipherKeyChange={this.handleCipherkeyChange} />}
                cipher={this.state.cipher}
                onCiphertextChange={this.handleCiphertextChange} />
        );
    }
}


export default Substitution;


class SubstitutionSolver extends React.Component {

    constructor(props) {
        super(props);

        this.handleKeyChange = this.handleKeyChange.bind(this);
    }


    countCharacterOccurrences(text) {
        const occ = {};
        for (let ch of text) {
            let count = (ch in occ) ? occ[ch]+1 : 1;
            occ[ch] = count;
        }
        return occ;
    }


    handleKeyChange(event, char) {
        const key = this.props.cipher.key;
        key[event.target.value] = char;
        this.props.onCipherKeyChange(key);
        console.log("New key mapping: " + char + " -> " + event.target.value)
    }


    render() {
        const occ = this.countCharacterOccurrences(this.props.cipher.ciphertext);
        const table = [];
        for (const ch in occ) {
            table.push(
                <tr key={ch}>
                    <td className="char">{ch}</td>
                    <td className="occurrenceVisual"><progress max="100" value={occ[ch]}>{occ[ch]}</progress></td>
                    <td className="occurenceCount">{occ[ch]}</td>
                    <td className="substitution"><input maxLength={1} size={2} onChange={(e) => this.handleKeyChange(e, ch)} /></td>
                </tr>
            );
        }
        return (
            <table className="characterOccurrences">
                <tbody>
                    {table}
                </tbody>
            </table>
        );
    }
}


SubstitutionSolver.propTypes = {
    cipher: PropTypes.instanceOf(SubstitutionCipher).isRequired,
    onCipherKeyChange: PropTypes.func.isRequired,
};