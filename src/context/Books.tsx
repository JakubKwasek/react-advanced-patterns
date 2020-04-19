import React from "react";
import { BookItems } from "./BookItems";
import { BooksProvider } from "./BooksContext";

export const Books = (): JSX.Element => {
	const books = [
		{
			id: 1,
			title: "Elon Musk. Biografia twórcy PayPala, Tesli, SpaceX",
			author: "Vance Ashlee",
		},
		{
			id: 2,
			title: "Mit przedsiębiorczości",
			author: "Gerber Michael E",
		},
		{
			id: 3,
			title: "Uwolniona. Jak wykształcenie odmieniło moje życie",
			author: "Westover Tara",
		},
	];

	return (
		<BooksProvider value={books}>
			<BookItems />
		</BooksProvider>
	);
};
