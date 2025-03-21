import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
        <Link to="/add-recipe" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Add Recipe
        </Link>
      </div>
      {/* Recipe List (Already Implemented) */}
    </div>
  );
};

export default HomePage;
