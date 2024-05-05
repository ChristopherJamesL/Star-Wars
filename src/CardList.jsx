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
                            homeworld={character.homeworld}
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