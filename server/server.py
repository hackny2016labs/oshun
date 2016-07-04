#!/usr/bin/env python

from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash

from pymongo import MongoClient

# returns a handle to the test db
def connect_db():
    connection = MongoClient() # defaults to localhost port 27017
    db = connection['test-db']
    return db

app = Flask(__name__)
app.config.from_object(__name__)
db = connect_db()

@app.route('/', methods=['POST'])
def process_text():
    return 'Response from backend'

@app.route('/solutions', methods=['GET'])
def solutions():
    return 'answers' 
