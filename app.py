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
    extra = db.Column(db.Text)

    def __init__(self, pid, partner, description, role, extra):
        self.pid = pid
        self.partner = partner
        self.description = description
        self.role = role
        self.extra = extra

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/students', methods=['POST','GET'])
def index():
    if request.method == 'POST':
        #adicionar verificador de duplicidade
        role = request.form['role']
        if role == 'cpl' or 'cpa':
            role = role.upper()
        novo_anunciante = Anunciante(request.form['pid'], request.form['partner'], request.form['description'], role, request.form['extra'])
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
        novo_anunciante.role = request.form['role']
        novo_anunciante.extra = request.form['extra']
        if request.form['liberada'] == 1 or '1': 
            novo_anunciante.liberada = True
            novo_anunciante.saida = datetime.utcnow()
            db.session.add(novo_anunciante)
            db.session.commit()
        else:
            print("Erro")            
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