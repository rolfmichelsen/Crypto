#!/usr/bin/env python3

import sys


class VigenereException(Exception):
    """
    Custom exceptions for the Vigenère cipher.
    """



class Vigenere:
    """
    Functionality for working with Vigenère ciphers.
    """

    alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabetMap = None
    alphabetSize = None
    
    key = None
    keySize = None


    def __init__(self, key, alphabet=None):
        """
        Vigenere initializer.  Raises VigenereException if the alphabet contains
        repeated characters.
        """

        if alphabet:
            if len(alphabet) < 1:
                raise VigenereException()
            self.alphabet = alphabet
        self.alphabetMap = self.createAlphabetMap(self.alphabet)
        self.alphabetSize = len(self.alphabet)

        if len(key) < 1:
            raise VigenereException()
        self.validateKey(key)
        self.key = key
        self.keySize = len(key)



    def createAlphabetMap(self, alphabet):
        """
        Maps an alphabet to a dictionary where the key is a character from the alpabet
        and the value is the 0-based numerical position of the character in the alphabet.
        For the English aphabet this maps "a" to 0, "b" to 1 and so on...

        Raises VigenereException if the alphabet contains repeated characters.
        """
        alphabetMap = {}
        i = 0
        for c in alphabet:
            if c in alphabetMap:
                raise VigenereException()
            alphabetMap[c] = i
            i += 1
        return alphabetMap



    def validateKey(self, key):
        """
        Raises VigenereExceptio if key contains characters not in the alphabet.
        """
        for c in key:
            if c not in self.alphabetMap:
                raise VigenereException()


    def getKeyAtPosition(self, n):
        """
        Returns the numeric key at a given position in the message.
        """
        return self.alphabetMap[self.key[n % self.keySize]]


    def encrypt(self, message):
        """
        Encrypt a message.
        """
        cipher = ""
        i = 0
        for m in message:
            if m in self.alphabetMap:
                cipher += self.alphabet[(self.alphabetMap[m] + self.getKeyAtPosition(i)) % self.alphabetSize]
                i += 1
            else:
                cipher += m
        return cipher


    def decrypt(self, cipher):
        """
        Decrypt a message.
        """
        message = ""
        i = 0
        for c in cipher:
            if c in self.alphabetMap:
                message += self.alphabet[(self.alphabetMap[c] - self.getKeyAtPosition(i)) % self.alphabetSize]
                i += 1
            else:
                message += c
        return message
