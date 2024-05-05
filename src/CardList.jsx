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

                    // let film = "";
                    // for (let i = 0; i < films.results.length; i++) {
                    //     for (let j = 0; j < character[i].films.length; i++) {
                    //         if (character[i].films === films.results[i].url) {
                    //             film += films.results[i].title;
                    //         }
                    //     }
                    // }

                    let film = "";
                    for (let i = 0; i < films.results.length; i++) {
                        if (character.films[i] === films.results[i].url) {
                            film += films.results[i].title + ', ';
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
