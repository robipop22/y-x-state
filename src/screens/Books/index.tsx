import BookCard from '~/components/BookCard';

import booksMachine from '~/machines/books/index';

import Spinner from '~/components/Spinner';

const BooksScreen = () => {
	return (
		<div className="App">
			<h1 className="text-3xl font-bold mb-10 mt-5">Welcome to my awesome book library!</h1>
			<div className="flex justify-center items-center w-4/5 flex-col mx-auto">
				{[].map(book => (
					<BookCard key={book.isbn} {...book} />
				))}
			</div>
		</div>
	);
};

export default BooksScreen;
