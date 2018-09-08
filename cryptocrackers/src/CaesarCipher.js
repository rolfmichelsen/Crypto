/*
    Implementation of a Caesar cipher.
*/
class CaesarCipher {

    constructor() {
        this.ciphertext = "";
        this.alphabet = "";
        this.cipherkey = 3;
    }

    get plaintext() { return this._decrypt(); }


    _decrypt() {
        let plaintext = "";
        const alphaLength = this.alphabet.length;
        for (let c of this.ciphertext) {
            const p = this.alphabet.indexOf(c);
            plaintext += p >= 0 ? this.alphabet[(p - this.cipherkey + alphaLength) % alphaLength] : c;
        }
        return plaintext;
    }



}


export default CaesarCipher;