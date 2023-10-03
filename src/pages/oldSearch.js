import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import CharacterItem from "../components/CharacterItem";


export default function Search() {
  let [characters, setCharacters] = useState(null);
  const [isPending, setIsPending] = useState(true);


   async function getCharacters(name) {
    // console.log(name);

    const key = '1381472152670820';
    let url = `https://www.superheroapi.com/api.php/${key}/search/${name}`;

    try {
      let response = await fetch(url);
       let data = await response.json();
       setCharacters(data.results);
       setIsPending(false);
    // console.log(response)
    // console.log(data.results)
    } catch (error) {
      console.log("something went wrong");
    }
  }

  useEffect(() => {
    getCharacters("");
  }, []);

  if (characters) {
    return (
      
      <div className="searchPage">
        <h1>Search for a Hero or Villian</h1>
        <SearchForm getCharacters={getCharacters} />
        <div className="heroList">
        {isPending && <div><h1>LOADING...</h1></div> }
        {characters.map(hero => {
          return (
            <div  key={hero.id}>
            <CharacterItem hero={hero} />   
            
            </div>
          )
        })}
        </div>
      </div>
    );
  } else {
    // if character is null 
    return (
      <div className="searchPage">
        <h1>Search for a Hero or Villian</h1>
        <SearchForm getCharacters={getCharacters} />
      </div>
    );
  }
}
