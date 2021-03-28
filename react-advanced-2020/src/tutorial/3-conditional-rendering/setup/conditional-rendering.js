import React, { useEffect, useState } from "react";

function ConditionalRendering() {
	const [text, setText] = useState("Peter");
	const firstValue = text || "hello world";
	const secondValue = text && "hello world";

	return (
		<>
			{/* <h1>short-circuit evaluation with ternary operation</h1> */}
      {/* <h1>First value is -&gt; {firstValue}</h1> */}
      {/* <h1>Second value is -&gt; {secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      <h1>{text && "Emilly Jones"}</h1>
		</>
	);
}

export default ConditionalRendering;
