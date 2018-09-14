"use strict";

import SubstitutionCipher from "./SubstitutionCipher";

describe("Substitution cipher", () => {

    test ("Decryption without key", () => {
        const ciphertext = "hello, world!";
        const cipher = new SubstitutionCipher();
        cipher.ciphertext = ciphertext;
        expect(cipher.plaintext).toBe(ciphertext);
    });


    test("Decryption", () => {
        const ciphertext = "abccd edfcg!";
        const key = {a:"h", b:"e", c:"l", d:"o", e:"w", f:"r", g:"d"};
        const cipher = new SubstitutionCipher();
        cipher.key = key;
        cipher.ciphertext = ciphertext;
        const plaintext = cipher.plaintext;
        expect(plaintext).toBe("hello world!");
    });

});
