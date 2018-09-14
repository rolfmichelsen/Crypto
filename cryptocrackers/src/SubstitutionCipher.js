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
        this._key = {};
    }

    _decrypt(ciphertext) {
        let plaintext = "";
        for (const c of ciphertext) {
            let p = c in this._key ? this._key[c] : c;
            plaintext += p;
        }
        return plaintext;
    }

    get key() { return this._key; }
    set key(key) { this._key = key; }

}


export default SubstitutionCipher;