'use client'
import { useState, useEffect } from "react";

type DonarSearchInputProps = {
  onSelect?: (donor: Donor) => void;
};

type Donor = {
  id: number;
  name: string;
};

export default function DonorSearchInput({ onSelect } : DonarSearchInputProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length > 1) {
        fetch(`/api/donor?search=${encodeURIComponent(query)}`)
          .then((res) => res.json())
          .then((data) => setResults(data))
          .catch((err) => console.error("Search failed", err));
      } else {
        setResults([]);
      }
    }, 300); // debounce

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelect = (donor: Donor) => {
    setQuery(donor.name);
    setShowDropdown(false);
    onSelect?.(donor);
  };

  return (
    <div className="relative">
      <input
        type="text"
        required
        className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors bg-gray-50 hover:bg-white"
        placeholder="Enter donor name"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
      />
      {showDropdown && results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
          {results.map((donor: Donor) => (
            <li
              key={donor.id}
              onClick={() => handleSelect(donor)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
            >
              {donor.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
