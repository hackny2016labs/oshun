import nltk

def extract_pnp(text):
	tokens = nltk.word_tokenize(text)
	tagged = nltk.pos_tag(tokens)
	pnp = []
	blanks = []
	for (word, tag) in tagged:
		if "NNP" in tag:
			pnp.append(word)
			blanks.append('___')
		else:
			blanks.append(word)
	return (blanks, pnp)