#!/usr/bin/env python3

import unittest
import crypto


class TestCharacterOccurrences(unittest.TestCase):

    def test_noAlphabet(self):
        text = "hello world"
        expected = {"h":1, "e":1, "l":3, "o":2, " ":1, "w":1, "r":1, "d":1}
        occ = crypto.characterOccurrences(text)
        self.assertDictEqual(occ, expected)

    def test_alphabet(self):
        text = "hello world"
        alphabet = "helowrdz"
        expected = {"h":1, "e":1, "l":3, "o":2, "w":1, "r":1, "d":1, "z":0}
        occ = crypto.characterOccurrences(text, alphabet)
        self.assertDictEqual(occ, expected)




class TestTextNormalization(unittest.TestCase):

    def test_defaultNormalization(self):
        text = "hello\tbeautiful world!"
        alphabet = "abcdefghijklmnopqrstuvwxyz"
        expected = "hello beautiful world "
        actual = crypto.normalize(text, alphabet)
        self.assertEqual(actual, expected)


    def test_truncateNormalization(self):
        text = "hello\tbeautiful world!"
        alphabet = "abcdefghijklmnopqrstuvwxyz"
        expected = "hellobeautifulworld"
        actual = crypto.normalize(text, alphabet, "")
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
