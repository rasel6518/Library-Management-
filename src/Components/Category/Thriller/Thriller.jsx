import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import useBooks from "../../../Hooks/useBooks";
const Thriller = () => {
    const books = useBooks()

    const thrillerBooks = books?.filter(
        book => book.category.toLowerCase() == 'thriller')
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10 mx-auto w-9/12 '>
                {thrillerBooks?.map((book) => (

                    <div key={book._id}>
                        <div className="card md:w-[560px] card-side text-black bg-gray-300 p-5 shadow-xl">
                            <div className='flex-1 mx-auto my-auto'>
                                <img src={book.image} className="h-[350px]" alt="Movie" />
                            </div>
                            <div className="card-body flex-1">
                                <h2 className="card-title w-full h-full ">  {book.name}</h2>
                                <h1 className="capitalize font-serif">  Genre: {book.category}</h1>
                                <p className='flex items-center gap-2'>By {book.author}</p>

                                <div className="text-sm text-yellow-500 mb-2"> <ReactStars
                                    count={5}
                                    value={book.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                /></div>

                                <Link>
                                    <button className="bg-btn-bg rounded-md text-white px-5 py-3">Details button
                                    </button>
                                </Link>



                            </div>
                        </div>

                    </div>




                ))}
            </div>
        </div>
    );
};

export default Thriller;