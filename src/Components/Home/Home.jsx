import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";



const Home = () => {

    const books = useLoaderData()

    console.log(books);

    return (
        <div className="w-9/12 mx-auto">
            <Banner></Banner>
            <div className="grid md:grid-cols-2  my-10 gap-5  ">
                {
                    books?.map(book =>
                    (

                        <div key={book.id} className="relative group overflow-hidden">
                            <Link to={`/${book.categoryName.toLowerCase()}`}>
                                <div className="w-full h-52 m-5 relative">
                                    <img className="w-full h-full" src={book.image} alt="" />

                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

                                        <button className="btn absolute hover:bg-green-500 text-white bg-[#71AE44] mt-4">Explore</button>
                                    </div>

                                </div>
                                <p className="text-center font-serif font-extrabold text-3xl text-black  ">
                                    {book.categoryName}
                                </p>

                            </Link>
                        </div>


                    )

                    )
                }
            </div>



        </div>
    );
};

export default Home;

// 