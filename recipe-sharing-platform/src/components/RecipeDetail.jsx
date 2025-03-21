import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipes from '../data.json'; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl mt-10">Recipe not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <p className="leading-relaxed">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
