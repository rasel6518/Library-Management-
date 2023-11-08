import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BorrowModal from "../Modal/BorrowModal";



const DetailBook = () => {
    const { user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false);
    const [returnDate, setReturnDate] = useState("");
    const [borrowDate, setBorrowDate] = useState("");
    const [bookQuantity, setBookQuantity] = useState(0);
    const books = useLoaderData()
    console.log(books);

    useEffect(() => {
        if (books?._id) {
            fetch(`https://online-library-server.vercel.app/books/${books._id}`)
                .then(response => response.json())
                .then(data => {
                    setBookQuantity(data.quantity);
                })
                .catch(error => {
                    console.error('Error fetching book details:', error);
                });
        }
    }, [books?._id]);


    const handleCloseModal = () => {
        setShowModal(false);

    };

    const handleBorrowFormSubmit = (e) => {
        e.preventDefault();
        setBookQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));


        fetch('https://online-library-server.vercel.app/borrowbooks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                books,
                userEmail: user.email,
                borrowDate,
                returnDate,
                displayName: user.displayName,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Borrow Book:', data);

                Swal.fire({
                    icon: 'success',
                    title: 'successfully',
                    text: 'Borrow Books successfully !',

                })

            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });

        setShowModal(false);
    };







    const handleBorrowBook = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];

        setBorrowDate(formattedDate);
        setReturnDate("");
        setShowModal(true);

    };


    return (
        <div className="">

            <div className="flex mx-auto w-9/12">
                <div className="flex-1 space-y-5 border-r-2 border-btn-bg"
                >
                    <p className="text-2xl font-bold ">{books.name}</p>
                    <p>By <span className="hover:text-green-700 underline text-xl">{books.author}</span> </p>
                    <p className=" capitalize">category: <span className="hover:text-red-500 text-lg italic">{books.category}</span></p>
                    <div className="text-sm text-yellow-500 mb-2"> <ReactStars
                        count={5}
                        value={books.rating}
                        size={24}
                        activeColor="#ffd700"
                    />
                    </div>
                    <p>    Quantity:  {bookQuantity}</p>
                    <p>{books.description}........</p>



                    <div className="flex gap-5">
                        <button onClick={handleBorrowBook} disabled={bookQuantity == 0} className={`px-6 py-3 rounded-lg ${bookQuantity == 0 ? 'bg-gray-400' : 'bg-btn-bg'} text-white`}>Borrow</button>
                        <button className="px-6 py-3 text-black rounded-lg border border-black hover:border-0 hover:bg-btn-bg hover:text-white">Read</button>
                    </div>

                </div>
                <div className="flex-1 "
                >


                    <img className="mx-auto" src={books.image} alt="" />
                </div>
            </div>
            <BorrowModal
                showModal={showModal}
                handleClose={handleCloseModal}
                handleFormSubmit={handleBorrowFormSubmit}
                userEmail={user.email}
                returnDate={returnDate}  // Pass returnDate as a prop
                setReturnDate={setReturnDate}  // Pass setReturnDate as a prop
            />

        </div>
    );
};

export default DetailBook;