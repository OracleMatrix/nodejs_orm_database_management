# 🚀 ORM Database Management API

A professional and enterprise-grade RESTful API service built with Node.js, Express, and Sequelize ORM. This project demonstrates advanced database management, secure authentication, and comprehensive CRUD operations for a social media-like platform.

## 🌟 Key Features

### 🔐 Security & Authentication

- **JWT-based Authentication System**
  - Secure user registration with bcrypt password hashing
  - Token-based session management
  - Role-based access control
  - Secure password reset functionality
- **API Security**
  - Helmet.js for HTTP security headers
  - Rate limiting implementation
  - CORS configuration
  - Input validation and sanitization

### 💾 Database & Data Management

- **Advanced ORM Implementation**
  - Sequelize ORM with PostgreSQL/MySQL support
  - Complex database relationships and associations
  - Efficient query optimization
  - Transaction management
  - Data validation and constraints
- **Data Models**
  - User management with profile customization
  - Post creation and management
  - Nested comment system
  - Like/Reaction system
  - Media attachment support

### 🛠️ Technical Features

- **API Architecture**
  - RESTful API design principles
  - Modular and scalable architecture
  - Middleware implementation
  - Error handling and logging
  - Request validation
- **Development Tools**
  - Hot reloading with nodemon
  - Environment configuration
  - API documentation with Swagger
  - Testing setup with Jest
  - Code linting and formatting

## 🚀 Getting Started

1. **Clone and Setup**

   ```bash
   git clone https://github.com/OracleMatrix/nodejs_orm_database_management
   cd orm_database_management
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file with:

   ```
   PORT=3000
   JWT_SECRET_KEY=your_secret_key
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   ```

4. **Run the Application**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 📚 API Documentation

Access the Swagger documentation at:

```
http://localhost:3000/api-docs
```

### Core Endpoints

#### User Management

- `POST /api/users/register` - User registration
- `POST /api/users/login` - Authentication
- `PUT /api/users/update/:id` - Profile update
- `DELETE /api/users/delete/:id` - Account deletion
- `GET /api/users/` - User listing
- `GET /api/users/getUserById/:id` - User details

#### Content Management

- `POST /api/posts/create` - Create post
- `GET /api/posts/getUserPosts/:userId` - User posts
- `PUT /api/posts/update/:postId` - Edit post
- `DELETE /api/posts/delete/:postId` - Remove post

#### Interaction Features

- `POST /api/comments/create` - Add comment
- `GET /api/comments/post/:postId` - Post comments
- `POST /api/likes` - Like post
- `DELETE /api/likes/delete/:id` - Remove like

## 🛠️ Technology Stack

### Core Technologies

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL/MySQL
- **ORM**: Sequelize
- **Authentication**: JWT, bcrypt

### Development Tools

- **Package Manager**: npm
- **Code Quality**: ESLint, Prettier
- **Testing**: Jest
- **Documentation**: Swagger/OpenAPI
- **Version Control**: Git

### Libraries & Middleware

- **Security**: Helmet, cors
- **Validation**: Joi
- **Logging**: Morgan, Winston
- **Utilities**: lodash
- **File System**: fs, path
- **Environment**: dotenv
- **Development**: nodemon

## 📊 Project Structure

```
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── app.js          # Application entry
├── tests/              # Test files
├── .env               # Environment variables
├── .gitignore         # Git ignore file
└── package.json       # Project dependencies
```

## 🔍 Code Quality & Standards

- Clean code architecture
- SOLID principles implementation
- REST API best practices
- Comprehensive error handling
- Detailed API documentation
- Code comments and documentation
- Consistent coding style

## 📈 Performance Optimization

- Database query optimization
- Caching implementation
- Connection pooling
- Response compression
- Rate limiting
- Resource cleanup

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📞 Contact & Support

For questions or support, reach out at [ehsanmohamadipoor@gmail.com](mailto:ehsanmohamadipoor@gmail.com)

---

<div align="center">
  <p>Made with ❤️ by Ehsan Mohamadipoor</p>
  <p>© 2024 ORM Database Management API</p>
</div>
