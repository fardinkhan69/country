import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag,population,region} = props.country;
    const handleAddClick= props.handleAddClick;
    return (
        <div>
    
            <img className='flag' src={flag} alt=""/>
            <h3>This Is {name}</h3>
            <h4>Population:{population}</h4>
            <h4>region {region}</h4>
            <button onClick={()=>handleAddClick(props.country)}>Click here</button>
        </div>
    );
};

export default Country;