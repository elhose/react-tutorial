import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const numOfGenColors = 10; 
const baseColor = "#f15025";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values(baseColor).all(numOfGenColors));

	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			const validatedColors = new Values(color).all(numOfGenColors);
			setList(validatedColors);
			setError(false);
		} catch (err) {
			setError(true);
			console.log("Error", err);
		}
	};

	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form>
					<input
						className={`${error && "error"}`}
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
				{list.map((color, index) => {
					return (
						<SingleColor
							{...color}
							key={index}
							lightText={index > numOfGenColors}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
