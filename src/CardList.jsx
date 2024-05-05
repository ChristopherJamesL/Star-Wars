import React from 'react';
import Card from './Card.jsx';


const CardList = ({ creatures, homeworlds, species, films } ) => {
    return (
        <div>
            {
                
                creatures.map((character, i) => {
                    return (
                        <Card
                            key={i} 
                            name={character.name}
                            homeworld={homeworlds.results[i].residents.map((resident) => {
                                if (character.results[i].url === resident[i]) {
                                    return homeworlds.results[i].name;        
                                }
                            })}
                            species={character.species}
                            films={character.films}
                        />
                    );
                })
                
            }
        </div>
    )
}

export default CardList;
