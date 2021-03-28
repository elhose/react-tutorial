import React, { useState } from "react";

function ConditionalRendering() {
	const [loading, setLoading] = useState(true);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return <h2>Multiple Returns</h2>;
}

export default ConditionalRendering;
