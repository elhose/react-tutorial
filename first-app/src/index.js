import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const firstBook = {
	img:
		"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/7/2/7299906720572.jpg",
	title: "Schronisko",
	author: "Sam Lloyd",
};

const secondBook = {
	img:
		"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/6/3/6399906730463.jpg",
	title: "Sekta",
	author: "Marek Stelar",
};

function BookList() {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			/>
			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
			/>
		</section>
	);
}

const Book = (props) => {
	console.log(props);
	return (
		<article className="book">
			<img
				src={props.img}
				alt="Example for a book"
				// width="200"
				height="280"
			/>
			<h2>{props.title}</h2>
			<h4>{props.author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
