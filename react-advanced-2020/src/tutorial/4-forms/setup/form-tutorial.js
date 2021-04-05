import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const MultipleInputs = () => {
	const initialPersonState = { firstName: "", email: "", age: "" };
	const [person, setPerson] = useState(initialPersonState);
	const [people, setPeople] = useState([]);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setPerson({ ...person, [name]: value });
		console.log(person);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (person.firstName && person.email && person.age) {
			let personWithId = {
				...person,
				id: new Date().getTime().toString(),
			};
			console.log(personWithId);
			setPeople([...people, personWithId]);
			setPerson(initialPersonState);
		}
	};

	return (
		<>
			<article>
				<form className="form">
					<div className="form-control">
						<label htmlFor="firstName">Name: </label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={person.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="email">Email: </label>
						<input
							type="text"
							id="email"
							name="email"
							value={person.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="age">Age: </label>
						<input
							type="text"
							id="age"
							name="age"
							value={person.age}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" onClick={handleSubmit}>
						add person
					</button>
				</form>
				{people.map((person) => {
					const { id, firstName, email, age } = person;
					return (
						<div key={id} className="item">
							<h4>{firstName}</h4>
							<h5>{age}</h5>
							<p>{email}</p>
						</div>
					);
				})}
			</article>
		</>
	);
};

export default MultipleInputs;
