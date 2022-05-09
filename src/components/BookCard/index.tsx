import { ReactElement, FC } from 'react';
import { Book } from '../../interfaces';

const BookCard: FC<Book> = ({
  title,
  shortDescription,
  longDescription,
  isbn,
  thumbnailUrl,
  authors,
}: Book): ReactElement => (
  <div
    id={isbn}
    className=" w-full text-center flex flex-col justify-center items-center my-10 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h2 className="font-bold text-xl mb-5 text-white">{title}</h2>
    {shortDescription && <p className="text-white">{shortDescription}</p>}
    {longDescription && <p className="text-white">{longDescription}</p>}
    {thumbnailUrl && <img className="my-5" src={thumbnailUrl} alt={title} />}
    {authors.map(author => (
      <p key={author} className="text-white text-sm">
        {author}
      </p>
    ))}
  </div>
);

export default BookCard;
