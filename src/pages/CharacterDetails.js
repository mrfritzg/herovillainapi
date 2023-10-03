import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddFavorite from "../components/AddFavorite";

export default function CharacterDetails (props) {
    let { symbol } = useParams(); // -> { symbol: ''}
    let [character2, setCharacter2] = useState({});
    let navigate = useNavigate() //->returns a function

    function goBack() {
        navigate(-1)
        }  

        
    async function getCharacter2() {
        // console.log(id);
        let key = '1381472152670820';
        let url = `https://www.superheroapi.com/api.php/${key}/${symbol}`;

        // let url = `https://akabab.github.io/superhero-api/api/id/${symbol}.json`;
        try {
            let response = await fetch(url);
            //    console.log(response)
             let data = await response.json();
            //   console.log(data) 
            // console.log(data.connections) 
            //   console.log(data.connections['group-affilliation']) 
            // console.log(character2)
             setCharacter2(data);
            // console.log(character2.connections)
        } catch (error) {
            console.log("something went wrong");
        }
    
    }
    // console.log(character2)
    // console.log(character2.connections.groupAffiliation)
//   console.log(character2.connections?.["group-affiliation"])
    useEffect(() => {
        getCharacter2();
       
    }, []);
   
    return (
        
        <div>
            <div>
                <button className="backBtn"onClick={goBack}>{"BACK"}</button>
                </div>
            {/* console.log({character2}) */}
            <img src={character2.image?.url} alt={character2.name} />
            
            <p>Code Name: {character2.name}</p>
            <p>Full Name: {character2.biography?.["full-name"]}</p>
            POWER STATS:
            <ul>
            <li>Combat: {character2.powerstats?.combat} </li>
            <li>Durability: {character2.powerstats?.durability} </li>
            <li>Intelligence: {character2.powerstats?.intelligence} </li>
            <li>Power: {character2.powerstats?.power} </li>
            <li>Speed: {character2.powerstats?.speed} </li>
            <li>Strength: {character2.powerstats?.strength} </li>
            </ul>
            <p>Biography:</p>
            <ul>
            <li>Aliases: {character2.biography?.aliases.toString(" ")}</li>
            <li>Alignment: {character2.biography?.alignment==="good"?"Hero":"Villian"}</li>
            <li>-Alter-Egos: {character2.biography?.["alter-egos"]}</li>
            <li>-Place Of Birth: {character2.biography?.["place-of-birth"]}</li>
            <li>-Publisher: {character2.biography?.publisher}</li>
            <li>-First-Appearance: {character2.biography?.["first-appearance"]}</li>
            </ul>
            <p>Group-Affiliations: {character2.connections?.["group-affiliation"]}</p>
            <p>Work: {character2.work?.occupation}</p>
            <AddFavorite hero={character2} />

        </div>
    )
}