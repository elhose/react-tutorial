import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, lightText }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
  const hexValue = rgbToHex(...rgb);
  
	return (
		<article
			className={`color ${lightText && "color-light"}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
		</article>
	);
};

export default SingleColor;
