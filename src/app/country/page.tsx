import Link from 'next/link';
export default function CountriesPage() {
  const countriesList = [
    { name: "Pakistan", slug: "Pakistan", flag: "/pakistan.png" },
    { name: "Germany", slug: "Germany", flag: "/germany.png" },
    { name: "Australia", slug: "Australia", flag: "/flags/australia.png" },
    { name: "Canada", slug: "Canada", flag: "/flags/canada.png" },
    { name: "India", slug: "India", flag: "/flags/india.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Countries List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {countriesList.map((country) => (
          <li
            key={country.slug}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-24 h-16 object-contain mb-4"
              />
              <Link
                href={`/countries/${country.slug}`}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {country.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
