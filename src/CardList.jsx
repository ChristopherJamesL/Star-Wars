import React from 'react';
import Card from './Card.jsx';


const CardList = ({ creatures, homeworlds, races, films } ) => {
    return (
        <div>
            {
                
                creatures.map((character, i) => {
                   
                    let planet = "";
                    for (let c = 0; c < homeworlds.results.length; c++) {
                      if (character.homeworld === homeworlds.results[c].url) {
                        planet = homeworlds.results[c].name;
                      }
                    }

                    let race = "";
                    for (let d = 0; d < races.results.length; d++) {
                        for (let e = 0; e < character.species.length; e++) {
                            if (character.species[e] === races.results[d].url) {
                                race += races.results[d].name;
                            }
                        }
                    }
                
                    let film = [];
                    for (let a = 0; a < films.results.length; a++) {
                        for (let b = 0; b < character.films.length; b++) {
                            if (character.films[b] === films.results[a].url) {
                                    film.push(films.results[a].title);
                            }
                        }
                    }
                    film = film.join(', ')
                      
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
