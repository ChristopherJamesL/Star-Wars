import React, { Component } from 'react';
import Searchbox from './Searchbox.jsx';
import CardList from './CardList';
import { creatures } from './creatures.js';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            creatures: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ creatures: creatures });
        console.log('check')
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
                
                <CardList creatures={filteredCreatures}/>
            </div>
        );
    }
}

export default App;