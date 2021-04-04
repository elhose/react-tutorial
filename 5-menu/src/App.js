import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";

function App() {
	const initialCategoriesState = "all";
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(initialCategoriesState);

	const getCategories = () => {
		let filteredCategories = menuItems.map((menuItem) => menuItem.category);
		let uniqueCategories = [
			...new Set(filteredCategories),
			initialCategoriesState,
		];
		setCategories(uniqueCategories);
	};

	useEffect(() => {
		getCategories();
	}, []);

	const filterItems = (category) => {
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
			<Categories filterItems={filterItems}/>
			<Menu items={menuItems} />
		</main>
	);
}

export default App;
