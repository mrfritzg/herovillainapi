import CharacterItem from "../components/CharacterItem"
import { useEffect, useState } from "react";
import DeleteFavorite from "../components/DeleteFavorite";

export default function Favorites() {
    
    let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
    let [favCharacters, setFavCharacters] = useState(currentStorage); 
    let [pageSource, setPageSource] = useState('delFavorites'); 

   return (
        
        <div>
            <h1>Here is your List of Favorite Heros/Villians</h1>
{favCharacters.map(hero => {
          return (
            <div key={hero.id}>
            <CharacterItem pageSource={pageSource}  hero={hero} />   
            <DeleteFavorite  key={() => crypto.randomUUID()} setFavCharacters={setFavCharacters} hero={hero} />
            
            </div>
          )
        })}
        </div>
    )
}