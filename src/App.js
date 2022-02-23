import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';
import { FormSearch } from 'grommet-icons';
import { Header, Heading, Box, Footer, Text, Button } from 'grommet'; 
import {
	Github, Instagram,
} from 'grommet-icons';


function App() {

  const APP_ID = '8363cdfe';
  const APP_KEY = '390e639a625a3287df80779ac520f63c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(['']);
  const [query, setQuery] = useState('chicken')
  
  useEffect( () => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Search a Recipe" />
        <button type="submit" className="search-button"><FormSearch size="40px"/></button>
      </form>
      </Header>
      <Box direction="row" wrap="true" width="100%" justify='center' gap="10px" >
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
        url={recipe.recipe.url}
        />
      ))}
      </Box>
      <Footer height="5rem" background="dark-2" justify="around">
        <Text>&copy; Ridvan</Text>
        <Box direction='row' gap="1rem">
        <Button><Github size="20%" color="light-6" href="https://github.com/RidvanR" /></Button>
				<Button><Instagram size="20%" color="light-6" href="https://www.instagram.com/ridvan.rul/" /></Button>
        </Box>
      </Footer>
    </div>
  );
}

export default App;
