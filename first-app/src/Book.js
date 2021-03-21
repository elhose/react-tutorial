import React from 'react'

const Book = (props) => {
	const { img, title, author } = props;
	// attribute, eventHandler
	// onClick, onMouseOver
	const clickHandler = () => {
		alert("Button was clicked!");
	};

	const complexExample = (author) => {
		console.log(`LOGGED AUTHOR IS ${author}`);
	};
	return (
		<article
			className="book"
			onMouseOver={() => {
				console.log(`TITLE IS ${title}`);
			}}
		>
			<img
				src={img}
				alt="Example for a book"
				// width="200"
				height="280"
			/>
			<h2 onClick={() => console.log(title)}>{title}</h2>
			<h4>{author}</h4>
			<button type="button" onClick={clickHandler}>
				Reference Example
			</button>
			<button type="button" onClick={() => complexExample(author)}>
				More Complete Example
			</button>
		</article>
	);
};

export default Book
