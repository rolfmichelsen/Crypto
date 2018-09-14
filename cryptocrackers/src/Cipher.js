/*
    Abstract representation of a cipher and used as base class for all concrete
    cipher implementations.  The current implementation only supports decryption.
*/
class Cipher {

    constructor() {
        this._ciphertext = "";
    }


    _decrypt() { throw "Calling abstract function"; }

    get ciphertext() { return this._ciphertext; }
    set ciphertext(text) { this._ciphertext = text; }

    get plaintext() { return this._decrypt(this._ciphertext); }

}


export default Cipher;