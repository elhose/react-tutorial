import React, {useState} from 'react';

// Used React Hooks, to change Title back and forth in UseState component
const UseState = () => {
  const initialTitle = "Random title!1324";
  const [title, setTitle] = useState(initialTitle);

  function handleClick() {
    const changedTitleName = "Changed title!";
    if (title === initialTitle) {
      setTitle(changedTitleName);
    } else {
      setTitle(initialTitle)
    }
  }

  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={() => handleClick()}> Change Title</button>
  </React.Fragment>;
};

export default UseState;
