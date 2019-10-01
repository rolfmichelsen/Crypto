#!/usr/bin/env python3

import unittest
import textanalysis as ta


english = "abcdefghijklmnopqrstuvwxyz"


class TestCharacterIterator(unittest.TestCase):

    def test_noAlphabet(self):
        text = "hello, world"
        expected = list(text)
        chrs = list(ta.characters(text))
        self.assertEqual(chrs, expected)


    def test_withAlphabet(self):
        text = "hello, world"
        expected = ["h", "e", "l", "l", "o", " ", " ", "w", "o", "r", "l", "d"]
        chrs = list(ta.characters(text, english))
        self.assertEqual(chrs, expected)

    def test_withAlphabetRemove(self):
        text = "hello, world"
        expected = ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
        chrs = list(ta.characters(text, english, rep=None))
        self.assertEqual(chrs, expected)

    def test_withAlphabetRemoveMultiple(self):
        text = "hello, world"
        expected = ["h", "e", "l", "l", "o", " ","w", "o", "r", "l", "d"]
        chrs = list(ta.characters(text, english, doubles=False))
        self.assertEqual(chrs, expected)


class TestNgramIterator(unittest.TestCase):

    def test_noAlphabet(self):
        text = "hello, world!"
        expected = ["he", "el", "ll", "lo", "o,", ", ", " w", "wo", "or", "rl", "ld", "d!"]
        ngrams = list(ta.ngrams(text, 2))
        self.assertEqual(ngrams, expected)


    def test_withAlphabet(self):
        text = "hello, world!"
        expected = ["he", "el", "ll", "lo", "o ", "  ", " w", "wo", "or", "rl", "ld", "d "]
        ngrams = list(ta.ngrams(ta.characters(text, english, " "), 2))
        self.assertEqual(ngrams, expected)

    def test_withAlphabetRemove(self):
        text = "hello, world!"
        expected = ["he", "el", "ll", "lo", "ow", "wo", "or", "rl", "ld"]
        ngrams = list(ta.ngrams(ta.characters(text, english, rep=None), 2))
        self.assertEqual(ngrams, expected)


class TestStatistics(unittest.TestCase):

    def test_characterHistogram(self):
        samples = ("a", "b", "c", "a", "c", "a")
        expected = {"a":3, "b":1, "c":2}
        histogram = ta.histogram(samples)
        self.assertEqual(histogram, expected)


class TestWordIterator(unittest.TestCase):

    def test_words(self):
        text = "Lorem ipsum dolor_sit amet, consectetur adipiscing elit"
        expected = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing",  "elit"]
        words = list(ta.words(text.lower(), english))
        self.assertEqual(words, expected)