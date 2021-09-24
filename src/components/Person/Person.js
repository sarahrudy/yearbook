import React from 'react';
import './Person.css';

const Person = props => {
  return (
    <section>
      <img src={props.photo} alt='person'/>
      <h2>{props.name}</h2>
      <p>{props.quote}</p>
      <p>{props.superlative}</p>
    </section>
  )
}

export default Person;
