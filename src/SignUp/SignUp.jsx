import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const SignUp = () => {

    const { CreateUser, LogOut } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSignup = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get("name");
        const photourl = form.get("photourl");
        const email = form.get("email");
        const password = form.get("password");

        console.log(name, photourl, email, password);

        // Password validation
        const hasMinLength = password.length >= 6;
        const hasCapitalLetter = /[A-Z]/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*()_+]/.test(password);

        if (!hasMinLength) {
            toast("Password must be at least 6 characters long.");
            return;
        }

        if (!hasCapitalLetter) {
            toast("Password must contain at least one capital letter.");
            return;
        }

        if (!hasSpecialCharacter) {
            toast("Password must contain at least one special character.");
            return;
        }

        CreateUser(email, password)
            .then((result) => {
                const signUpUser = result.user;

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photourl,
                })
                    .then(() => {

                        console.log('update profile');
                    })
                    .catch((err) => console.log(err.message));

                LogOut()

                navigate(location?.state ? location.state : '/signin')
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;

            });

        e.currentTarget.reset();
        toast.success("Registration successful!");
    };

    return (
        <div>
            <div>
                <div className="hero w-full min-h-screen bg-gradient-to-t from-[#77B748] to-[#60e508]">

                    <div className="hero-content w-full ">


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-center text-xl font-semibold mt-5">Register your account</h1>
                            <form onSubmit={handleSignup} className="card-body">
                                <div className="form-control">

                                    <input type="text" name="name" placeholder="Enter your name" className="input " style={{ borderBottom: '1px solid #77B748' }} required />
                                </div>
                                <div className="form-control">

                                    <input type="text" name="photourl" placeholder="Enter Photo URL" className="input " style={{ borderBottom: '1px solid #77B748' }} required />
                                </div>
                                <div className="form-control">

                                    <input type="email" name="email" placeholder="Enter Email" className="input " style={{ borderBottom: '1px solid #77B748' }} required />
                                </div>
                                <div className="form-control">

                                    <input type="password" name="password" placeholder="Enter Password" className="input " style={{ borderBottom: '1px solid #77B748' }} required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  hover:bg-[#71AE44]  bg-[#77B748] text-white"> SIGN UP </button>
                                </div>
                            </form>
                            <div className=" mb-5 text-center p-3">
                                Do  Have An Account ? <Link className="text-blue-400  font-medium" to='/signin'> Signin</Link>
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
        </div>
    );
};

export default SignUp;