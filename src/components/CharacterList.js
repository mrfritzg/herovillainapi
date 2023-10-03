import CharacterItem from "./CharacterItem";
// import AddFavorite from "./AddFavorite";
import { useEffect, useState } from "react";

export default function CharacterList({ heroData }) {
    
    let [pageSource, setPageSource] = useState('characterlist'); 

    //  console.log(heroData);
    return (
        <div className="heroList">
            
            
          
            {heroData.map(hero => {
                return (
                    <div key={hero.id}>
                    <CharacterItem pageSource={pageSource} key={hero.id} hero={hero}/>
                    
                    </div>
                )})}
        </div>
    )
}