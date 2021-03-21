import React, {useState} from 'react';
import {data} from '../../../data'

// Example of useState usage on arrays
const UseState = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople)
  }

  return <React.Fragment>
    {
      people.map(person => {
        const {id, name} = person;
        return <div key={id} className="item">
          <h4>{name}</h4>
          <button type="button" onClick={() => removeItem(id)}>Delete {name}</button>
        </div>;
      })
    }
    <button className="btn" onClick={() => setPeople([])}>Delete all people</button>
  </React.Fragment>;
};

export default UseState;
