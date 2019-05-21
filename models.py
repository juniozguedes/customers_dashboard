from app import app
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from app import db
from datetime import datetime
from sqlalchemy.dialects.postgresql import ARRAY
import random
import hashlib
from flask_migrate import Migrate


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login' #if unauthorized, redirects to login
login_manager.login_message = 'You need to login!'

migrate = Migrate(app, db)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(20))
    role = db.Column(db.String(20))
    extra = db.Column(db.String(20))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class Anunciante(db.Model):

    __tablename__ = "anunciantes"

    id = db.Column(db.Integer, primary_key=True)
    pid = db.Column(db.Integer, unique=True)
    partner = db.Column(db.Text, unique=True)
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
    uniquekey = db.Column(db.Text, unique=True)
    mastertag_imagem = db.Column(db.Boolean, default=False)
    log = db.Column(db.Text)
    lang = db.Column(db.String(20))

    
    def __init__(self, pid, partner, description, role, multitarifa, extra, ficha):
        self.pid = pid
        self.partner = partner
        self.description = description
        self.role = role
        self.multitarifa = multitarifa
        self.extra = extra
        self.ficha = ficha
        self.tags = ['t_0','t_1']
        self.remid = ['r_0','r_1']
        self.uniquekey = hashlib.sha256(str(random.randrange(1000)).encode('utf-8')).hexdigest()
        self.log = '0'
