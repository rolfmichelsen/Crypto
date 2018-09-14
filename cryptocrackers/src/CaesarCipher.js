import Cipher from "./Cipher";

/*
    Implementation of a Caesar cipher.
*/
class CaesarCipher extends Cipher {

    constructor() {
        super();
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
        this.key = 3;
        this.ignoreCase = true;
    }

    get plaintext() { return this._decrypt(this.ciphertext); }

    _decrypt(ciphertext) {
        let plaintext = "";
        const alphaLength = this.alphabet.length;
        for (let c of ciphertext) {
            c = this.ignoreCase ? c.toLowerCase() : c;
            const p = this.alphabet.indexOf(c);
            plaintext += p >= 0 ? this.alphabet[(p - this.key + alphaLength) % alphaLength] : c;
        }
        return plaintext;
    }

}


export default CaesarCipher;