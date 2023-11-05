import { useEffect, useState } from "react";
import logo from '../src/assets/logo.png'
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {


    // const handleSignOut = () => {
    //     LogOut()
    //         .then()
    //         .catch()
    // }

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")

        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])

    const handletoggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const navlinks = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active btn  text-white hover:bg-[#71AE44] bg-[#71AE44] mr-5 text-lg font-medium" : " mr-5 text-lg hover:bg-[#71AE44] px-6 py-3 rounded-lg text-white font-medium"
            }
        >Home</NavLink></li>

        <li><NavLink to='/allbooks' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active btn  text-white hover:bg-[#71AE44] bg-[#71AE44] mr-5 text-lg font-medium" : " mr-5 text-lg hover:bg-[#71AE44] px-6 py-3 rounded-lg text-white font-medium"
        }

        >All Books</NavLink></li>
        <li><NavLink to='/mycart' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active btn  text-white hover:bg-[#71AE44] bg-[#71AE44] mr-5 text-lg font-medium" : " mr-5 text-lg hover:bg-[#71AE44] px-6 py-3 rounded-lg text-white font-medium"
        }

        >Borrowed Books</NavLink></li>
        <li><NavLink to='/addproduct' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active btn  text-white hover:bg-[#71AE44] bg-[#71AE44] mr-5 text-lg font-medium" : " mr-5 text-lg hover:bg-[#71AE44] px-6 py-3 rounded-lg text-white font-medium"
        }

        >Add Book</NavLink></li>


    </>

    return (
        <div>
            <div className="bg-blue-500">
                <nav className="relative px-4 py-4 flex bg-[#77B748] justify-between items-center ">


                    <Link to='/' className="text-3xl font-bold leading-none" >
                        <img src={logo} alt="" className="w-[170px] h-[80px]" />
                    </Link>

                    <div className="flex items-center gap-3">

                        {/* {
                            user ? <ul>
                                {user.displayName && user.photoURL ? <span className="">
                                    <div className="flex items-center gap-1 ">
                                        <p className="text-sm font-medium  text-slate-600 ">{user.displayName}</p>
                                        <img src={user.photoURL} className="w-[40px] h-[40px] rounded-full mb-4" alt="" />
                                    </div>
                                </span> : ''}
                            </ul> : ''} */}
                        {/* 
                        {
                            user ? <Link to='/signin' onClick={handleSignOut} className="btn hover:bg-btn-bg   text-white bg-[#77B748]  ">SIGN OUT</Link> : <Link to='/signin' className="btn hover:bg-btn-bg  text-white bg-[#77B748]  ml-14 ">Sign In</Link>
                        } */}

                        <input type="checkbox" onChange={handletoggle}

                            checked={theme === "light" ? false : true}
                            className="toggle" />


                        <div className="md:hidden">
                            <button
                                className="navbar-burger flex items-center text-white p-3"
                                onClick={handleToggleMenu}
                            >
                                <AiOutlineMenu className="text-xl"></AiOutlineMenu>
                            </button>
                        </div>

                    </div>






                    <ul className={` hidden absolute top-1/2 left-1/2 transform   -translate-y-1/2  -translate-x-1/2 md:flex md:mx-auto md:items-center md:w-auto md:space-x-6 ${isMenuOpen ? '' : ' hidden'}`}>
                        {navlinks}
                    </ul>



                </nav>




                <div className={`navbar-menu w-[450px] duration-1000 top-0 left-0 h-[100vh] md:hidden absolute transition-all z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-[1000px]'}`}>

                    <nav className="fixed   top-0 left-0 bottom-0  w-5/6 max-w-sm  py-6 px-6 bg-[#77B748]     border-r overflow-y-auto">
                        <ul>
                            {navlinks}
                        </ul>
                    </nav>
                    <div className="navbar-backdrop top-2 right-20  fixed " onClick={handleToggleMenu}> <AiOutlineCloseCircle className="text-3xl text-red-500"></AiOutlineCloseCircle> </div>

                </div>


            </div>
        </div>
    );
};

export default Navbar;


