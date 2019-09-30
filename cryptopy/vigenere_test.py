#!/usr/bin/env python3

import unittest
import vigenere as vg


class TestVigenere(unittest.TestCase):

    def test_encrypt(self):
        message = "attack at dawn"
        key = "lemon"
        cipher = "lxfopv ef rnhr"
        v = vg.Vigenere(key)
        result = v.encrypt(message)
        self.assertEqual(result, cipher)


    def test_decrypt(self):
        message = "attack at dawn"
        key = "lemon"
        cipher = "lxfopv ef rnhr"
        v = vg.Vigenere(key)
        result = v.decrypt(cipher)
        self.assertEqual(result, message)


    def test_repeated_alphabet_char_fails(self):
        alphabet = "abcdb"
        key = "abc"
        with self.assertRaises(vg.VigenereException):
            vg.Vigenere(key, alphabet=alphabet)


    def test_key_invalid_character_fails(self):
        alphabet = "abcd"
        key = "abe"
        with self.assertRaises(vg.VigenereException):
            vg.Vigenere(key, alphabet=alphabet)
