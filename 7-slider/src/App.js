import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		let slider = setInterval(() => {
			nextPerson();
		}, 3000);
		return () => clearInterval(slider);
	}, [index]);

	const nextPerson = () => {
		if (index + 1 >= people.length) {
			setIndex(0);
			return;
		}
		setIndex(index + 1);
	};

	const prevPerson = () => {
		if (index - 1 < 0) {
			setIndex(people.length - 1);
			return;
		}
		setIndex(index - 1);
	};

	const determineAnimationClass = (personIndex) => {
		if (personIndex === index) {
			return "activeSlide";
		}
		if (
			personIndex === index - 1 ||
			(index === 0 && personIndex === people.length)
		) {
			return "lastSlide";
		}
		return "nextSlide";
	};

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
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					return (
						<article
							key={id}
							className={determineAnimationClass(personIndex)}
						>
							<img
								className="person-img"
								src={image}
								alt={name}
							/>
							<h4>{name}</h4>
							<p className="title">{title}</p>
							<p className="text">{quote}</p>
							<FaQuoteRight className="icon" />
						</article>
					);
				})}

				<button className="prev" onClick={() => prevPerson()}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={() => nextPerson()}>
					<FiChevronRight />
				</button>
			</section>
		</>
	);
}

export default App;
