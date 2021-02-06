import React from 'react';
import './search-box.styles.css';


// Functional component search box. Props (destructured) to keep the search bar more dynamic.
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className='search' 
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange}/>
);