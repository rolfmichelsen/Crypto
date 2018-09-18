#!/usr/bin/env python3

def characterOccurrences(text, alphabet=None):
    """
    Returns the character occurrence histogram for a string.  The histogram is returned
    as a dictionary with characters as keys and occurrence counts as corresponding values.
    If an alphabet is provided, there will be one entry in the returned histogram for
    each character in the alphabet.  In this case, the returned histogram may have entries
    with zero occurrences and characters in the input string that do not occur in the
    alphabet will be ignored.
    """

    occ = dict(map(lambda i:[i, 0], list(alphabet))) if alphabet else {}

    for c in text:
        if c in occ:
            occ[c] += 1
        elif not alphabet:
            occ[c] = 1

    return occ



def normalize(text, alphabet, repl=" "):
    """
    Normalize a string by replacing all characters not in alphabet with the replacement
    character.
    """

    norm = ""
    for c in text:
        norm += c if c in alphabet else repl
    return norm





loremipsum = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lacinia ante. Mauris et ultrices nunc,
in consectetur nisi. Fusce non nulla bibendum, euismod enim sodales, mattis est. Suspendisse potenti.
Vivamus id dapibus mauris. Donec condimentum pulvinar ex, ut auctor sapien hendrerit at. Nunc orci nunc,
facilisis vitae interdum vitae, tempus eu sapien. Curabitur maximus, nulla et faucibus pellentesque,
metus purus tristique orci, non scelerisque nibh odio quis lacus. Curabitur ullamcorper dui vel fringilla
mattis. Sed gravida mi dolor, id mollis justo consequat eu. Duis rhoncus, odio ultricies rutrum dictum,
odio libero fringilla massa, a efficitur risus dolor suscipit erat. Integer viverra id dolor et luctus.
Sed consequat, justo at cursus mattis, arcu odio fermentum tellus, et placerat risus velit non dui. Nunc
ac felis vitae nulla pretium efficitur. Phasellus auctor aliquam tincidunt.
"""
