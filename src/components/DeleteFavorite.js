import { useEffect, useState } from "react";
export default function DeleteFavorite({ setFavCharacters, hero}) {
    // console.log(key)

    let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
    // let [newfavCharacters, setFavCharacters] = useState(currentStorage); 
    

    // useEffect(() =>
    // {
    //   setFavCharacters(currentStorage)
    // },[])


    function removeCharacter() {

         console.log(currentStorage);
       
        let newStorage = currentStorage.filter(prevHeroes => (hero.id !== prevHeroes.id))
            //update local storage
        localStorage.setItem("favs", JSON.stringify(newStorage)) 
         setFavCharacters(newStorage)
        }
    
    return (
        <div>
        <button onClick= { removeCharacter}> Remove from Favorites </button>
        </div>
    )
}