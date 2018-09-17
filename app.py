# -*- coding: utf-8 -*-
from flask import Flask, request, redirect, url_for, render_template, session
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__)

app.config.from_pyfile('config.py')

modus = Modus(app)
db = SQLAlchemy(app)

from views import *

if __name__ == '__main__':
    app.run()