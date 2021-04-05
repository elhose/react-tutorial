import React, { useState } from "react";
import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("hello");
	};

	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form>
					<input
						type="text"
						value={color}
						onChange={(event) => {
							setColor(event.target.value);
						}}
						placeholder="#f15025"
					/>
					<button
						className="btn"
						type="submit"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</form>
			</section>
			<section className="colors">
				<h4>here goes list</h4>
			</section>
		</>
	);
}

export default App;
