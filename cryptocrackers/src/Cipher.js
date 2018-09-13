/*
    Abstract representation of a cipher and used as base class for all concrete
    cipher implementations.
*/
class Cipher {

    constructor() {
        this._ciphertext = "";
        this._plaintext = "";
    }


    _encrypt() { throw "Calling abstract function"; }

    _decrypt() { throw "Calling abstract function"; }

    get ciphertext() { return this._ciphertext; }

    set ciphertext(text) {
        this._ciphertext = text;
        this._decrypt();
    }

    get plaintext() { return this._plaintext; }

    set plaintext(text) {
        this._plaintext = text;
        this._encrypt();
    }

}


export default Cipher;