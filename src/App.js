import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';
import { FormSearch } from 'grommet-icons';


function App() {

  const APP_ID = '8363cdfe';
  const APP_KEY = '390e639a625a3287df80779ac520f63c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(['']);
  const [query, setQuery] = useState('chicken')
  
  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Type a grocery" />
        <button type="submit" className="search-button"><FormSearch size="large"/></button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}
        image={recipe.recipe.image}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
