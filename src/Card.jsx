import React from 'react';
import yoda from './assets/yoda.jpg'
import './Card.css';



const Card = ({ name, homeworld, species, films }) => {
    return (
        <div className='starwars dib tc bg-light-red pa3 ma3 inline-flex flex-wrap grow shadow-5 '>
            <img src={yoda} alt='img' width={500} height={300}/>
            <div className='text tc'>
                <h2>Name: {name}</h2>
                <p>Homeworld: {homeworld}</p>
                <p>Species: {species}</p>
                <p className='pa3 films'>films: {films}</p>
            </div>
        </div>
    );
}

export default Card;