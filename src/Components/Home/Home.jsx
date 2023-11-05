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
                    (<div key={book.id}>

                        <Link>
                            {/*  to={`/${book.name.toLowerCase()}`} */}
                            <div className="w-full  h-52 m-5 flex flex-col items-center">
                                <img className="w-full  h-5/6  " src={book.image} alt="" />
                                <p className="text-center font-serif font-extrabold text-3xl">{book.categoryName}</p>
                                <button className="btn hover:bg-green-500 text-white bg-[#71AE44]">Explore</button>
                            </div>

                        </Link>

                    </div>)

                    )
                }
            </div>



        </div>
    );
};

export default Home;