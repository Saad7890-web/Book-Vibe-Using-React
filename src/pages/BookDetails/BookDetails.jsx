import { useLoaderData, useParams } from "react-router";
import { addToStoredDb } from "../../utility/utility";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDb(id);
  };

  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h1>{bookName}</h1>

      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2"
      >
        Mark as Read
      </button>
      <button className="btn btn-info m-2">add to WishList</button>
    </div>
  );
};

export default BookDetails;
