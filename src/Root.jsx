import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Components/Home/Footer";


const Root = () => {
    return (
        <div className=" space-y-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;