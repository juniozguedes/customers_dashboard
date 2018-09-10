# -*- coding: utf-8 -*-
from flask import Flask, request, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres:///anunciantes"
modus = Modus(app)
db = SQLAlchemy(app)

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

    def __init__(self, pid, partner, description, role, multitarifa, extra, ficha):
        self.pid = pid
        self.partner = partner
        self.description = description
        self.role = role
        self.multitarifa = multitarifa
        self.extra = extra
        self.ficha = ficha

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/students', methods=['POST','GET'])
def index():
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
        novo_anunciante = Anunciante(request.form['pid'], request.form['partner'], request.form['description'], role, False, request.form['extra'], request.form['ficha'])
        db.session.add(novo_anunciante)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', anunciantes = Anunciante.query.all())

@app.route('/students/new')
def new():
    return render_template('new.html')

@app.route('/students/<int:pid>', methods=["GET", "PATCH", "DELETE"]) #We defined the page that will retrieve some info
def show(pid):    #We passed some id for the user to specify which id will be shown
    #anunc = Anunciante() 
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()
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

    return render_template('show.html', anunciante = novo_anunciante) 

@app.route('/students/<int:pid>/edit')
def edit(pid):
    anunciante = Anunciante.query.filter_by(pid=pid).first()
    return render_template('edit.html', anunciante = anunciante)

@app.route('/anunciantes/<int:pid>/inner', methods=["GET"]) #We defined the page that will retrieve some info
def inner(pid):    #We passed some id for the user to specify which id will be shown
    novo_anunciante = Anunciante.query.filter_by(pid=pid).first()
    return render_template('inner.html', anunciante = novo_anunciante) 

if __name__ == '__main__':
    app.run(debug=True, port=3000)