import booksData from '../data/books';

import { Book } from '../interfaces';

export const getBooks = (): Promise<Book[]> =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(booksData);
			// reject(new Error('Something went wrong'));
		}, 1000);
	});
