import os
from flask import Flask, request, session, g, redirect, url_for, abort, \
    render_template, flash, jsonify
from parser import oshun

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/blanks/<string:question>')
def generate_blanks(question):
    answers = oshun.extract_pnp(question)
    return jsonify(' '.join(answers[0]))

@app.route('/answer/<string:question>')
def generate_answer(question):
    answers = oshun.extract_pnp(question)
    return jsonify(answers[1])

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
