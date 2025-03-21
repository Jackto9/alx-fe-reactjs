import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipes from '../data.json';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(recipes);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="block">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
