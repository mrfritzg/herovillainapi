import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CharacterList from '../components/CharacterList';
import useFetch from "../components/useFetch";

export default function Search() {
    // state for text variable in Input search field
    const [searchText, setSearchText] = useState('');

    // state for the preview searchlist variable
    const [searchList, setSearchList] = useState([]);

    // state for the variable that will hold the API Data
    const [allData, setAllData] = useState([]);

    //a variable that determines the search state status in order to reset certain input
    // and data fields
    const [submitSearch, setSubmitSearch] = useState(false);


    // fetchSuperheroes is retreiving superheros by name, this API has a limited
    // search features & it doesn't allow me to get all superheroes on one call
    const fetchSuperheroes = async (name) => {
        // Fetch and set all superhero data here
        // Example: Use your API call here to get superhero data
        const key = '1381472152670820';
        let url = `https://www.superheroapi.com/api.php/${key}/search/${name}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.response === 'success') {
                setSearchList(data.results);
                // console.log(searchList)
                setAllData(data.results);
                // console.log(data.results);  
                // console.log(data);    
            } else throw new Error('Parameter is not a number!');

        } catch (error) {
            console.error('Error fetching superhero data:', error);
            // return {'error': error.message }
            setAllData([error])
        }
    };

    const handleInputChange = (event) => {
        let inputValue = event.target.value;
        setSubmitSearch(false);
        setSearchText(inputValue);
        // console.log(inputValue.length)
        //if the search text is more than 1 letter, start the fetch
        if (inputValue.length > 1) {
            fetchSuperheroes(inputValue);
        }
        //if the search text is 1 letter or less, clear the search list
        else if (inputValue.length < 2) {
            setSearchList([]);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(searchText);
        setAllData(searchList);
        setSubmitSearch(true);
        setSearchText('');
    }

    return (
        <div className="container-fluid text-center">
            {/*}  <div className="characterlists">

                <div className="marvel-characters">
                    <h2>MARVEL</h2>
                    <CharacterList heroData={shuffleSliceArray(filterSuperheroes('marvel'))} />
                </div>
                <div className="dc-characters">

                <h2>DC</h2>
                <CharacterList heroData={shuffleSliceArray(filterSuperheroes('dc'))} />
                </div>
                <div className="other-characters">
                <h2>OTHER</h2>

                <CharacterList heroData={shuffleSliceArray(heroData?.filter(hero => 
    hero?.biography?.publisher?.toLowerCase() !==('marvel comics') && 
    hero?.biography?.publisher?.toLowerCase() !==('dc comics') ))} />
                </div>
            </div> */}
            <div className="searchApp ">
                <div className="searchApp-data">

                    <h1 className="search-page-Title">Search for a Hero or Villain</h1>
                    {/* SEARCH FORM */}
                    <form onSubmit={handleSubmit} className='app-header-search'>
                        <input
                            type="text"
                            placeholder="Search superheroes..."
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button className="search-btn">
                            <i className="fas fa-search"></i>
                        </button>

                        {/* PREVIEW SEARCH LIST */}
                        <div className="search-list">
                            {!submitSearch && searchList?.map((hero) => {
                                return (
                                    <Link className="search-list-item-link" to={`/characterdetails/${hero.id}`} key={hero.id}>
                                        <div className="search-list-item">
                                            <img src={hero.image.url ? hero.image.url : ""} alt={hero.name} />
                                            <p>{hero.name}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </form>
                </div>


            </div>
            {/* Display the results of the character search */}
            <div className="character-results">
                {submitSearch && <CharacterList heroData={allData} />}
            </div>
        </div>
    );
}
