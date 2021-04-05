import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, lightText }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
	const hexValue = rgbToHex(...rgb);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [alert]);

	const copyToClipboard = (event) => {
		navigator.clipboard.writeText(hexValue);
		setAlert(true);
	};

	return (
		<article
			onClick={copyToClipboard}
			className={`color ${lightText && "color-light"}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
			{alert && <p className="alert">Copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
