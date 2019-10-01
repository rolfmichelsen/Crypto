#!/usr/bin/env python3

"""
Functions for analysing text.  Many functions are written as generators that can be used in
a list context to iterate over elements over the text.  The following example will print
each word on a separate line:

  for w in words("hello, world"):
      print(w)
"""


def characters(text, alphabet=None, rep=" ", doubles=True):
    """
    Generator returning a single character at a time from the text.  Only characters in the
    specified alphabet will be returned.  If a character is not in the alphabet, it is replaced by
    rep in the output.  If no alphabet is given then all characters are returned with no
    translation.  Set rep to None to remove characters not in the dictionary instead of translating them.
    Set doubles to False to replace multiple non-alphabet characters with only a single replacement
    character.  This function can be resolved in a list context to iterate over all characters.
    """

    lastrep = False
    for c in text:
        if (not alphabet) or (c in alphabet):
            yield c
        elif rep and (doubles or (not lastrep)):
            lastrep = True
            yield rep
        else:
            lastrep = False


def ngrams(text, order):
    """
    Returns N-grams (sequences of characters) of a given order from the text.  This function
    can be used in a list context to iterate over all ngrams.
    """

    if order < 1:
        raise RuntimeError("Argument order is invalid " + order)

    ngram = ""
    for c in text:
        ngram += c
        if len(ngram) == order:
            yield ngram
            ngram = ngram[1:]



def words(text, alphabet):
    """
    Generator returning words from the text.  Any character not in the specified alphabet is considered
    a word separator.  This function can be used in list context to iterate over all words in the
    text.
    """

    word = ""
    for c in text:
        if c in alphabet:
            word += c
        elif len(word) > 0:
            yield word
            word = ""
    if len(word) > 0:
        yield word