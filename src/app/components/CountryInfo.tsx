import Image from 'next/image';

interface CountryInfoProps {
  Name: string;
  Capital: string;
  Language: string;
  Population: string;
}

const CountryInfo = ({ Name, Capital, Language, Population }: CountryInfoProps) => {
  let bgColor;
  let flagSrc;

  switch (Name) {
    case 'Pakistan':
      bgColor = 'bg-gradient-to-r from-green-400 to-green-200';
      flagSrc = '/pak.jpg'; 
      break;
    case 'India':
      bgColor = 'bg-gradient-to-r from-orange-400 to-yellow-300';
      flagSrc = '/india.jpg';
      break;
    case 'Germany':
      bgColor = 'bg-gradient-to-r from-yellow-400 to-red-600';
      flagSrc = '/german.jpg';
      break;
    case 'Canada':
      bgColor = 'bg-gradient-to-r from-red-400 to-pink-200';
      flagSrc = '/canada.jpg';
      break;
    case 'Australia':
      bgColor = 'bg-gradient-to-r from-gray-400 to-gray-200';
      flagSrc = '/australia.jpg';
      break;
  }

  return (
    <div className={`border p-6 rounded-lg shadow-lg ${bgColor} transition-transform transform hover:scale-105 hover:shadow-xl`}>
      <div className="flex items-center mb-4">
      {flagSrc && (
  <Image
    src={flagSrc}
    alt={`${Name} flag`}
    width={50}
    height={30}
    className="mr-4"
  />
)}
        <div className="text-3xl font-bold text-white">{Name}</div>
      </div>
      <p className="text-lg text-white">
        <span className="font-semibold">Capital:</span> {Capital}
      </p>
      <p className="text-lg text-white">
        <span className="font-semibold">Language:</span> {Language}
      </p>
      <p className="text-lg text-white">
        <span className="font-semibold">Population:</span> {Population}
      </p>
    </div>
  );
};

export default CountryInfo;
