import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
	const [initialized, setInitialized] = useState(false);
	const [jobs, setJobs] = useState([]);
	const [jobNumber, setJobNumber] = useState(0);
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
		}
	};

	if (!initialized) {
		return <h1 className="loading">LOADING ...</h1>;
	}

	const { company, dates, duties, title } = jobs[jobNumber];

	return (
		<main className="section">
			<section className="title">
				<h2>Experience</h2>
				<div className="underline"></div>
			</section>
			<section className="job-center">
				<div className="btn-container">
					{jobs.map((job, index) => {
						const { id, company } = job;
						return (
							<button
								key={id}
								className={`job-btn ${
									jobNumber === index && "active-btn"
								}`}
								type="button"
								onClick={() => setJobNumber(index)}
							>
								{company}
							</button>
						);
					})}
				</div>
				<article className="job-info">
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className="job-date">{dates}</p>
					{duties.map((duty, index) => {
						return (
							<div key={index} className="job-desc">
								<FaAngleDoubleRight className="job-icon" />
								<p>{duty}</p>
							</div>
						);
					})}
				</article>
			</section>
		</main>
	);
}

export default App;
