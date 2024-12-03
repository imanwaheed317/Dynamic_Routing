import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";

const countryData = [
  {
    name: "Pakistan",
    capital: "Islamabad",
    population: "241 million",
    language: "Urdu",
    flag: "/pak.jpg",
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: "83M",
    language: "German",
    flag: "/german.jpg",
  },
  {
    name: "Australia",
    capital: "Canberra",
    population: "26M",
    language: "English",
    flag: "/australia.jpg",
  },
  {
    name: "Canada",
    capital: "Ottawa",
    population: "38M",
    language: "English/French",
    flag: "/canada.jpg",
  },
  {
    name: "India",
    capital: "New Delhi",
    population: "1.3 Billion",
    language: "Hindi",
    flag: "/india.jpg",
  },
];

export default function CountryPage({ params }: { params: Promise<{ country_name: string }> }) {
  // Use React.use() to unwrap the params promise
  const { country_name } = React.use(params);

  const country = countryData.find(
    (c) => c.name.toLowerCase() === country_name.toLowerCase()
  );

  if (!country) {
    notFound(); // If no country matches, show 404 page
    return null; // Required to avoid rendering further
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#b166b1] to-gray-700 p-4">
      <div className="max-w-md w-full bg-[#2b4a5c] shadow-lg rounded-lg overflow-hidden">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-[400px] h-[220px] m-4 p-2 object-cover rounded-lg shadow-md"
        />
        <div className="text-blue-200 bg-gradient-to-b from-[#422a5e] via-teal-500 to-cyan-700 p-6">
          <h1 className="text-3xl font-bold text-green-200 underline text-center mb-4 font-serif">
            {country.name}
          </h1>
          <div className="space-y-2">
            <p className="text-lg">
              <span className="font-extrabold">Capital:</span> {country.capital}
            </p>
            <p className="text-lg">
              <span className="font-extrabold">Population:</span> {country.population}
            </p>
            <p className="text-lg">
              <span className="font-extrabold">Language:</span> {country.language}
            </p>
            <Link href="/" passHref>
              <button className="mt-6 bg-[#2ecfa7] hover:bg-cyan-200 text-gray-700 font-bold py-2 px-6 rounded">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
