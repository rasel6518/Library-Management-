

const SignUp = () => {
    return (
        <div>
            <div>
                <div className="hero w-full min-h-screen bg-secColor">

                    <div className="hero-content w-full ">


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-center text-xl font-semibold mt-5">Register your account</h1>
                            <form onSubmit={handleSignup} className="card-body">
                                <div className="form-control">

                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <input type="text" name="photourl" placeholder="Enter Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <input type="email" name="email" placeholder="Enter Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  hover:bg-thirColor bg-priColor text-white"> SIGN UP </button>
                                </div>
                            </form>
                            <div className=" mb-5 text-center p-3">
                                Do  Have An Account ? <Link className="text-blue-400 hover:text-xl hover:font-bold font-medium" to='/signin'> Signin</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light">

                </ToastContainer> */}
            </div>
        </div>
    );
};

export default SignUp;