#!/usr/bin/env python3


def characters(text, alphabet=None, rep=" "):
    """
    Generator returning a single character at a time from the text.  Only characters in the
    specified alphabet will be returned.  If a character is not in the alphabet, it is replaced by
    rep in the output.  If no alphabet is given then all characters are returned with no
    translation.  Set rep to None to remove characters not in the dictionary instead of translating them.
    """

    for c in text:
        if (not alphabet) or (c in alphabet):
            yield c
        elif rep:
            yield rep


def ngrams(text, order, alphabet=None, rep=" "):
    """
    Returns N-grams (sequences of characters) of a given order from the text.
    """

    if order < 1:
        raise RuntimeError("Argument order is invalid " + order)

    ngram = ""
    for c in text:
        if (not alphabet) or (c in alphabet):
            ngram += c
        elif rep:
            ngram += rep
        if len(ngram) == order:
            yield ngram
            ngram = ngram[1:]



def words(text, alphabet):
    """
    Generator returning words from the text.  Any character not in the specified alphabet is considered
    a word separator.
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