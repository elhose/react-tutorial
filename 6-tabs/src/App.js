import React, { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
	const [initialized, setInitialized] = useState(false);
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(url);
			const body = await response.json();
			setJobs(body);
			setInitialized(true);
		} catch (err) {
			console.log(err);
			setInitialized(false);
			console.log(err);
		}
	};

	console.log(jobs);

	if (!initialized) {
		return <h1 className="loading">LOADING ...</h1>;
	}

	return (
		<main className="section">
			<section className="title">
				<h2>Experience</h2>
				<div className="underline"></div>
			</section>
			<section className="job-center">
				<div className="btn-container">
					{jobs.map((entry) => {
						const { id, company } = entry;
						return (
							<button
								key={id}
								className="job-btn"
								type="button"
							>
								{company}
							</button>
						);
					})}
				</div>
				<div className="job-info"></div>
			</section>
		</main>
	);
}

export default App;
