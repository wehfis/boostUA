# Backend API

Express TypeScript backend with Sequelize ORM and PostgreSQL.

## Features

- ✅ Express 5 web framework
- ✅ TypeScript for type safety
- ✅ Sequelize ORM for database operations
- ✅ PostgreSQL database
- ✅ CORS enabled
- ✅ Environment variable configuration
- ✅ RESTful API structure
- ✅ Automatic database synchronization

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts      # Database configuration
│   ├── models/
│   │   ├── index.ts         # Models aggregation
│   │   └── User.ts          # User model example
│   ├── routes/
│   │   ├── index.ts         # Routes aggregation
│   │   └── userRoutes.ts    # User routes
│   ├── controllers/
│   │   └── userController.ts # User controller
│   ├── middleware/          # Custom middleware (empty for now)
│   ├── app.ts              # Express app configuration
│   └── server.ts           # Server entry point
├── .env.example            # Environment variables template
├── nodemon.json           # Nodemon configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```bash
cp .env.example .env
```

3. Update the `.env` file with your database credentials:

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=boostua_db
DB_USER=postgres
DB_PASSWORD=your_password
```

4. Create the PostgreSQL database:

```bash
createdb boostua_db
```

Or using psql:

```sql
CREATE DATABASE boostua_db;
```

### Running the Application

#### Development Mode

```bash
npm run dev
```

The server will start on `http://localhost:5000` with hot reload enabled.

#### Production Mode

1. Build the TypeScript code:

```bash
npm run build
```

2. Start the server:

```bash
npm start
```

## API Endpoints

Base URL: `http://localhost:5000/api`

### Health Check

- `GET /health` - Check if server is running

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

### Example Requests

#### Create a User

```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
  }'
```

#### Get All Users

```bash
curl http://localhost:5000/api/users
```

#### Get User by ID

```bash
curl http://localhost:5000/api/users/1
```

#### Update User

```bash
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe"
  }'
```

#### Delete User

```bash
curl -X DELETE http://localhost:5000/api/users/1
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production server
- `npm test` - Run tests (not implemented yet)

## Database Models

### User Model

```typescript
{
  id: number;           // Primary key, auto-increment
  name: string;         // User's name (required)
  email: string;        // User's email (required, unique)
  createdAt: Date;      // Timestamp (auto-generated)
  updatedAt: Date;      // Timestamp (auto-generated)
}
```

## Adding New Models

1. Create a new model file in `src/models/`:

```typescript
// src/models/YourModel.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface YourModelAttributes {
  id: number;
  // Add your attributes
}

interface YourModelCreationAttributes extends Optional<YourModelAttributes, 'id'> {}

class YourModel extends Model<YourModelAttributes, YourModelCreationAttributes> implements YourModelAttributes {
  public id!: number;
  // Add your properties
}

YourModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Add your fields
  },
  {
    sequelize,
    tableName: 'your_table_name',
    timestamps: true,
  }
);

export default YourModel;
```

2. Add the model to `src/models/index.ts`:

```typescript
import YourModel from './YourModel';

const models = {
  User,
  YourModel,
};
```

3. Create routes and controllers as needed.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment (development/production) | development |
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 5432 |
| DB_NAME | Database name | boostua_db |
| DB_USER | Database user | postgres |
| DB_PASSWORD | Database password | postgres |

## Technologies

- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Sequelize** - ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **nodemon** - Development auto-reload
- **ts-node** - TypeScript execution

## License

MIT
