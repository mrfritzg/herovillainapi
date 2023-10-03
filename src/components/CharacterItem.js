import { Link } from "react-router-dom";
import AddFavorite from "./AddFavorite";
import DeleteFavorite from "../components/DeleteFavorite";

export default function CharacterItem({ pageSource,hero }) {

   return (
        <div className="heroDiv" key={hero.id}>
            <Link to={`/characterdetails/${hero.id}`}>
                <img src={hero.images?.sm || hero.image?.url} alt={hero.name} />
            </Link>
            <div className="heroInfo">
                <h3 className="heroName">{hero.name} </h3>
                {pageSource !=='delFavorites'? <AddFavorite hero={hero} /> : <p></p> }

            </div>
        </div>
    )
}