import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarsonXD";

function ConditionalRendering() {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState("default User");

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				} else {
					setIsLoading(false);
					setIsError(true);
					throw new Error(response.statusText);
				}
			})
			.then((user) => {
				const { login } = user;
				setUser(login);
				setIsLoading(false);
				setIsError(false);
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
				setIsError(true);
			});
	}, []);

	if (isLoading) {
		return (
			<>
				<h1>Loading...</h1>
			</>
		);
	}

	if (isError) {
		return (
			<>
				<h1>Error !!!</h1>
			</>
		);
	}

	return (
		<>
			<h1>{user}</h1>
		</>
	);
}

export default ConditionalRendering;
