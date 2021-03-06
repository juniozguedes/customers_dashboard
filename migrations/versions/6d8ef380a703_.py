"""empty message

Revision ID: 6d8ef380a703
Revises: 852db76eb9dd
Create Date: 2019-05-20 19:12:29.164768

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d8ef380a703'
down_revision = '852db76eb9dd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('anunciantes', sa.Column('lang', sa.String(length=20), nullable=True))
    op.drop_column('user', 'lang')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('lang', sa.VARCHAR(length=20), autoincrement=False, nullable=True))
    op.drop_column('anunciantes', 'lang')
    # ### end Alembic commands ###
