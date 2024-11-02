"use client";  // Client Component

import { useRouter } from 'next/navigation'; 
import CountryInfo from '@app/components/CountryInfo';
import { countriesData } from '@app/data/countriesData';

interface CountryPageProps {
  params: { country: string };
}

export default function CountryPage({ params }: CountryPageProps) {
  const router = useRouter();
  const CountryName = params.country;
  const country = countriesData[CountryName as keyof typeof countriesData];

  if (!country) {
    return <div className='text-center text-rose-600 font-semibold text-2xl mt-20'>Country Not Found</div>;
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-red-200'>
      <div className='max-w-lg w-full bg-white shadow-xl p-10 rounded-lg transform transition-all duration-500 hover:scale-305'>
        <h1 className='text-4xl font-bold text-center mb-6 text-gray-800'>{country.Name}</h1>
        <CountryInfo
          Name={country.Name}
          Population={country.Population}
          Capital={country.Capital}
          Language={country.Language}
        />
        <button
          onClick={() => router.push('/')}
          className='mt-8 bg-blue-300 text-solid py-2 px-6 rounded-lg shadow-md hover:bg-blue-200 transition-all duration-300 transform hover:scale-105'>
          Back Home
        </button>
      </div>
    </div>
  );
}
