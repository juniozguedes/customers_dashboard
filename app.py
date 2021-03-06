# -*- coding: utf-8 -*-
from flask import Flask, request, redirect, url_for, render_template, session
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus


app = Flask(__name__)

app.config.from_pyfile('config.py')

modus = Modus(app)
db = SQLAlchemy(app)

from views import *

if __name__ == '__main__':  
    app.run(debug=True, host='10.50.21.80', port=80)
	#app.run(debug=True, host='localhost', port=5000)