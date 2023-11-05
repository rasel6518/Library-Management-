

const SignIn = () => {
    return (
        <div>

            <div>

                <div className="hero min-h-screen bg-secColor">

                    <div className="hero-content w-full ">


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-center text-xl font-semibold mt-5">Signin your account</h1>
                            <form onSubmit={handleSignin} className="card-body">
                                <div className="form-control">

                                    <input type="email" name="email" placeholder=" Enter Email" className="input input-bordered " required />
                                </div>
                                <div className="form-control">

                                    <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn hover:bg-thirColor  bg-priColor text-white">Signin</button>
                                </div>
                            </form>

                            <p className="text-center  font-bold mb-5">OR </p>

                            <div className=" form-control text-center px-9 ">
                                <button onClick={handleGoogleSignIn} className="btn bg-priColor text-white hover:bg-thirColor "><FaGoogle></FaGoogle> Login With Google</button>
                            </div>


                            <div className=" mb-5 text-center p-3">
                                Do Not Have An Account ? <Link className="text-blue-400 font-medium" to='/signup'> Sign Up</Link>
                            </div>
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
    );
};

export default SignIn;