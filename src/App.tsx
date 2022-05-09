import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { getBooks } from './client';

import BookCard from './components/BookCard';

import { Book } from './interfaces';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (books.length === 0) {
      const getBooksCall = async () => {
        const books = await getBooks();
        setBooks(books);
      };
      getBooksCall();
    }
  }, [books.length]);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-10 mt-5">Welcome to my awesome book library!</h1>
      <div className="flex justify-center items-center w-4/5 flex-col mx-auto">
        {books.map(book => (
          <BookCard key={book.isbn} {...book} />
        ))}
      </div>
    </div>
  );
};

export default App;
