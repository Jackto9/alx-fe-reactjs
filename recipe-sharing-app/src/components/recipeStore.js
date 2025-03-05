import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Function to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Function to set the initial recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
