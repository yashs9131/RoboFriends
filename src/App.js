import React from "react";
import CardList from './CardList.js';
import Searchbox from './Searchbox.js';
// import { robots } from './robots.js';
import Scroll from './Scroll.js'
import './App.css';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        // Whenever we are changing a state, we use a function called setState() for smooth transition and cleaner coding
        this.setState({ searchfield: event.target.value })

    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }))
    }

    render() { 

        const filteredRobots = this.state.robots.filter( robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        
        if (this.state.robots.length === 0) {
            return <h1 className="tc f-5 grow">Loading...</h1>
        }
        else {
            return  (
                <div className="tc">
                <h1 className="f-5 grow">RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>    
                    <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
            )
        }
    }
}

export default App;