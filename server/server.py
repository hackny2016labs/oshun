#!/usr/bin/env python

from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash

from pymongo import MongoClient

import ml

# returns a handle to the test db
def connect_db():
    connection = MongoClient() # defaults to localhost port 27017
    db = connection['test-db']
    return db

app = Flask(__name__)
app.config.from_object(__name__)
db = connect_db()

@app.route('/<string:text>', methods=['POST'])
def process_text(text):
    return " ".join(ml.remove_pnp(text))

@app.route('/solutions/<string:text>', methods=['GET'])
def solutions(text):
    return ", ".join(ml.extract_pnp(text))
