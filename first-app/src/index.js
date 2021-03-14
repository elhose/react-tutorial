import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className="book">
			<Image></Image>
			<Title />
			<Author />
		</article>
	);
};

const Image = () => (
	<img
		src="https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/7/2/7299906720572.jpg"
		alt="Example for a book"
		// width="200"
		height="280"
	/>
);

const Title = () => <h2>Schronisko</h2>;

const authorStyling = { color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" };
const Author = () => <h4 style={authorStyling}>Sam Lloyd</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
