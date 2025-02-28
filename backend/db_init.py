from datetime import date
from app import db
from models import Book, Member, Loan

def init_db():
    # Check if we already have data
    if Book.query.first() is not None:
        return

    # Add sample books
    book1 = Book(
        title="The Great Gatsby",
        author="F. Scott Fitzgerald",
        isbn="9780743273565",
        publication_year=1925,
        genre="Fiction",
        description="A story of the fabulously wealthy Jay Gatsby",
        cover_image_url="https://example.com/gatsby.jpg"
    )

    book2 = Book(
        title="1984",
        author="George Orwell",
        isbn="9780451524935",
        publication_year=1949,
        genre="Science Fiction",
        description="A dystopian novel by George Orwell",
        cover_image_url="https://example.com/1984.jpg"
    )

    db.session.add_all([book1, book2])

    # Add sample members
    member1 = Member(
        first_name="John",
        last_name="Doe",
        email="john@example.com",
        phone_number="123-456-7890",
        address="123 Main St"
    )

    member2 = Member(
        first_name="Jane",
        last_name="Smith",
        email="jane@example.com",
        phone_number="098-765-4321",
        address="456 Oak Ave"
    )

    db.session.add_all([member1, member2])

    # Commit to create IDs
    db.session.commit()

    # Add sample loan
    loan1 = Loan(
        book_id=book1.book_id,
        member_id=member1.member_id,
        loan_date=date.today(),
        status="Active"
    )

    db.session.add(loan1)
    db.session.commit()

if __name__ == "__main__":
    init_db()
