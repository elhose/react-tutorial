import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const books = [
	{
		id: 1,
		img:
			"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/7/2/7299906720572.jpg",
		title: "Schronisko",
		author: "Sam Lloyd",
	},
	{
		id: 2,
		img:
			"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/6/3/6399906730463.jpg",
		title: "Sekta",
		author: "Marek Stelar",
	},
	{
		id: 3,
		img:
			"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/8/3/8399906720183.jpg",
		title: "Później",
		author: "Stephen King",
	},
];

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
		</section>
	);
}

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
		<article className="book" onMouseOver={() => {
			console.log(`TITLE IS ${title}`);
		}}>
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

ReactDom.render(<BookList />, document.getElementById("root"));
