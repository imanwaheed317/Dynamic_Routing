
import Link from "next/link";

const countries = [
  { name: "Pakistan" },
  { name: "Germany" },
  { name: "Australia" },
  { name: "Canada" },
  { name: "India" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#422a5e] via-teal-500 to-cyan-700 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-serif underline font-bold text-center mb-6 text-black">Country List</h1>
        <ul className="space-y-4">
          {countries.map((country) => (
            <li
              key={country.name}
              className="text-lg text-center bg-gradient-to-r from-[#5fa2b3] to-green-500 font-bold py-2 rounded-lg hover:shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <Link href={`/country/${country.name.toLowerCase()}`}>
                {country.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
