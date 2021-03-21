import React, {useState} from 'react';

// Example of useState usage on object
const UseState = () => {
  const [person, setPeople] = useState({
    name: "jacek",
    age: 25,
    message: "socialism is disease of 21st century"
  });

  const {name, age, message} = person;

  const changePerson = () => {
    setPeople({...person, message: "Bonk!"});
  }

  return <React.Fragment>
    <h4>{name}</h4>
    <h4>{age}</h4>
    <h4>{message}</h4>
    <button type="button" className="btn" onClick={() => changePerson()}>Change {name}'s message!</button>
  </React.Fragment>;
};

export default UseState;
