import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, addFavorite, removeFavorite, favorites } = useRecipeStore();

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button
              onClick={() =>
                favorites.includes(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
            >
              {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
