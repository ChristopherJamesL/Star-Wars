import React from 'react';
import Card from './Card.jsx';


const CardList = ({ creatures, homeworlds, races, films } ) => {
    return (
        <div>
            {
                
                creatures.map((character, i) => {
                    // const planet = homeworlds.results.map(urls => {
                    //     if (urls[i].url === character.homeworld) {
                    //         planet = urls[i].name
                    //         return planet;
                    //     }
                    // });
                    let planet = "";
                    for (let i = 0; i < homeworlds.results.length; i++) {
                      if (character.homeworld === homeworlds.results[i].url) {
                        planet = homeworlds.results[i].name;
                      }
                    }

                    let race = "";
                    for (let i = 0; i < races.results.length; i++) {
                        if (character.species === races.results[i].url) {
                            race = races.results[i].name;
                        }
                    }
                    return (
                        <Card
                            key={i} 
                            name={character.name}
                            homeworld={planet}
                            species={race}
                            films={character.films}
                        />
                    );
                })
                
            }
        </div>
    )
}

export default CardList;
