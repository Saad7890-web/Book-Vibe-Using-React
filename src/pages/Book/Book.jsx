import { Suspense, useState } from "react";
import Bk from "../Bk/Bk";

const Book = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => setAllBooks(data));
  //   }, []);

  //   const bookPromise = fetch("booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>

      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((book) => (
            <Bk key={book.bookId} book={book}></Bk>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Book;
