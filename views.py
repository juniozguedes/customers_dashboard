from app import app
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask import Flask, request, redirect, url_for, render_template, session
from models import *
try:
    from urllib.parse import urlparse, urljoin
except ImportError:
    from urlparse import urlparse
from datetime import datetime
import itertools
import hashlib
from werkzeug.security import generate_password_hash, check_password_hash
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

    return redirect(url_for('afbase'))

@app.route('/denied')
def denied():
	return render_template('erro.html')

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
        elif role == '4':
            role = 'CPV'
        elif role == '5':
            role = 'Postview'
        elif role == '6':
            role = 'CPACPL'
        else:
            role = 'CPC'
        multitarifa = request.form['multitarifa']
        if multitarifa == '1':
            multitarifa = True
            remids = request.form['remids'].split(",")
            tags = request.form['tags'].split(",")
        else:
            multitarifa = False
        novo_anunciante = Anunciante(request.form['pid'], request.form['partner'], request.form['description'], role, multitarifa, request.form['extra'], request.form['ficha'])
        if multitarifa:
            novo_anunciante.remid = remids
            novo_anunciante.tags = tags
            commit(novo_anunciante)
        commit(novo_anunciante)
        return redirect(url_for('afbase'))
    if request.method == 'GET':
        if current_user.role == 'admin':
            return render_template('index.html', anunciantes = Anunciante.query.order_by(Anunciante.pid.desc()))
        if current_user.role == 'opec':
            return render_template('indexopec.html', anunciantes = Anunciante.query.all())

@app.route('/afbase/new')
@login_required
def new():
    if current_user.role == 'opec':
    	return render_template('erro.html')
    elif current_user.role == 'admin':
    	return render_template('new.html')

@app.route('/afbase/<int:pid>/filtering', methods=["GET", "POST"]) #We defined the page that will retrieve some info
@login_required
def show(pid):
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()

    if request.method == 'POST':
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
        elif role == '4':
            novo_anunciante.role = 'CPV'
        elif role == '5':
            novo_anunciante.role = 'Postview'
        elif role == '6':
            novo_anunciante.role = 'CPACPL'
        novo_anunciante.extra = request.form['extra']
        multitarifa = request.form['multitarifa']
        if multitarifa == '1':
            novo_anunciante.multitarifa = True
        elif multitarifa == '2':
            novo_anunciante.multitarifa = False
        if request.form['liberada'] == '1': 
            novo_anunciante.liberada = True
            novo_anunciante.saida = datetime.utcnow()
            commit(novo_anunciante)
        if request.form['liberada'] == '2':
            novo_anunciante.liberada = False
            commit(novo_anunciante)
        novo_anunciante.ficha = request.form['ficha']            
        commit(novo_anunciante)
        return redirect(url_for('afbase'))
    return redirect(url_for('filter', uniquekey = novo_anunciante.uniquekey))

@app.route('/afbase/<int:pid>/de', methods=["GET"])
@login_required
def d(pid):
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()    
    db.session.delete(novo_anunciante)
    db.session.commit()
    return redirect(url_for('afbase'))

@app.route('/afbase/<uniquekey>')
def filter(uniquekey):
    dict_test = {}
    novo_anunciante = Anunciante.query.filter_by(uniquekey=uniquekey).first()

    for tag, remid in itertools.zip_longest(novo_anunciante.tags, novo_anunciante.remid):
        dict_test[tag] = remid

    if novo_anunciante.role == 'CPA' and novo_anunciante.multitarifa == False:    
        return render_template('showcpa.html', anunciante = novo_anunciante, itertools_resp = dict_test) 
    if novo_anunciante.role == 'CPL' and novo_anunciante.multitarifa == False:    
        return render_template('showcpl.html', anunciante = novo_anunciante, itertools_resp = dict_test) 
    if novo_anunciante.role == 'CPA' and novo_anunciante.multitarifa == True:    
        return render_template('showcpamulti.html', anunciante = novo_anunciante, itertools_resp = dict_test) 
    if novo_anunciante.role == 'CPL' and novo_anunciante.multitarifa == True:    
        return render_template('showcplmulti.html', anunciante = novo_anunciante, itertools_resp = dict_test) 
    if novo_anunciante.role == 'CPC':    
        return render_template('showcpc.html', anunciante = novo_anunciante, itertools_resp = dict_test) 
    if novo_anunciante.role == 'CPV' and novo_anunciante.multitarifa == False:    
        return render_template('showcpv.html', anunciante = novo_anunciante, itertools_resp = dict_test) 
    if novo_anunciante.role == 'Postview' and novo_anunciante.multitarifa == False:    
        return render_template('showcpv.html', anunciante = novo_anunciante, itertools_resp = dict_test) 
    if novo_anunciante.role == 'CPACPL' and novo_anunciante.multitarifa == False:    
        return render_template('showcpacpl.html', anunciante = novo_anunciante, itertools_resp = dict_test) 
    if novo_anunciante.role == 'CPACPL' and novo_anunciante.multitarifa == True:    
        return render_template('showcpacplmulti.html', anunciante = novo_anunciante, itertools_resp = dict_test) 


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
     

@app.route('/searcher', methods=['POST'])
@login_required
def searcher():
    pid = request.form['pid']
    pid = int(pid)
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()
    return redirect(url_for('show', pid=pid))