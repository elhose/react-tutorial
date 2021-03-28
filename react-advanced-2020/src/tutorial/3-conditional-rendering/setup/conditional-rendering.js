import React, { useEffect, useState } from "react";

function ConditionalRendering() {
	const [text, setText] = useState("");
	const [isError, setIsError] = useState(false);
	// const firstValue = text || "hello world";
	// const secondValue = text && "hello world";

	return (
		<>
			<h1>{text || "john doe"}</h1>
			<button
				className="btn"
				onClick={() => {
					setIsError(!isError);
				}}
			>
				toggle error
			</button>
			<h1>{isError && "Gotcha!"}</h1>
			<h1>{isError ? "Gotcha!" : "The same behaviour using ternary operator"}</h1>
		</>
	);
}

export default ConditionalRendering;
