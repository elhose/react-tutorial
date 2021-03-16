import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const title = "Schronisko";
const author = "Sam Lloyd";
const imgSrc =
	"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/7/2/7299906720572.jpg";

  
function BookList() {
	return (
		<section className="booklist">
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className="book">
			<img
				src={imgSrc}
				alt="Example for a book"
				// width="200"
				height="280"
			/>
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
