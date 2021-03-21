import React from 'react';

// Now after initialization of the component, there is no option, to change the title
const UseState = () => {
  let title = "Random title!1324"

  function handleClick() {
    title = "hello people"
    console.log(title)
  }

  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={() => handleClick()}> Change Title</button>
  </React.Fragment>;
};

export default UseState;
