import { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault(); // Prevents the default form submit action
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search Chim-Chim"
        className="p-2 border rounded-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchComponent;