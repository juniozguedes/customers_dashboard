from app import app
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask import Flask, request, redirect, url_for, render_template, session
from models import Anunciante, User
from urlparse import urlparse, urljoin
from datetime import datetime
import itertools
from app import db

@app.route('/')
def root():
    return redirect(url_for('afbase'))

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
    password = request.form['password']

    user = User.query.filter_by(password=password).first()

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
    if current_user.role == 'admin':
    	return render_template('index.html', anunciantes = Anunciante.query.all())
    if current_user.role == 'opec':
    	return render_template('indexopec.html', anunciantes = Anunciante.query.all())

@app.route('/afbase/new')
@login_required
def new():
    if current_user.role == 'opec':
    	return render_template('erro.html')
    elif current_user.role == 'admin':
    	return render_template('new.html')

@app.route('/afbase/'+str(range(15))+'<int:pid>'+str(range(15)), methods=["GET", "PATCH", "DELETE"]) #We defined the page that will retrieve some info
def show(pid):
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
        elif role == '3':
            novo_anunciante.role = 'CPC'
        novo_anunciante.extra = request.form['extra']
        multitarifa = request.form['multitarifa']
        if multitarifa == '1':
            novo_anunciante.multitarifa = True
        elif multitarifa == '2':
            novo_anunciante.multitarifa = False
        if request.form['liberada'] == '1': 
            novo_anunciante.liberada = True
            novo_anunciante.saida = datetime.utcnow()
            db.session.add(novo_anunciante)
            db.session.commit()
        if request.form['liberada'] == '2':
            novo_anunciante.liberada = False
            db.session.add(novo_anunciante)
            db.session.commit()
        novo_anunciante.ficha = request.form['ficha']            
        db.session.add(novo_anunciante)
        db.session.commit() 
        return redirect(url_for('afbase'))
    
    if request.method == 'DELETE':
        db.session.delete(novo_anunciante)
        db.session.commit()
        return redirect(url_for('afbase'))

    for tag, remid in itertools.izip_longest(novo_anunciante.tags, novo_anunciante.remid):
        dict_test[tag] = remid

    return render_template('show.html', anunciante = novo_anunciante, itertools_resp = dict_test) 

@app.route('/afbase/<int:pid>/edit')
@login_required
def edit(pid):
    anunciante = Anunciante.query.filter_by(pid=pid).first()
    if current_user.role == 'opec':
    	return render_template('erro.html')
    elif current_user.role == 'admin':
    	return render_template('edit.html', anunciante = anunciante)

@app.route('/afbase/<int:pid>/inner', methods=["GET"]) #We defined the page that will retrieve some info
@login_required
def inner(pid):    #We passed some id for the user to specify which id will be shown
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()
    return render_template('inner.html', anunciante = novo_anunciante)

@app.route('/afbase/relatorios/liberadas')
@login_required
def liberadas():
    return render_template('relatorios.html', anunciantes=Anunciante.query.filter_by(liberada=True)) 

@app.route('/home')
@login_required
def home():
	u = current_user
    	return (u.password)

@app.route('/searcher', methods=['POST'])
@login_required
def searcher():
    pid = request.form['pid']
    pid = int(pid)
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()
    return redirect(url_for('show', pid=pid))