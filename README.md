# boostUA

A full-stack web application built with React frontend and Node.js backend.

## Project Structure

```
boostUA/
├── backend/          # Node.js/Express backend
│   ├── src/
│   │   ├── server.js     # Main server file
│   │   └── routes/       # API routes
│   └── package.json
├── frontend/         # React frontend
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   ├── App.css       # Styling
│   │   └── ...
│   └── package.json
└── README.md
```

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Create React App** - React toolchain

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wehfis/boostUA.git
cd boostUA
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

#### Development Mode

1. Start the backend server (from the `backend` directory):
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:5000`

2. In a new terminal, start the React development server (from the `frontend` directory):
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:3000`

#### Production Mode

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Start the backend:
```bash
cd backend
npm start
```

## API Endpoints

### Health Check
- **GET** `/health` - Check server status

### API Routes
- **GET** `/api/hello` - Get a welcome message
- **GET** `/api/data` - Get sample data
- **POST** `/api/data` - Send data to the server

## Environment Variables

Create a `.env` file in the `backend` directory (see `.env.example`):

```
PORT=5000
NODE_ENV=development
```

## Features

- ✅ React frontend with modern hooks
- ✅ Express.js RESTful API
- ✅ CORS enabled for cross-origin requests
- ✅ Development and production configurations
- ✅ Hot reload for both frontend and backend
- ✅ Environment variable management
- ✅ Clean project structure

## Development

### Backend Development
The backend uses nodemon for hot reload. Any changes to backend files will automatically restart the server.

### Frontend Development
The React development server includes hot module replacement. Changes to React components will be reflected immediately without a full page reload.

## License

MIT License - see the [LICENSE](LICENSE) file for details

## Author

Dmytro Hranovskyi