import nltk

def extract_pnp(text):
	tokens = nltk.word_tokenize(text)
	tagged = nltk.pos_tag(tokens)
	pnp = []
	for (word, tag) in tagged:
	    if "NNP" in tag:
	        pnp.append(word)
	return pnp


