# Frontend - boostUA

Next.js 15 application with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 15 with App Router
- ✅ React 19
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality
- ✅ API client for backend communication

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind
├── lib/
│   └── api.ts            # API client for backend
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file (optional):

```bash
cp .env.example .env.local
```

Update the environment variables if needed:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Running the Application

#### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files.

#### Production Mode

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## API Client

The application includes an API client (`lib/api.ts`) for communicating with the backend:

```typescript
import { api } from '@/lib/api';

// Get all users
const users = await api.users.getAll();

// Create a user
const newUser = await api.users.create({
  name: 'John Doe',
  email: 'john@example.com'
});

// Update a user
await api.users.update(1, { name: 'Jane Doe' });

// Delete a user
await api.users.delete(1);
```

## Styling with Tailwind CSS

This project uses Tailwind CSS for styling. You can use utility classes directly in your components:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello World
</div>
```

Tailwind configuration can be modified in `tailwind.config.ts`.

## TypeScript Configuration

TypeScript is configured with strict mode enabled. The configuration can be found in `tsconfig.json`.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| NEXT_PUBLIC_API_URL | Backend API URL | http://localhost:5000/api |

Note: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
