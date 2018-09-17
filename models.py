from app import app
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from app import db
from datetime import datetime
from sqlalchemy.dialects.postgresql import ARRAY

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login' #if unauthorized, redirects to login
login_manager.login_message = 'You need to login!'

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