import React, {useState} from 'react';

// Example of useState usage on object
const UseState = () => {
  const [value, setValue] = useState(0);

  const resetCounter = () => {
    setValue(0);
  };

  return <React.Fragment>
    <section style={{margin: '4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value - 1)}>decrease</button>
      <button className="btn" onClick={() => resetCounter()}>reset</button>
      <button className="btn" onClick={() => setValue(value + 1)}>increase</button>
    </section>
    <section style={{margin: '4rem 0'}}>
      <h2>complex counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value - 1)}>complex increase</button>
    </section>
  </React.Fragment>;
};

export default UseState;
