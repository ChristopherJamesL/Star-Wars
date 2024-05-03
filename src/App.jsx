import React, { Component } from 'react';
import Searchbox from './Searchbox.jsx';
import CardList from './CardList';
import { creatures } from './creatures.js';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            creatures: {
                results: []
            },
            searchfield: ''
        }
        console.log('construct');
    }

    async componentDidMount() {
        const urls = [
            'https://swapi.py4e.com/api/planets/',
            'https://swapi.py4e.com/api/species/',
            'https://swapi.py4e.com/api/films/'   
        ];
        const response = await fetch('https://swapi.py4e.com/api/people/');
        const data = await response.json();
        const [ planets, species, films ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ));
        this.setState({ creatures: data });
        console.log('componentDidMount')
        // this.setState({creatures.results.homeworld: planets });
   }

//        async componentDidMount() {
//         const response = await fetch('https://swapi.py4e.com/api/people/');
//         const data = await response.json();
//         this.setState({ creatures: data});
//         console.log('componentDidMount')
//    }   
   
    // componentDidMount() {
    //     fetch('https://swapi.py4e.com/api/people/')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             this.setState({ creatures: data })
    //         });
    // }
    
    // componentDidMount() {
    //     this.setState({ creatures: creatures });
    //     console.log('componentDidMount')
    // }

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
                <CardList creatures={filteredCreatures}/>
            </div>
        );
    }
}

export default App;