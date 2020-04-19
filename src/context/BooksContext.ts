import * as React from "react";

export const BooksContext = React.createContext([{}]);

export const BooksProvider = BooksContext.Provider;
export const BooksConsumer = BooksContext.Consumer;
