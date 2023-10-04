import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import useFetch from "../components/useFetch";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CharacterItemcopy from "../components/CharacterItemcopy";
import { responsive } from "../components/CarouselResponseData";

export default function Home() {



  let url = `https://akabab.github.io/superhero-api/api/all.json`;



  const { data: heroData, isPending, error } = useFetch(url)

  const filterSuperheroes = (query) => {
    let filteredHeroes = heroData?.filter((hero) =>
      hero?.biography?.publisher?.toLowerCase().includes(query.toLowerCase())
    );
    return filteredHeroes
  };

  //shuffle the results of the array
  const shuffleSliceArray = (array) => {
    return array.sort(() => Math.random() - 0.5).slice(0, 100);
  };

  const marvelData = shuffleSliceArray(filterSuperheroes('marvel')).map((hero) => (
    <div className="heroList">
      <div key={hero.id}></div>
      <CharacterItemcopy hero={hero} />
    </div>
  ));

  const dcData = shuffleSliceArray(filterSuperheroes('dc')).map((hero) => (
    <div className="heroList">
      <div key={hero.id}></div>
      <CharacterItemcopy hero={hero} />
    </div>
  ));

  const otherUniverseData = shuffleSliceArray(heroData?.filter(hero =>
    hero?.biography?.publisher?.toLowerCase() !== ('marvel comics') &&
    hero?.biography?.publisher?.toLowerCase() !== ('dc comics'))).map((hero) => (
      <div className="heroList">
        <div key={hero.id}></div>
        <CharacterItemcopy hero={hero} />
      </div>
    ));

  return (
    <div className="homepage">

      <h1>The Super Heroes/Villains Website</h1>
      <h2>This Website provides Hero/Villain from mutliple universes. Most Websites give you only once comic book creator source, but we give you Marvel, DC and more!.</h2>
      <h2>Please Scroll Thru and find what you're looking for or Click on the Search Page.</h2>

      {error && <div><h1>{error}</h1></div>}
      {isPending && <div><h1>LOADING...</h1></div>}
      {/* <CharacterList heroData={heroData} /> */}

      <div className="characterlists">

        <div className="marvel-characters">
          <h2>MARVEL</h2>
          <Carousel
            responsive={responsive}
            showDots={true}
          >
            {marvelData}
          </Carousel>
        </div>
        
        <div className="dc-characters">
          <h2>DC</h2>
          <Carousel
            responsive={responsive}
            showDots={true}
          >
            {dcData}
          </Carousel>
        </div>

        <div className="other-characters">
          <h2>OTHER</h2>
          <Carousel
            responsive={responsive}
            showDots={true}
          >
            {otherUniverseData}
          </Carousel>
        </div>
      </div>

    </div>
  );
}


