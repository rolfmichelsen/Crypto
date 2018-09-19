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



class TestNgramOccurrences(unittest.TestCase):

    def test_ngram(self):
        text = "hello world"
        order = 2
        expected = {"he":1, "el":1, "ll":1, "lo":1, "o ":1, " w":1, "wo":1, "or":1, "rl":1, "ld":1}
        occ = crypto.ngramOccurrences(text, order)
        self.assertDictEqual(occ, expected)


class TestWordOccurrences(unittest.TestCase):

    def test_wordcount(self):
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lacinia ante. Mauris et ultrices nunc, lorem ipsum "
        occ = crypto.wordOccurrences(text.lower(), "abcdefghijklmnopqrstuvwxyz")

        expected = {"lorem": 2,
                    "ipsum": 2,
                    "dolor": 1,
                    "sit": 1,
                    "amet": 1,
                    "consectetur" :1,
                    "adipiscing" : 1,
                    "elit": 1,
                    "sed": 1,
                    "a": 1,
                    "lacinia": 1,
                    "ante": 1,
                    "mauris": 1,
                    "et": 1,
                    "ultrices": 1,
                    "nunc": 1
                    }

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
