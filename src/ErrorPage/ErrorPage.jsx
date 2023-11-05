import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" ">
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <h1 className="font-black text-gray-200 text-9xl">404</h1>

                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Oops! Page Not Found
                    </p>

                    <p className="mt-4 text-gray-500">
                        The page you are looking for might have been removed, had its name changed,
                        or is temporarily unavailable.
                    </p>
                    {/* Back to Home */}
                    <Link
                        to='/'
                        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-priColor rounded hover:bg-thirColor focus:outline-none focus:ring"
                    >
                        Go To Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;