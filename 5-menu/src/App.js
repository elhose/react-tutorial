import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";

function App() {
	const initialCategoriesState = "all";
	const [menu, setMenu] = useState(data);
	const [categories, setCategories] = useState(initialCategoriesState);

	const getCategories = () => {
		let filteredCategories = menu.map((menuItem) => menuItem.category);
		let uniqueCategories = [...new Set(filteredCategories), initialCategoriesState];
		setCategories(uniqueCategories);
	};

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Our Menu</h2>
					<div className="underline"></div>
				</div>
			</section>
			<Categories/>
      <Menu items={menu}/>
		</main>
	);
}

export default App;
