import React from 'react';

const Searchbox = ({ searchChange }) => {
    return (
        <div className='pb4'>
            <input 
                type='search' 
                placeholder= 'Search Creatures'
                onChange={searchChange} 
            />
        </div>
    );
}

export default Searchbox;