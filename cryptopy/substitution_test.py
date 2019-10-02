#!/usr/bin/env python3

import unittest
import substitution as subst


class TestSubstitution(unittest.TestCase):

    def test_substitution(self):
        text = "hello world"
        key = {"h":"a", "e":"b", "l":"c", "o":"d", "w":"e", "r":"f", "d":"g"}
        expected = list("abccdedfcg")
        cipher = list(subst.substitute(text, key))
        self.assertEqual(cipher, expected)


    def test_createKey(self):
        source = "abcdef"
        dest = "fedcba"
        expected = {"a":"f", "b":"e", "c":"d", "d":"c", "e":"b", "f":"a"}
        key = subst.createKey(source, dest)
        self.assertEqual(key, expected)


    def test_invertKey(self):
        key = {"a":"f", "b":"e", "c":"d", "d":"c", "e":"b", "f":"a"}
        expected = {"a":"f", "b":"e", "c":"d", "d":"c", "e":"b", "f":"a"}
        invkey = subst.invertKey(key)
        self.assertEqual(invkey, expected)


    def test_createCaesarKey(self):
        alphabet = "abcdef"
        expected = {"a":"d", "b":"e", "c":"f", "d":"a", "e":"b", "f":"c"}
        key = subst.createCaesarKey(alphabet)
        self.assertEqual(key, expected)

    def test_createCaesarKeyNoOffset(self):
        alphabet = "abcdef"
        expected = {"a":"a", "b":"b", "c":"c", "d":"d", "e":"e", "f":"f"}
        key = subst.createCaesarKey(alphabet, 0)
        self.assertEqual(key, expected)
        