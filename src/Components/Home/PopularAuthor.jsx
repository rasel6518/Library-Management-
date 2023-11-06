import { useEffect, useState } from "react";
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const PopularAuthor = () => {
    const [authors, setauthors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/authors')
            .then(res => res.json())
            .then(data => setauthors(data))
    }, [])
    return (
        <div className="">
            <p className="text-xl">Strong Minds Behind Us</p>
            <h1 className="text-3xl font-bold">Most Popular Authors</h1>

            <div className="grid gap-5 md:grid-cols-4">

                {
                    authors.map(author => (
                        <div key={author._id} className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={author.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-btn-bg">{author.author}</h2>
                                <p>{author.publishBookAmount} published Books</p>
                                <div className="card-actions group">
                                    <a className="text-2xl transition-colors duration-300 group-hover:text-blue-600" href="">
                                        <AiFillFacebook />
                                    </a>
                                    <a className="text-2xl transition-colors duration-300 group-hover:text-pink-600" href="">
                                        <AiFillInstagram />
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default PopularAuthor;
