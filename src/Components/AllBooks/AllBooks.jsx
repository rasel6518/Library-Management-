// import { useState, useEffect } from "react";
// import useBooks from "../../Hooks/useBooks";
// import Aos from "aos";
// import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";

// const AllBooks = () => {
//     useEffect(() => {
//         Aos.init({ duration: 2000 });
//     }, []);

//     const books = useBooks();
//     const [showAvailable, setShowAvailable] = useState(false);

//     const filteredBooks = showAvailable ? books.filter(book => book.quantity > 0) : books;

//     return (
//         <div className="grid md:grid-cols-3 gap-5 mx-auto w-9/12">
//             <button
//                 className="bg-btn-bg rounded-md mt-5 text-white px-5 py-3"
//                 onClick={() => setShowAvailable(!showAvailable)}
//             >
//                 {showAvailable ? "Show All Books" : "Filter Available Books"}
//             </button>
//             {filteredBooks.map((book) => (
//                 <div
//                     key={book._id}
//                     data-aos="fade-right"
//                     className="bg-white hover:border-b-2 hover:border-btn-bg p-4 space-y-3 rounded-md shadow-md"
//                 >
//                     {/* ... Other book details */}
//                     <Link to={`/updatedetails/${book._id}`}>
//                         <button className="bg-btn-bg rounded-md mt-5 text-white px-5 py-3">
//                             Update Details
//                         </button>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AllBooks;
import { useState, useEffect } from "react";
import useBooks from "../../Hooks/useBooks";
import Aos from "aos";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const AllBooks = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const books = useBooks();
    const [showAvailable, setShowAvailable] = useState(false);

    const filteredBooks = showAvailable ? books.filter(book => book.quantity > 0) : books;

    return (
        <div className="">
            <div className="text-center">
                <button
                    className="bg-btn-bg rounded-md my-3  text-white px-5 py-3"
                    onClick={() => setShowAvailable(!showAvailable)}
                >
                    {showAvailable ? "Show All Books" : "Filter Available Books"}
                </button>

            </div>
            <div className="grid md:grid-cols-3 gap-5 mx-auto w-9/12">

                {filteredBooks.map((book) => (
                    <div
                        key={book._id}
                        data-aos="fade-right"
                        className="bg-white hover:border-b-2 hover:border-btn-bg p-4 space-y-3 rounded-md shadow-md"
                    >
                        <img src={book.image} alt={book.bookName} className="w-2/3  h-3/6 object-cover mb-4 rounded-md" />
                        <p className="text-sm capitalize text-gray-500 mb-2">{book.category}</p>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">{book.name}</h2>
                        <p className="text-sm text-gray-700 mb-2">By: {book.author}</p>
                        <div className="text-sm text-yellow-500 mb-2"> <ReactStars
                            count={5}
                            value={book.rating}
                            size={24}
                            activeColor="#ffd700"
                        /></div>
                        <Link to={`/updatedetails/${book._id}`}>
                            <button className="bg-btn-bg rounded-md mt-5 text-white px-5 py-3">
                                Update Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;
