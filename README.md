# 📚 Library Management System

A modern, full-stack library management application built with React and Flask.

## 🚀 Features

- 📖 Book management (add, view, search)
- 👥 Member management
- 📝 Loan tracking
- 🎨 Modern, responsive UI
- 🔒 Data persistence with SQLite

## 🛠️ Tech Stack

### Frontend

- ⚛️ React (v19)
- 🎯 TypeScript
- 🏗️ Vite
- 🛣️ React Router
- 🎨 CSS Modules
- 📱 React Bootstrap

### Backend

- 🐍 Python/Flask
- 🗄️ SQLAlchemy
- 🔄 Flask-Migrate
- 📡 Flask-CORS
- 💾 SQLite

## 🏗️ Project Structure

```
library/
├── frontend/            # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/            # Flask server
│   ├── app.py
│   ├── models.py
│   └── migrations/
└── data/              # SQLite database
```

## 🚀 Getting Started

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
flask db upgrade
flask run
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🌐 API Endpoints

- `GET /books` - Retrieve all books
- `POST /books` - Add a new book
- `GET /members` - Retrieve all members
- `POST /members` - Add a new member
- `GET /loans` - Retrieve all loans
- `POST /loans` - Create a new loan

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 👥 Authors

- Stephen Prahl - *Initial work*

## 🙏 Acknowledgments

- React documentation
- Flask documentation
- SQLAlchemy documentation
