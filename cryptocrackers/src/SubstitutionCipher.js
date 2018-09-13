import Cipher from "./Cipher";

/*
    Generic monoalphabetic substitution cipher.  Encrypts a message by replacing each character in the plaintext
    alphabet with a character in the cipher alphabet.

    The key is represented by an object with plaintext characters as properties and the corresponding ciphertext
    characters as values.  The set of properties defines the plaintext alphabet, and the set of property values
    defines the ciphertext alphabet.  When a character is not found in the alphabet, encryption or decryption will
    leave that character unchanged.
*/
class SubstitutionCipher extends Cipher {

    constructor() {
        super();
        this._encryptkey = {};
        this._decryptkey = {};
    }

    _encrypt() {
        let ciphertext = "";
        for (const p of this._plaintext) {
            let c = p in this._encryptkey ? this._encryptkey[p] : p;
            ciphertext += c;
        }
        this._ciphertext = ciphertext;
    }


    _decrypt() {
        let plaintext = "";
        for (const c of this._ciphertext) {
            let p = c in this._decryptkey ? this._decryptkey[c] : c;
            plaintext += p;
        }
        this._plaintext = plaintext;
    }


    _invertkey(key) {
        let ikey = {};
        for (let p in key) {
            let c = key[p];
            ikey[c] = p;
        }
        return ikey;
    }


    get key() { return this._encryptkey; }

    set key(key) {
        this._encryptkey = key;
        this._decryptkey = this._invertkey(key);
    }

}


export default SubstitutionCipher;