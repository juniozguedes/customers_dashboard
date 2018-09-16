# -*- coding: utf-8 -*-
import itertools
from flask import Flask, request, redirect, url_for, render_template, session
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from datetime import datetime
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from urlparse import urlparse, urljoin
from sqlalchemy.dialects.postgresql import ARRAY

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres:///anunciantes"
app.config['SECRET_KEY'] = 'thisissecret'
app.config['USE_SESSION_FOR_NEXT'] = True

modus = Modus(app)
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
login_manager.login_message = 'You really need to login!'

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(20))
    role = db.Column(db.String(20))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class Anunciante(db.Model):

    __tablename__ = "anunciantes"

    id = db.Column(db.Integer, primary_key=True)
    pid = db.Column(db.Integer)
    partner = db.Column(db.Text)
    description = db.Column(db.Text)
    role = db.Column(db.Text)
    entrada = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    liberada = db.Column(db.Boolean, nullable=False, default=False)
    saida = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    multitarifa = db.Column(db.Boolean, nullable=False)
    extra = db.Column(db.Text)
    ficha = db.Column(db.Text)
    tags = db.Column(ARRAY(db.Text))
    remid = db.Column(ARRAY(db.Text))
    
    def __init__(self, pid, partner, description, role, multitarifa, extra, ficha):
        self.pid = pid
        self.partner = partner
        self.description = description
        self.role = role
        self.multitarifa = multitarifa
        self.extra = extra
        self.ficha = ficha
        self.tags = ['t_0','t_1']
        self.remid = ['t_1','t_1']

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/afbase/login')
def login():
    #session['next'] = request.args.get('next')
    return render_template('login.html')

def is_safe_url(target):
    ref_url = urlparse(request.host_url)
    test_url = urlparse(urljoin(request.host_url,target))
    return test_url.scheme in ('http','https') and \
        ref_url.netloc == test_url.netloc

@app.route('/logmein', methods=['POST'])
def logmein():
    username = request.form['username']

    user = User.query.filter_by(username=username).first()

    if not user:
        return '<h1>User not found </h1>'

    login_user(user, remember=True)

    if 'next' in session:
        next = session['next']

        if is_safe_url(next):
            return redirect(next)

@app.route('/afbase/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('afbase'))

@app.route('/afbase', methods=['POST','GET'])
@login_required
def afbase():
    if request.method == 'POST':
        role = request.form['role']
        if role == '1':
            role = 'CPA'
        elif role =='2':
            role = 'CPL'
        else:
            role = 'CPC'
        multitarifa = request.form['multitarifa']
        if multitarifa == '1':
            multitarifa = True
        else:
            multitarifa = False
        print(multitarifa)
        novo_anunciante = Anunciante(request.form['pid'], request.form['partner'], request.form['description'], role, multitarifa, request.form['extra'], request.form['ficha'])
        db.session.add(novo_anunciante)
        db.session.commit()
        return redirect(url_for('afbase'))
    return render_template('index.html', anunciantes = Anunciante.query.all())

@app.route('/afbase/new')
def new():
    return render_template('new.html')

@app.route('/afbase/<int:pid>', methods=["GET", "PATCH", "DELETE"]) #We defined the page that will retrieve some info
def show(pid):    #We passed some id for the user to specify which id will be shown
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()
    dict_test = {}
    if request.method == 'PATCH':
        novo_anunciante.pid = request.form['pid']
        novo_anunciante.partner = request.form['partner']
        novo_anunciante.description = request.form['description']
        role = request.form['role']
        if role == '1':
            novo_anunciante.role = 'CPA'
        elif role =='2':
            novo_anunciante.role = 'CPL'
        else:
            novo_anunciante.role = 'CPC'
        novo_anunciante.extra = request.form['extra']
        multitarifa = request.form['multitarifa']
        if multitarifa == '1':
            novo_anunciante.multitarifa = True
        else:
            novo_anunciante.multitarifa = False
        if request.form['liberada'] == 1 or '1': 
            novo_anunciante.liberada = True
            novo_anunciante.saida = datetime.utcnow()
            db.session.add(novo_anunciante)
            db.session.commit()
        else:
            print("Erro")
        novo_anunciante.ficha = request.form['ficha']            
        db.session.add(novo_anunciante)
        db.session.commit() 
        return redirect(url_for('index'))
    
    if request.method == 'DELETE':
        db.session.delete(novo_anunciante)
        db.session.commit()
        return redirect(url_for('index'))

    for tag, remid in itertools.izip_longest(novo_anunciante.tags, novo_anunciante.remid):
        dict_test[tag] = remid

    return render_template('show.html', anunciante = novo_anunciante, itertools_resp = dict_test) 

@app.route('/students/<int:pid>/edit')
def edit(pid):
    anunciante = Anunciante.query.filter_by(pid=pid).first()
    return render_template('edit.html', anunciante = anunciante)

@app.route('/afbase/<int:pid>/inner', methods=["GET"]) #We defined the page that will retrieve some info
def inner(pid):    #We passed some id for the user to specify which id will be shown
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()
    return render_template('inner.html', anunciante = novo_anunciante)

@app.route('/afbase/relatorios/liberadas')
def liberadas():
    return render_template('relatorios.html', anunciantes=Anunciante.query.filter_by(liberada=True)) 

@app.route('/home')
@login_required
def home():
    return 'The current user is' + current_user.username

if __name__ == '__main__':
    app.run(debug=True, port=3000)