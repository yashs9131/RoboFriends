import React from 'react';


const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img alt='robots' src='https://robohash.org/test?size=200x200' />
            <div>
                <h2>Jane Doe</h2>
                <p>Jane.doe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card;