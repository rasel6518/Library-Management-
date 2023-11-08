import { useEffect, useState } from "react";


const useBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://online-library-server.vercel.app/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return books;
};

export default useBooks;