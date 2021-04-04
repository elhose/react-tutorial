import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

function App() {
	const initialCategoriesState = ["all"];
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(initialCategoriesState);

	const getCategories = () => {
		let filteredCategories = items.map((item) => item.category);
		let uniqueCategories = [
			initialCategoriesState,
			...new Set(filteredCategories),
		];
		setCategories(uniqueCategories);
	};

	useEffect(() => {
		getCategories();
	}, []);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(items);
			return;
		}
		const filteredItems = items.filter(
			(item) => item.category === category
		);
		setMenuItems(filteredItems);
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Our Menu</h2>
					<div className="underline"></div>
				</div>
			</section>
			<Categories categories={categories} filterItems={filterItems} />
			<Menu items={menuItems} />
		</main>
	);
}

export default App;
