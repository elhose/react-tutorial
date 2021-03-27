import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data);
  const size = people.length;
  const deletePeople = () => setPeople([])

  return <main>
    <section className="container">
      <h3>{size} birthdays today!</h3>
      <List people={people}/>
      <button onClick={() => deletePeople()}>Clear all</button>
    </section>
  </main>
}

export default App;
