import React from "react";
import CardList from './CardList.js';
import Searchbox from './Searchbox.js';
import { robots } from './robots.js';
import './App.css';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        // Whenever we are changing a state, we use a function called setState() for smooth transition and cleaner coding
        this.setState({ searchfield: event.target.value })

    }

    render() { 

        const filteredRobots = this.state.robots.filter( robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        return  (
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange} />
            <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;