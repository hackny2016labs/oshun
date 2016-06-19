import nltk
sentence = """The club is currently playing in Allsvenskan, where the season lasts from April to October. The club first won Allsvenskan in 1943.[2] IFK Norrkoping were most successful during the 1940s, when they won five Swedish championships and two Svenska Cupen titles under the Hungarian coach Lajos Czeizler and with players like Gunnar Nordahl and Nils Liedholm.."""
tokens = nltk.word_tokenize(sentence)
tagged = nltk.pos_tag(tokens)
sentence = []
nouns = []
for (word, tag) in tagged:
    if "NNP" in tag:
        nouns.append(word)
        sentence.append("_")
    else:
        sentence.append(word)
print(' '.join(sentence))
