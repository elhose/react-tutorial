import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

  const removeTour = (id => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
  })

	const fetchData = async () => {
		try {
			const response = await fetch(url);
			const fetchedTours = await response.json();
			setTours(fetchedTours);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours} removeTour = {removeTour}/>
		</main>
	);
}

export default App;
