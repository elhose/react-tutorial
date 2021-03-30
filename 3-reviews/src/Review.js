import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	const changeIndex = (value) => {
		if (value + index >= people.length) {
			setIndex(0);
		} else if (value + index < 0) {
			setIndex(people.length - 1);
		} else {
			setIndex(value + index);
		}
	};

	const randomIndex = () => {
		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * people.length);
		} while (index === randomIndex);

		setIndex(randomIndex);
	};

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button
					className="prev-btn"
					onClick={() => {
						changeIndex(-1);
					}}
				>
					<FaChevronLeft />
				</button>
				<button
					className="next-btn"
					onClick={() => {
						changeIndex(1);
					}}
				>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={() => randomIndex()}>
				Suprise me
			</button>
		</article>
	);
};

export default Review;
