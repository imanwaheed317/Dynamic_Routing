import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-purple-900 to-purple-400'>
      <h1 className='text-5xl font-serif mb-8 text-gray-900 drop-shadow-lg'><em>Countries Information</em></h1>
      <ul className='space-y-4'>
        <li>
          <Link href="/countries/Pakistan" className='block p-4 rounded-lg bg-green-500 text-white transition-transform transform hover:scale-105 hover:bg-green-700 shadow-lg'>
            🇵🇰 <strong>Pakistan</strong>
          </Link>
        </li>
        <li>
          <Link href="/countries/German" className='block p-4 rounded-lg bg-yellow-500 text-white transition-transform transform hover:scale-105 hover:bg-orange-800 shadow-lg'>
            🇩🇪 <strong>German</strong>
          </Link>
        </li>
        <li>
          <Link href="/countries/Australlia" className='block p-4 rounded-lg bg-blue-900 text-white transition-transform transform hover:scale-105 hover:bg-purple-400 shadow-lg'>
            🇦🇺 <strong>Australia</strong>
          </Link>
        </li>
        <li>
          <Link href="/countries/Canada" className='block p-4 rounded-lg bg-pink-500 text-white transition-transform transform hover:scale-105 hover:bg-pink-600 shadow-lg'>
            🇨🇦 <strong>Canada</strong>
          </Link>
        </li>
        <li>
          <Link href="/countries/India" className='block p-4 rounded-lg bg-sky-500 text-white transition-transform transform hover:scale-105 hover:bg-blue-900 shadow-lg'>
            🇮🇳 <strong>India</strong>
          </Link>
        </li>
      </ul>
    </div>
  );
}
