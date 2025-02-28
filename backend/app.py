from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os

# Get the absolute path to the project root
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_PATH = os.path.join(BASE_DIR, '..', 'data', 'library.db')

# Create data directory if it doesn't exist
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_PATH}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Import models after db initialization to avoid circular imports
from models import Book, Member, Loan
from db_init import init_db

migrate = Migrate(app, db)

# Initialize the database
with app.app_context():
    db.create_all()
    init_db()

@app.route('/books', methods=['GET', 'POST'])
def books():
    if request.method == 'GET':
        books_list = Book.query.all()
        result = [
            {
                "book_id": book.book_id,
                "title": book.title,
                "author": book.author,
                "isbn": book.isbn,
                "publication_year": book.publication_year,
                "genre": book.genre,
                "description": book.description,
                "cover_image_url": book.cover_image_url,
            }
            for book in books_list
        ]
        return jsonify(result)
    elif request.method == 'POST':
        data = request.get_json()
        new_book = Book(**data)
        db.session.add(new_book)
        db.session.commit()
        return jsonify({"message": "Book added"}), 201

@app.route('/members', methods=['GET', 'POST'])
def members():
    if request.method == 'GET':
        members_list = Member.query.all()
        result = [
            {
                "member_id": member.member_id,
                "first_name": member.first_name,
                "last_name": member.last_name,
                "email": member.email,
                "phone_number": member.phone_number,
                "address": member.address,
            }
            for member in members_list
        ]
        return jsonify(result)
    elif request.method == 'POST':
        data = request.get_json()
        new_member = Member(**data)
        db.session.add(new_member)
        db.session.commit()
        return jsonify({"message": "Member added"}), 201

@app.route('/loans', methods=['GET', 'POST'])
def loans():
    if request.method == 'GET':
        loans_list = Loan.query.all()
        result = [
            {
                "loan_id": loan.loan_id,
                "book_id": loan.book_id,
                "member_id": loan.member_id,
                "loan_date": loan.loan_date.isoformat(),
                "return_date": loan.return_date.isoformat() if loan.return_date else None,
                "status": loan.status,
            }
            for loan in loans_list
        ]
        return jsonify(result)
    elif request.method == 'POST':
        data = request.get_json()
        new_loan = Loan(**data)
        db.session.add(new_loan)
        db.session.commit()
        return jsonify({"message": "Loan added"}), 201

if __name__ == '__main__':
    app.run(debug=True)