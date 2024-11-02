
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId ===id)
    const {bookId:currentBookId, image} = book;
   
    return (
        <div>
            <h2>book details: {bookId}</h2>
            <img className='w-36' src={image}alt=""  />
            <br />
            <button className="btn btn-outline mr-4 gap-2 btn-accent">Mark As Read</button>
            <button className="btn btn-accent">Wish List</button>
        </div>
    );
};

export default BookDetail;