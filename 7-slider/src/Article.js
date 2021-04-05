import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Article({ person, animationClass }) {
	const { image, name, title, quote } = person;
	return (
		<article className={animationClass}>
			<img className="person-img" src={image} alt={name} />
			<h4>{name}</h4>
			<p className="title">{title}</p>
			<p className="text">{quote}</p>
			<FaQuoteRight className="icon" />
		</article>
	);
}

export default Article;
