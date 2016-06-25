from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash

from parser import pnp_extraction

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def process_text():
    return 'Response from backend'
