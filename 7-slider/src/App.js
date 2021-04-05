import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import Article from "./Article";

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
					return (
						<Article
							key={person.id}
							person={person}
							animationClass={determineAnimationClass(
								personIndex
							)}
						/>
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
