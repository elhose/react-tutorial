import React from "react";
import questions from "./data";
import Question from "./Question";

function App() {
	return (
		<>
			<main>
				<section className="container">
					<h3>Questions and Answers About Login</h3>
					{questions.map((question) => {
						return <Question key={question.id} {...question} />;
					})}
				</section>
			</main>
		</>
	);
}

export default App;
