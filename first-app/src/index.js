import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

// named import
import { booksChangedVar as books } from "./books";

// default import
import BookCheckingWhatHappensWhenNameIsChanged from './Book'

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <BookCheckingWhatHappensWhenNameIsChanged key={book.id} {...book} />;
			})}
		</section>
	);
}



ReactDom.render(<BookList />, document.getElementById("root"));
