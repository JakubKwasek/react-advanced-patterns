import * as React from "react";
import { BooksContext } from "./BooksContext";

interface Ibook {
	id: number;
	title: string;
	author: string;
}

export const BookItems = (): JSX.Element => {
	const books = React.useContext(BooksContext);
	return (
		<ul>
			{books.map((book: Ibook) => (
				<li key={book.id}>{book.title}</li>
			))}
		</ul>
	);
};
