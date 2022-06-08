import React from "react";
import Card from './Card.js';


const CardList = (props) => {
    const cardsArray = props.robots.map((user, i) => {
        // When ieterating through a loop, we need to give each element a unique key in order to identify it.
        return <Card key={i} id={props.robots[i].id} name={props.robots[i].name} email={props.robots[i].email} />
    })

    return (
        <div>
            {/* Variable containing html code is enclosed in {} whereas a function or object as we previously used is enclosed in a self-closing tag < /> */}
            {cardsArray}
        </div>
    )
}

export default CardList;