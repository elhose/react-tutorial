import React, {useState} from 'react';

// Example of useState usage on object
const UseState = () => {
  const [value, setValue] = useState(0);

  const resetCounter = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(()=>{
      // setValue(val+1)
      setValue((previousState) => previousState + 1);
    },2000);
  }

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
      <button className="btn" onClick={() => complexIncrease()}>complex increase</button>
    </section>
  </React.Fragment>;
};

export default UseState;
