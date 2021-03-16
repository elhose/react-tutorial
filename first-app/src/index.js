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

const author = "Sam Lloyd";
const Book = () => {
  const title = "Schronisko";
	return (
		<article className="book">
			<img
				src="https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/7/2/7299906720572.jpg"
				alt="Example for a book"
				// width="200"
				height="280"
			/>
			<h2>{title}</h2>
			<h4 >{author}</h4>
      {/* <p>{let x =6}</p> */}
      <p>{1+2}</p>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
