#!/usr/bin/env python3

"""
Simple monoalphabetic substitution.
"""



def substitute(text, key, keepUndef=False):
    """
    Substitutes an iterable sequrence, symbol by symbol.  key is a dictionary defining the substitution.
    The source alphabet must be represented as dictionary keys, and the corresponding destination
    symbol is the dictionary valye.  With keepUndef set, source symbols not represented in key will
    be copied to the destination unchanged, otherwise they will be discarded.
    """

    for p in text:
        if (p in key) or keepUndef:
            yield (key[p] if p in key else p)


def invertKey(key):
    """
    Inverts a substitution cipher key so that an encryption key becomes a decryption key and vice versa.
    """

    invkey = {}
    for (key, subst) in key.items():
        if subst in invkey: raise Exception("Duplicate key " + subst)
        invkey[subst] = key
    return invkey


def createKey(source, dest):
    """
    Convenience function for creating a substitution key from two alphabets.  The key will substitute
    symbols from the source alphabet with the symbol at the corresponding positon form the destination
    alphabet.
    """

    if len(source) != len(dest): raise Exception("The alphabets are not of equal length")
    key = {}
    for (s, d) in zip(source, dest):
        if s in key: raise Exception("Duplicate key " + s)
        key[s] = d
    return key


def createCaesarKey(alphabet, offset=3):
    """
    Convenience function for creating a Caesar cipher key.
    """

    dest = alphabet[offset:] + alphabet[:offset]
    return createKey(alphabet, dest)