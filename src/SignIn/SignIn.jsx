import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';

import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {

    const { signIn, googleLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()


    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {

                console.log(result);


                navigate(location?.state ? location.state : '/')
                toast.success(' Google Signin  Successful');
            })
            .catch(err => {
                console.log(err);

            })


    }

    const handleSignin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
            .then(result => {

                console.log(result);
                navigate(location?.state ? location.state : '/')
                toast.success('Signin  Successful');



            })
            .catch(err => {

                const errorCode = err.code;

                if (errorCode === 'auth/wrong-password') {
                    toast.error('Password is incorrect. Please try again.')

                } else if (errorCode === 'auth/user-not-found') {
                    toast.error('No user found with this email. Please check your email and try again.')

                } else if (errorCode === 'auth/invalid-Signin-credentials') {
                    toast.error('Invalid Signin information')

                }

                else {
                    toast.error('Signin failed. Please try again.')
                }
            })
        e.currentTarget.reset()

    }

    return (
        <div>

            <div>

                <div className="hero min-h-screen bg-gradient-to-t from-[#77B748] to-[#60e508]">

                    <div className="hero-content w-full ">


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-center text-xl font-semibold mt-5">Signin your account</h1>
                            <form onSubmit={handleSignin} className="card-body">
                                <div className="form-control">

                                    <input type="email" name="email" placeholder=" Enter Email" className="input  " style={{ borderBottom: '1px solid #77B748' }} required />
                                </div>
                                <div className="form-control">

                                    <input type="password" name="password" placeholder="Enter Password" className="input " style={{ borderBottom: '1px solid #77B748' }} required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn hover:bg-[#71AE44]  bg-[#77B748] text-white">Sign In</button>
                                </div>
                            </form>

                            <p className="text-center  font-bold mb-5">OR </p>

                            <div className=" form-control text-center px-9 ">
                                <button onClick={handleGoogleSignIn} className="text-4xl mx-auto hover:border-2 p-3 hover:border-btn-bg "><FcGoogle></FcGoogle> </button>
                            </div>


                            <div className=" mb-5 text-center p-3">
                                Do Not Have An Account ? <Link className="text-blue-400 font-medium" to='/signup'> Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light">

            </ToastContainer>
        </div>
    );
};

export default SignIn;