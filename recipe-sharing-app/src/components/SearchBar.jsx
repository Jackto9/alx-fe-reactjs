import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
