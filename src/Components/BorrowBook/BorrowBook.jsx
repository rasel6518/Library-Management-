import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const BorrowBook = () => {
    const { user } = useContext(AuthContext)
    const loadedBorrowbooks = useLoaderData()

    const [borrowbooks, setBorrowBooks] = useState(loadedBorrowbooks)

    const userBorrowBooks = borrowbooks?.filter((book) => book.userEmail === user?.email);
    console.log(userBorrowBooks);
    // const handleReturn = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to read this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, return it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {


    //             fetch(`https://online-library-server.vercel.app/borrowbooks/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);

    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'return!',
    //                             'Your Book has been return.',
    //                             'success'
    //                         )
    //                         const remaining = borrowbooks.filter(c => c._id !== _id)

    //                         setBorrowBooks(remaining)

    //                     }
    //                 })



    //         }
    //     })
    // }
    const handleReturn = async (_id) => {
        try {
            const response = await fetch(`https://online-library-server.vercel.app/borrowbooks/${_id}`, {
                method: 'DELETE',
            });
            const data = await response.json();

            if (data.deletedCount > 0) {
                Swal.fire(
                    'Return!',
                    'Your Book has been returned.',
                    'success'
                );

                // Update the quantity in the database
                await fetch(`https://online-library-server.vercel.app/books/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ action: 'return' }),
                });

                // Fetch the updated book list
                const updatedBooksResponse = await fetch('https://online-library-server.vercel.app/books');
                const updatedBooksData = await updatedBooksResponse.json();

                // Find the updated quantity for the returned book
                const updatedBook = updatedBooksData.find((book) => book._id === data.returnedBookId);
                const updatedQuantity = updatedBook?.quantity || 0;

                // Update the state with the updated book list
                setBorrowBooks((prevBooks) =>
                    prevBooks.filter((book) => book._id !== _id)
                );

                // Pass the updated quantity to the DetailBook component
                // You may need to modify this part based on your component structure
                // Ensure that you have access to the function to update the book quantity in DetailBook
                // Example: setBookQuantity(updatedQuantity)
                // Replace setBookQuantity with the actual function in DetailBook
            }
        } catch (error) {
            console.error('Error returning book:', error);
        }
    };

    return (
        <div className="mx-auto w-9/12 grid md:grid-cols-2 gap-5">

            {
                userBorrowBooks?.map(book => (

                    <div key={book._id} className="relative    flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                            <img
                                src={book.books.image}
                                alt="image"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h6 className="block mb-4 font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-pink-500 "> {book.books.name}
                            </h6>
                            <h4 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug capitalize tracking-normal text-blue-gray-900">
                                Category:  {book.books.category}
                            </h4>
                            <p className="block mb-4 font-sans text-xl antialiased font-normal leading-relaxed ">
                                Return Date:  <span className="text-base">{book.returnDate}</span>
                            </p>
                            <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                Borrow Date:  {book.borrowDate}
                            </p>
                            <a className="inline-block" href="#">
                                <button onClick={() => handleReturn(book._id)}
                                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Return Book
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default BorrowBook;