import React from 'react';
import Card from './Card.jsx';


const CardList = ({ creatures, homeworlds, races, films } ) => {
    return (
        <div>
            {
                
                creatures.map((character, i) => {
                   
                    let planet = "";
                    for (let j = 0; j < homeworlds.results.length; j++) {
                      if (character.homeworld === homeworlds.results[j].url) {
                        planet = homeworlds.results[j].name;
                      }
                    }

                    let race = "";
                    for (let c = 0; c < races.results.length; c++) {
                        if (character.species[c] === races.results[c].url) {
                            race = races.results[c].name;
                        }
                    }

                    let film = "";
                    for (let a = 0; a < films.results.length; a++) {
                        for (let b = 0; b < character.films.length; b++) {
                            if (character.films[b] === films.results[a].url) {
                                film += films.results[a].title + ', ';
                            }
                        }
                    }

                    return (
                        <Card
                            key={i} 
                            name={character.name}
                            homeworld={planet}
                            species={race}
                            films={film}
                        />
                    );
                })
                
            }
        </div>
    )
}

export default CardList;
