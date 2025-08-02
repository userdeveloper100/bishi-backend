# 📦 Bishi Management System – Backend

A backend API for managing **Bishi (Chit Fund)** groups, contributions, winners, and member participation. Built with **Node.js**, **Express**, **PostgreSQL**, and **Sequelize ORM**.

---

## 🚀 Features

- User authentication & language preferences
- Group creation & membership management
- Monthly contributions & draw system
- Winner selection tracking
- Audit logging
- Scalable database schema with Sequelize

---

## 🧱 Tech Stack

- **Node.js** + **Express**
- **PostgreSQL**
- **Sequelize ORM**
- **dotenv** for config
- **sequelize-cli** for DB migrations
- API documentation (Swagger planned)

---

## 📁 Project Structure

```
bishi-backend/
├── config/
│   └── config.js
├── models/
├── migrations/
├── seeders/
├── routes/
├── controllers/
├── middlewares/
├── .env
├── app.js
└── README.md
```

---

## ⚙️ Environment Setup

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd bishi-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file in project root

```env
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name
DB_HOST=localhost
PORT=5000
```

---

## 🧪 DB & Sequelize Setup

### 1. Initialize Sequelize (if not done)

```bash
npx sequelize-cli init
```

### 2. Create Database

```bash
npx sequelize-cli db:create
```

### 3. Generate Models + Migrations

Example:
```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
```

*(Use full model list from ChatGPT or scripts you've already run.)*

### 4. Run Migrations

```bash
npx sequelize-cli db:migrate
```

---

## 🧑‍💻 Start the Server

```bash
npm run dev
# OR
node app.js
```

Server will run on `http://localhost:5000` (or your specified PORT).

---

## 🧰 Useful Commands

| Command                              | Purpose                          |
|-------------------------------------|----------------------------------|
| `npx sequelize-cli db:create`       | Create database                  |
| `npx sequelize-cli db:migrate`      | Run all migrations               |
| `npx sequelize-cli db:migrate:undo` | Rollback last migration          |
| `npx sequelize-cli seed:all`        | Run all seeders (if any)         |
| `npm run dev`                       | Start dev server with nodemon    |

---

## 🌐 API Documentation (Planned)

API Swagger docs will be available at:

```
http://localhost:5000/api-docs
```

---

## ✅ TODOs

- [ ] Add Swagger support
- [ ] Implement JWT Authentication
- [ ] Enable multi-language (Marathi, Hindi, English)
- [ ] Payment integration (future version)

---

## 👨‍💻 Author

**Shailendra Pardeshi**  
Senior Full Stack Developer  
🔗 [LinkedIn](#) | ✉️ shailendra@example.com

---
