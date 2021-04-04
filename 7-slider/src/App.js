import React, { useState, useEffect } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
	return <h2>slider project setup</h2>;
}

export default App;
