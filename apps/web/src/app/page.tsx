export default function Home() {
  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-900 dark:text-white mb-4'>
            Scilent One
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
            Digital Project Template
          </p>
          <div className='inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg font-mono'>
            <span className='text-green-500 mr-2'>✓</span>
            <span className='text-gray-700 dark:text-gray-300'>
              Next.js + React + TypeScript + Tailwind CSS + Turborepo + Prisma
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
