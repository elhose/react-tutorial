import React, { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
	const [initialized, setInitialized] = useState(false);
	const [data, setData] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(url);
			const body = await response.json();
			setInitialized(true);
			setData(body);
		} catch (err) {
			setInitialized(false);
			console.log(err);
		}
	};

	console.log(data);

	if (!initialized) {
		return <h1 className="loading">LOADING ...</h1>;
	}

	return (
		<main>
			<header className="title">
				<h1>Experience</h1>
				<div className="underline"></div>
			</header>
		</main>
	);
}

export default App;
