import { Link } from "react-router-dom";


const Book = ( {book} ) => {
    const {bookId, image, bookName, author, tags, category} = book;
    return (
        <Link to = {`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className="bg-gray-100 py-8">
    <img
      src={image} className="h-[172px] w-[140px]"
      alt={bookName} />
  </figure>
  <div className="card-body">
    <div className="flex justify-center gap-4 ">
    {
        tags.map((tag, index) => 
        <button  key ={index}className="btn btn-sm bg-green-100  text-green-600
         text-xl ">{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Writer: {author}</p>
    <div className="divider"></div>
    <div className="card-actions justify-between">
      <div className="text-xl">{category}</div>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-300" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
  
</div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;