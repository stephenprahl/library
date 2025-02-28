from flask_sqlalchemy import SQLAlchemy
from app import db

class Book(db.Model):
    __tablename__ = "books"
    book_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    author = db.Column(db.String)
    isbn = db.Column(db.String)
    publication_year = db.Column(db.Integer)
    genre = db.Column(db.String)
    description = db.Column(db.Text)
    cover_image_url = db.Column(db.String)
    loans = db.relationship("Loan", back_populates="book")

class Member(db.Model):
    __tablename__ = "members"
    member_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email = db.Column(db.String)
    phone_number = db.Column(db.String)
    address = db.Column(db.String)
    loans = db.relationship("Loan", back_populates="member")

class Loan(db.Model):
    __tablename__ = "loans"
    loan_id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey("books.book_id"))
    member_id = db.Column(db.Integer, db.ForeignKey("members.member_id"))
    loan_date = db.Column(db.Date)
    return_date = db.Column(db.Date, nullable=True)
    status = db.Column(db.String)
    book = db.relationship("Book", back_populates="loans")
    member = db.relationship("Member", back_populates="loans")
