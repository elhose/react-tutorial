import React, { useState } from "react";

const Question = ({ id, info, title }) => {
	const [moreInfo, setMoreInfo] = useState(false);

	return (
		<>
			<div className="question">
				<header>
					<h4>{title}</h4>
					<button className="btn" onClick={() => {setMoreInfo(!moreInfo)}}>{moreInfo ? "+" : "-"}</button>
				</header>
				<p>{moreInfo ? info : ""}</p>
			</div>
		</>
	);
};

export default Question;
