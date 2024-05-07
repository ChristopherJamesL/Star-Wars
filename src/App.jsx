import React, { Component } from 'react';
import Searchbox from './Searchbox.jsx';
import CardList from './CardList';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            creatures: {
                results: []
            },
            homeworld:{
                results: []
            },
            species: {
                results: []
            },
            films: {
                results: []
            },
            searchfield: '',
        }
        console.log('construct');
    }

    async componentDidMount() {

        const getData = () => {
            const results = [];
            let link = 'https://swapi.py4e.com/api/people/';
            do {
                const res = await fetch(link);
                const data = await res.json();
                link = data.next;
                results.push(...data.results);
            } while (link);
            creatures.results = results; 
            return results;
        }
        

        const urls = [
            'https://swapi.py4e.com/api/planets/',
            'https://swapi.py4e.com/api/species/',
            'https://swapi.py4e.com/api/films/'   
        ];
        // const response = await fetch('https://swapi.py4e.com/api/people/');
        // const data = await response.json();
        const [ planets, species, films ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ));
        this.setState({ creatures: {results: getData()}, homeworld: planets, races: species, films: films });
        console.log('componentDidMount')
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
    
     render() {
        const filteredCreatures = this.state.creatures.results.filter((creature) => {
            return creature.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
   
        console.log('render');
        return (
            <div className='tc '>
                <h1 className='f1 yellow'>Star Wars the Final Frontier</h1>
                <Searchbox  searchChange={this.onSearchChange}/>
                <CardList 
                    creatures={filteredCreatures} 
                    homeworlds={this.state.homeworld}
                    races={this.state.races}
                    films={this.state.films}
                />
            </div>
        );
    }
}

export default App;