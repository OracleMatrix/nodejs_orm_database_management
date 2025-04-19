# 🚀 ORM Database Management API

A professional and robust RESTful API service for managing users and posts, built with Node.js, Express, and Sequelize ORM. This project provides secure user authentication, comprehensive user and post management, and follows best practices for API development.

---

## ✨ Features

- 🔐 **User Authentication & Authorization**
  - User registration with secure password hashing (bcrypt)
  - User login with JWT token generation for session management
- 👥 **User Management**
  - Update user details (name, email, password)
  - Delete users
  - Retrieve users by ID, email, or name
  - List all users
- 📝 **Post Management**
  - Create posts linked to users
  - Update and delete posts
  - Retrieve posts by post ID or by user
  - List all posts with associated user information
- 🗄️ **Database & ORM**
  - Sequelize ORM for easy database management
  - Defined associations: One-to-many relationship between users and posts
- ⚙️ **Server & Middleware**
  - Express.js server setup
  - Middleware for security (Helmet) and logging (Morgan)
  - Environment variable management with dotenv

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd orm_database_management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with necessary environment variables (e.g., `PORT`, `JWT_SECRET_KEY`).

4. Run the server:
   ```bash
   npm start
   ```

5. Access the API endpoints under:
   - `/api/users` for user-related operations
   - `/api/posts` for post-related operations

---

## 📚 API Endpoints Overview

### Users
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login
- `PUT /api/users/update/:id` - Update user by ID
- `DELETE /api/users/delete/:id` - Delete user by ID
- `GET /api/users/` - Get all users
- `GET /api/users/getUserById/:id` - Get user by ID
- `GET /api/users/getUserByEmail/:email` - Get user by email
- `GET /api/users/getUserByName/:name` - Get user by name

### Posts
- `POST /api/posts/create` - Create a new post
- `GET /api/posts/getUserPosts/:userId` - Get posts by user ID
- `GET /api/posts/getPostById/:postId` - Get post by post ID
- `PUT /api/posts/update/:postId` - Update post by post ID
- `DELETE /api/posts/delete/:postId` - Delete post by post ID
- `GET /api/posts/` - Get all posts

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL / MySQL (or any supported SQL database)
- JWT for authentication
- Joi for input validation
- Bcrypt for password hashing
- Helmet for security headers
- Morgan for HTTP request logging
- dotenv for environment variable management

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📞 Contact

For any questions or support, please contact the project maintainer.

---

Made with ❤️ and ☕ by the ORM Database Management Team
