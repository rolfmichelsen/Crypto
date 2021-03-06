"use strict";

import CaesarCipher from "./CaesarCipher";


describe("Caesar cipher", () => {

    test("Decrypt without alphabet", () => {
        const ciphertext = "Hello, world!";
        const alphabet = "";

        const cipher = new CaesarCipher();
        cipher.ciphertext = ciphertext;
        cipher.alphabet = alphabet;
        cipher.ignoreCase = false;
        const plaintext = cipher.plaintext;

        expect(plaintext).toBe(ciphertext);
    });


    test("Decrypt with custom key", () => {
        const ciphertext = "abcdef";
        const alphabet = "abcdefghijklmnopqrstuvwxyz";

        const cipher = new CaesarCipher();
        cipher.ciphertext = ciphertext;
        cipher.alphabet = alphabet;
        cipher.key = 5;
        const plaintext = cipher.plaintext;

        expect(plaintext).toBe("vwxyza");
    });


    test("Decrypt with default key", () => {
        const ciphertext = "abcdef";
        const alphabet = "abcdefghijklmnopqrstuvwxyz";

        const cipher = new CaesarCipher();
        cipher.ciphertext = ciphertext;
        cipher.alphabet = alphabet;
        const plaintext = cipher.plaintext;

        expect(plaintext).toBe("xyzabc");
    });


    test("Decrypt with partial alphabet coverage", () => {
        const ciphertext = "abc[+]def";
        const alphabet = "abcdefghijklmnopqrstuvwxyz";

        const cipher = new CaesarCipher();
        cipher.ciphertext = ciphertext;
        cipher.alphabet = alphabet;
        const plaintext = cipher.plaintext;

        expect(plaintext).toBe("xyz[+]abc");
    });

});
