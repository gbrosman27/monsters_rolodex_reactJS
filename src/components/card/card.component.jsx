import React from 'react';
import './card.styles.css';


export const Card = props => (
    <div className='card-container'>
        {/* Changes the monster in accordance with the user id. Size set to 180x180. Monster images from API. */}
        <img alt="monster" 
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} 
        />
        <h2>
            {props.monster.name}
        </h2>
        <p>
            {props.monster.email}
        </p>

    </div>
);
