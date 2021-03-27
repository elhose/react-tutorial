import React, { useState, useEffect } from "react";

function UseEffect() {
	const [value, setValue] = useState(0);
	useEffect(() => {
		console.log("useEffect called!");
		if (value > 0) {
			document.title = `New Messages ${value}`;
		}
	});

	console.log("render component");
	return (
		<>
			<h1>{value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				Click me!
			</button>
		</>
	);
}

export default UseEffect;
