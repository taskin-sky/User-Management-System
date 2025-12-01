User Management System
A simple User Management System backend built with Express.js and MongoDB following the MVC pattern.

📁 Project Structure
user-management-system | └── backend │ ├── controllers/ │ └── userController.js │ ├── models/ │ └── User.js │ ├── routes/ │ └── userRoutes.js │ ├── config/ │ └── db.js │ ├── app.js ├── server.js ├── README.md ├── .env ├── .gitignore └── package.json

⚡ Features / API Endpoints
All routes are prefixed with /api/users.

Method	Endpoint	Description
POST	/create-user	Create a new user
GET	/read-user	Read user data
PUT	/update-user	Update user data
DELETE	/delete-user	Delete a user
GET	/all-users	Get all users
GET	/user/:id	Get a user by ID
POST	/login	User login
POST	/logout	User logout
PUT	/change-password	Change user password
PUT	/update-profile	Update user profile
PUT	/make-admin/:id	Make a user an admin
PUT	/remove-admin/:id	Remove admin role from a user
GET	/search	Search users
GET	/filter	Filter users
PATCH	/block-user/:id	Block a user
PATCH	/unblock-user/:id	Unblock a user
POST	/verify-email	Verify user email
POST	/resend-verification	Resend verification email
POST	/upload-profile-picture	Upload user profile picture
DELETE	/delete-account	Delete own account
⚙️ Setup Instructions
Clone the repository git clone https://github.com/taskin-sky/User-Management-System.git cd user-management-system/backend

Install dependencies npm install

Setup environment variables Create a .env file in backend: PORT=3000 MONGO_URL=mongodb_connection_string

Run the server npm run dev

Test the API Open http://localhost:3000/ |in your browser Use tools like Postman to test API endpoints

🛠 Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv
- CORS ( not needed )
📌 Notes Follows MVC architecture. All responses are JSON. 404 routes are handled with a catch-all middleware.

🗂 MVC Flow Diagram
  ┌──────────────┐
  │   Client     │
  │ (Browser /   │
  │   Postman)   │
  └─────┬────────┘
        │ HTTP Request
        ▼
  ┌──────────────┐
  │   Routes     │
  │ (userRoutes) │
  └─────┬────────┘
        │ Calls controller functions
        ▼

  ┌───────────────────┐
  │   Models          │
  │ (User.models.js)  │
  └─────┬─────────────┘
        │ Reads/Writes to
        ▼
  ┌──────────────┐
  │   Database   │
  │  (MongoDB)   │
  └──────────────┘
©Taskin_M_Mubassir
