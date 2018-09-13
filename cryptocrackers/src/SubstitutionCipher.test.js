"use strict";

import SubstitutionCipher from "./SubstitutionCipher";

describe("Substitution cipher", () => {

    test ("Encryption without key", () => {
        const plaintext = "hello, world!";
        const cipher = new SubstitutionCipher();
        cipher.plaintext = plaintext;
        expect(cipher.ciphertext).toBe(plaintext);
    });


    test("Encryption with key", () => {
        const plaintext = "hello world";
        const key = {h:"a", e:"b", l:"c", o:"d", " ":"x", w:"e", r:"f", d:"g"};
        const cipher = new SubstitutionCipher();
        cipher.key = key;
        cipher.plaintext = plaintext;
        const ciphertext = cipher.ciphertext;
        expect(ciphertext).toBe("abccdxedfcg");
    });


    test("Encryption with unmapped characters", () => {
        const plaintext = "hello world!";
        const key = {h:"a", e:"b", l:"c", o:"d", w:"e", r:"f", d:"g"};
        const cipher = new SubstitutionCipher();
        cipher.key = key;
        cipher.plaintext = plaintext;
        const ciphertext = cipher.ciphertext;
        expect(ciphertext).toBe("abccd edfcg!");
    });


    test("Decryption", () => {
        const ciphertext = "abccd edfcg!";
        const key = {h:"a", e:"b", l:"c", o:"d", w:"e", r:"f", d:"g"};
        const cipher = new SubstitutionCipher();
        cipher.key = key;
        cipher.ciphertext = ciphertext;
        const plaintext = cipher.plaintext;
        expect(plaintext).toBe("hello world!");
    });

});
