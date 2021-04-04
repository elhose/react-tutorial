import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	const { id, image, name, title, quote } = people[index];
	return (
		<>
			<section className="section">
				<div className="title">
					<h2>
						<span>/</span>Reviews
					</h2>
				</div>
			</section>
			<section className="section-center">
				<article>
					<img className="person-img" src={image} alt={name} />
					<h4>{name}</h4>
					<h5>{title}</h5>
					<p className="text">{quote}</p>
					<FaQuoteRight className="icon" />
				</article>
			</section>
		</>
	);
}

export default App;
