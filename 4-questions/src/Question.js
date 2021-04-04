import React, { useState } from "react";

const Question = ({ id, info, title }) => {
	const [moreInfo, setMoreInfo] = useState(false);

	return (
		<>
			<div className="question">
				<header>
					<h4>{title}</h4>
					<button className="btn">siema</button>
				</header>
				<p>{info}</p>
			</div>
		</>
	);
};

export default Question;
