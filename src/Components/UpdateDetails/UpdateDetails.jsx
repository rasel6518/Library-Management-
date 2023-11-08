import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateDetails = () => {
    const books = useLoaderData()

    console.log(books);

    const handleUpdateDetailsBook = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const author = form.author.value
        const category = form.category.value
        const quantity = form.quantity.value
        const description = form.description.value
        const rating = form.rating.value
        const image = form.image.value

        const updateBook = { name, author, category, description, image, rating, quantity };
        console.log(updateBook);
        fetch(`https://online-library-server.vercel.app/books/${books._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBook)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated Details Book ',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }



            })
        form.reset()

    }


    return (
        <div>
            <section className="w-9/12 p-6 mx-auto bg-gradient-to-r from-[#77B748] to-[#60e508] rounded-md shadow-md mt-20">

                <form onSubmit={handleUpdateDetailsBook}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-black " htmlFor="username">Name</label>
                            <input id="username" type="text" defaultValue={books.name} name="name" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black " htmlFor="emailAddress">Author Name</label>
                            <input type="text" name="author" defaultValue={books.author} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black " htmlFor="password">Category</label>
                            <select
                                name="category"

                                className="block w-full px-4 bg-white py-2 mt-2 rounded-md   focus:border-blue-500  focus:outline-none focus:ring"
                                id="type"
                                defaultValue={books.category}
                            >
                                <option disabled value="Pick Your Book Category">
                                    Pick Your Book Category
                                </option>
                                <option value="novel">Novel</option>
                                <option value="thriller">Thriller</option>
                                <option value=" history ">History</option>
                                <option value="drame">Drama</option>



                            </select>
                        </div>

                        <div>
                            <label className="text-black " htmlFor="passwordConfirmation"> Quantity of the book
                            </label>
                            <input type="number" defaultValue={books.quantity} name="quantity" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-black " htmlFor="passwordConfirmation">Rating</label>
                            <input type="text" name="rating" defaultValue={books.rating} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black " htmlFor="passwordConfirmation">Short description</label>
                            <input type="text" name="description" defaultValue={books.description} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-black " htmlFor="passwordConfirmation">Image</label>
                            <input type="text" name="image" defaultValue={books.image} className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>





                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 w-full   text-white transition-colors duration-200 transform  rounded-md bg-gradient-to-l from-[#77B748] to-[#60e508] focus:outline-none focus:bg-gray-600">Update Book Details</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateDetails;