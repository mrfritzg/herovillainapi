export default function AddFavorite({ hero}) {
    
    function favoriteCharacter() {

        //get the current hero objects from local storage
        let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
        // console.log(currentStorage);
       
        //check if the hero is already a favorite
        // initial set a variable to false that it isn't there
        let isItemThere = false;
        currentStorage.forEach(prevHeroes => {
            //if true, set isItemThere is true
            if (hero.id === prevHeroes.id) {
                //send an alert that the character is already there
                alert(`That Character is already in to your Favorites!`)
                isItemThere = true;
            }
        });
        // if item is not there -- add it to localstorage
        if (!isItemThere) {
            //update local storage
            localStorage.setItem("favs", JSON.stringify([...currentStorage, hero])) 
        }
    }
    return (
        <div>
        <button onClick= {favoriteCharacter}>
    Add to Favorites </button>
        </div>
    )
}