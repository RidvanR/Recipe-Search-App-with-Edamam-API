import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';
import { FormSearch } from 'grommet-icons';
import { Header, Heading, Box } from 'grommet'; 


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
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    console.log(recipes);
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
      <Header
      background="status-ok"
      >
      <Heading color="white" margin={{left:"20px"}}>BeneReperit</Heading>
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Type a grocery" />
        <button type="submit" className="search-button"><FormSearch size="40px"/></button>
      </form>
      </Header>
      <Box direction="column" width="medium" justify='around' height="auto" margin={{right:"auto", left:"auto"}} >
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}
        time={recipe.recipe.totalTime}
        image={recipe.recipe.image}
        dishtype={recipe.recipe.dishType}
        countrytype={recipe.recipe.cuisineType}
        //url={recipe.recipe.url}
        />
      ))}
      </Box>
    </div>
  );
}

export default App;
