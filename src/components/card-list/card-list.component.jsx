import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

//Props is the argument sent from App.js that allows access to the monsters array.
export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (<Card key={monster.id} monster={monster} />))}
    </div>
);