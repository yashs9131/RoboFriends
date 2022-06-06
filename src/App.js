import React from "react";
import CardList from './CardList.js';
import Searchbox from './Searchbox.js';
import { robots } from './robots.js';

const App = () => {
    return (
        <div className="tc">
        <h1>Robofriends</h1>
        <Searchbox />
        <CardList robots={robots}/>
        </div>
    )
}

export default App;