import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewBook = () => {

    const [newBooks, setnewBooks] = useState([])

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    useEffect(() => {
        fetch('http://localhost:5000/newBooks')
            .then(res => res.json())
            .then(data => setnewBooks(data))
    }, [])

    return (
        <div className="container mx-auto py-8">
            <p>Taste The New Spice</p>
            <h1 className="text-4xl font-bold mb-4">New Release Books</h1>
            <div className="flex flex-col  md:flex-row items-center">
                <div data-aos="fade-right" className="flex-1   pr-8">
                    {/* Your text content goes here */}
                    <p className="mb-5">
                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat.
                    </p>
                    <div className="flex  space-x-4">
                        <button className="btn bg-btn-bg text-white">Sell All</button>
                        <button className="btn  hover:bg-btn-bg hover:text-white">Borrow</button>
                    </div>
                </div>
                <div className="flex-1 grid md:grid-cols-3 gap-5">
                    {/* Your dynamic content goes here */}
                    {newBooks.map(book => (
                        <div key={book._id} data-aos="fade-left" className="bg-white p-4 rounded-md shadow-md">
                            <img src={book.image} alt={book.bookName} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <p className="text-sm text-gray-500 mb-2">{book.category}</p>
                            <h2 className="text-lg font-semibold overflow-hidden line-clamp-2 mb-2">{book.bookName}</h2>
                            <p className="text-sm text-gray-700 mb-2">By: {book.author}</p>
                            <div className="text-sm text-yellow-500 mb-2"> <ReactStars
                                count={5}
                                value={book.rating}
                                size={24}
                                activeColor="#ffd700"
                            /></div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default NewBook;