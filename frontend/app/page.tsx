export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to boostUA
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Full-stack application with Next.js, TypeScript, Tailwind CSS, Express, and PostgreSQL
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Frontend</h2>
            <ul className="text-left space-y-2 text-gray-600 dark:text-gray-300">
              <li>✓ Next.js 15 with App Router</li>
              <li>✓ React 19</li>
              <li>✓ TypeScript</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ ESLint</li>
            </ul>
          </div>
          
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">Backend</h2>
            <ul className="text-left space-y-2 text-gray-600 dark:text-gray-300">
              <li>✓ Express 5</li>
              <li>✓ TypeScript</li>
              <li>✓ Sequelize ORM</li>
              <li>✓ PostgreSQL</li>
              <li>✓ RESTful API</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Run both frontend and backend in development mode:
          </p>
          <code className="bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded text-sm">
            npm run dev
          </code>
        </div>
      </main>
      
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Built with ❤️ for Ukraine</p>
      </footer>
    </div>
  );
}
