# RESTful API

A simple REST API built with Node.js and Express that serves user data from a mock JSON dataset.

## Tech Stack

- **Node.js** with CommonJS modules
- **Express v5**
- **Nodemon** for dev auto-reload
- **MOCK_DATA.json** as the data source

## Getting Started

```bash
# Clone the repo
git clone https://github.com/chirraaggggg/API.git
cd API

# Install dependencies
npm install

# Start the dev server
npm start
```

The server will start with nodemon and auto-restart on file changes.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | List all users |
| `GET` | `/api/users/:id` | Get a user by ID |
| `POST` | `/api/users` | Create a new user |
| `PATCH` | `/api/users/:id` | Update a user by ID |
| `DELETE` | `/api/users/:id` | Delete a user by ID |

## Example Requests

```bash
# Get all users
curl http://localhost:3000/api/users

# Get user with ID 1
curl http://localhost:3000/api/users/1

# Create a new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'

# Update user with ID 1
curl -X PATCH http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe"}'

# Delete user with ID 1
curl -X DELETE http://localhost:3000/api/users/1
```

## Project Structure

```
API/
├── index.js          # Express server & route handlers
├── MOCK_DATA.json    # Mock user dataset
├── package.json
└── task.txt          # Route planning notes
```
