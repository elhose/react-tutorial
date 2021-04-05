import React, { useState } from "react";
import data from "./data";

function App() {
	const [paragraphs, setParagraphs] = useState([]);
	const [amount, setAmount] = useState(0);

	const generateParagraphs = (event) => {
		event.preventDefault();
		const validAmount = validateNumber();
		setAmount(validAmount);
		setParagraphs(data.slice(0, validAmount));
	};

	const validateNumber = () => {
		if (amount <= 0) return 0;
		if (amount >= data.length) return data.length - 1;
		return amount;
	};

	return (
		<>
			<section className="section-center">
				<article>
					<h3>Tired Of Boring Lorem Ipsum?</h3>
					<form className="lorem-form">
						<label htmlFor="number">Paragraphs: </label>
						<input
							type="number"
							id="number"
							name="number"
							value={amount}
							onChange={(event) => {
								setAmount(event.target.value);
							}}
						/>
						<button
							className="btn"
							type="submit"
							onClick={generateParagraphs}
						>
							generate
						</button>
					</form>
					{paragraphs.map((paragraph, index) => {
						return (
							<p key={index} className="result">
								{paragraph}
							</p>
						);
					})}
				</article>
			</section>
		</>
	);
}

export default App;
