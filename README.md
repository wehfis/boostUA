# boostUA

A full-stack application with React TypeScript Next.js Tailwind CSS frontend and Node.js TypeScript Express PostgreSQL Sequelize backend.

## Project Structure

```
boostUA/
├── frontend/          # Next.js React TypeScript with Tailwind CSS
├── backend/           # Express TypeScript API with Sequelize ORM
└── package.json       # Root package.json with scripts to manage both
```

## Tech Stack

### Frontend
- **Next.js 15** - React framework with server-side rendering
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Sequelize** - ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/wehfis/boostUA.git
cd boostUA
```

### 2. Install dependencies

Install all dependencies for both frontend and backend:

```bash
npm run install:all
```

Or install separately:

```bash
# Root dependencies
npm install

# Frontend dependencies
cd frontend && npm install

# Backend dependencies
cd backend && npm install
```

### 3. Setup PostgreSQL Database

Create a PostgreSQL database:

```bash
createdb boostua_db
```

Or using psql:

```sql
CREATE DATABASE boostua_db;
```

### 4. Configure Backend Environment

Create a `.env` file in the `backend` directory:

```bash
cd backend
cp .env.example .env
```

Update the `.env` file with your database credentials:

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=boostua_db
DB_USER=postgres
DB_PASSWORD=your_password
```

### 5. Run the Application

#### Development Mode

Run both frontend and backend concurrently:

```bash
npm run dev
```

Or run separately:

```bash
# Backend (runs on http://localhost:5000)
npm run dev:backend

# Frontend (runs on http://localhost:3000)
npm run dev:frontend
```

#### Production Mode

Build both applications:

```bash
npm run build
```

Start the production servers:

```bash
npm run start:backend
npm run start:frontend
```

## API Endpoints

The backend API runs on `http://localhost:5000/api`

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

### Health Check

- `GET /health` - Check if server is running

## Project Features

### Frontend
- ✅ Next.js App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ ESLint configuration
- ✅ Responsive design ready

### Backend
- ✅ Express server with TypeScript
- ✅ Sequelize ORM with PostgreSQL
- ✅ RESTful API structure
- ✅ CORS enabled
- ✅ Environment variable configuration
- ✅ User model example
- ✅ CRUD operations
- ✅ Auto database sync

## Development

### Backend Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts      # Database configuration
│   ├── models/
│   │   ├── index.ts         # Models index
│   │   └── User.ts          # User model
│   ├── routes/
│   │   ├── index.ts         # Routes index
│   │   └── userRoutes.ts    # User routes
│   ├── controllers/
│   │   └── userController.ts # User controller
│   ├── middleware/          # Custom middleware
│   ├── app.ts              # Express app setup
│   └── server.ts           # Server entry point
├── .env.example            # Environment variables template
├── nodemon.json           # Nodemon configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

### Frontend Structure

```
frontend/
├── app/
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Scripts

### Root Scripts
- `npm run dev` - Run both frontend and backend in development mode
- `npm run build` - Build both frontend and backend
- `npm run install:all` - Install dependencies for all packages

### Backend Scripts
- `npm run dev` - Run backend in development mode with hot reload
- `npm run build` - Build backend TypeScript to JavaScript
- `npm run start` - Run built backend in production mode

### Frontend Scripts
- `npm run dev` - Run frontend in development mode
- `npm run build` - Build frontend for production
- `npm run start` - Run built frontend in production mode
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Dmytro Hranovskyi