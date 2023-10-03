import { Link } from "react-router-dom";
import AddFavorite from "./AddFavorite";
import DeleteFavorite from "./DeleteFavorite";
import { useState } from "react";

export default function CharacterItemcopy({ hero }) {

    let [pageSource, setPageSource] = useState('characterlist');


    return (
        <div className="heroDiv1" key={hero.id}>
            <Link to={`/characterdetails/${hero.id}`}>
                <img src={hero.images?.sm || hero.image?.url} alt={hero.name} />
            </Link>
            <div className="heroInfo">
                <h3 className="heroName">{hero.name} </h3>

                {/* <button onClick={ () => {favoriteCharacter(hero)}}>
                    Add to Favorites</button> */}
                
                {pageSource !=='delFavorites'? <AddFavorite hero={hero} /> : <p></p> }

            </div>
        </div>
    )
}