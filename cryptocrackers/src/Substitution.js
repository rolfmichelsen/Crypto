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
                cipherText={Substitution.cipherText}
                cipherSolver={<SubstitutionSolver cipher={this.state.cipher} onCipherKeyChange={this.handleCipherkeyChange} />}
                cipher={this.state.cipher}
                onCiphertextChange={this.handleCiphertextChange} />
        );
    }
}


Substitution.cipherText =
    <div>
        <p>Substitution ciphers are among the simplest ciphers. The cipher key is a table mapping characters from the plaintext
            alphabet to characters of the ciphertext alphabet, e.g. &#34;a&#34; becomes &#34;x&#34;, &#34;b&#34; becomes &#34;w&#34;
            etc.</p>
        <p>These ciphers can usually be broken relatively simply by observing that not all characters occur with similar frequency
            in normal text, e.g. &#34;e&#34; is significantly more common than &#34;x&#34; in English text.  By doing a simple
            frequency analysis of the ciphertext it is possible to start reconstructing the key.</p>
    </div>;

export default Substitution;


class SubstitutionSolver extends React.Component {

    constructor(props) {
        super(props);

        this.handleKeyChange = this.handleKeyChange.bind(this);
    }


    countCharacterOccurrences(text) {
        const occ = {};
        for (let ch of text) {
            ch = ch.toLowerCase();
            let count = (ch in occ) ? occ[ch]+1 : 1;
            occ[ch] = count;
        }
        return occ;
    }


    handleKeyChange(event, char) {
        const key = this.props.cipher.key;
        key[char] = event.target.value;
        this.props.onCipherKeyChange(key);
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