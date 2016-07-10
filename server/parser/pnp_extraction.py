""" Need to do these steps before this script can be run:
https://github.com/alvations/nltk_cli

Run python parser/pnp_extraction.py from toplevel oshun directory.
"""

import nltk
from nltk.parse.stanford import StanfordParser

MODEL_PATH = "edu/stanford/nlp/models/lexparser/englishPCFG.ser.gz"


class Parser:

    def __init__(self):
        self.stanford_parser = StanfordParser(model_path=MODEL_PATH)

    def fill_in_the_blank(self, text):
        parse_tree = list(self.stanford_parser.raw_parse(text))[0]
        ans_list = self.leaves(parse_tree)
        with_blanks = text
        for ans in ans_list:
            for word in ans:
                with_blanks = with_blanks.replace(word, "_"*len(word))
        print with_blanks
        return (with_blanks, ans_list)

    def leaves(self, tree):
        """Finds NP (nounphrase) leaf nodes of a chunk tree."""
        answers = []
        for subtree in tree.subtrees(filter = lambda t: t.label()=='NP'):
            nnp_exists = list(subtree.subtrees(filter = lambda t: t.label() == 'NNP'))
            if nnp_exists:
                answers.append(subtree.leaves())
        return answers


if __name__ == "__main__":
    text = """
    The David Cameron resignation has blown me away to be honest. I think the period of uncertainty we're going to have for the next few months has been magnified, so I'm quite worried.
    'Now that we know the UK will be leaving the EU we will be taking urgent steps to ensure that the UK Government protects Cornwall's position in any negotiations,' said John Pollard, the leader of Cornwall Council.
    """
    parser = Parser()
    parser.fill_in_the_blank(text)
