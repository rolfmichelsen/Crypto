import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import Cipher from "./Cipher";


class CipherSolver extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.cipherName}</h1>
                {this.props.cipherText}
                <TextInput caption="Ciphertext" value={this.props.cipher.ciphertext} onTextChange={this.props.onCiphertextChange} />
                <TextOutput caption="Plaintext" value={this.props.cipher.plaintext} />
                <fieldset>
                    <legend>Solver</legend>
                    {this.props.cipherSolver}
                </fieldset>
            </div>
        );
    }
}


CipherSolver.propTypes = {
    cipherName: PropTypes.string.isRequired,                    // Name of cipher
    cipherText: PropTypes.element.isRequired,                   // Text description of cipher
    cipherSolver: PropTypes.element.isRequired,                 // concrete solver for the cipher
    cipher: PropTypes.instanceOf(Cipher).isRequired,            // Class providing the actual cipher functionality
    onCiphertextChange: PropTypes.func,                         // callback for changes to the ciphertext
};


export default CipherSolver;
