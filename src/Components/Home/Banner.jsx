import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };
    useEffect(() => {
        AOS.init(
            { duration: 2000, }
        );
    }, [])

    return (
        <div data-aos="fade-up" className="w-full" >
            <Slider className=" mx-auto  h-[80vh] " {...settings}>

                {/* banner img */}

                <div className="relative">
                    <img className="rounded-xl w-full h-[75vh]" src="https://i.ibb.co/41t5SwD/asian-boy-library-room-school.jpg" alt="Slide 1" />
                    <div className="absolute  top-0 right-0 w-1/2 h-full bg-black opacity-50 rounded-xl flex flex-col justify-center items-center">
                        <h2 className="text-4xl font-bold text-white mb-4">Discover a World of Knowledge</h2>
                        <div className="flex space-x-4">
                            <button className="bg-[#77B748] text-white px-6 py-3 rounded-full">Borrow</button>
                            <button className="bg-[#71AE44] text-white px-6 py-3 rounded-full">Read</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className=" rounded-xl w-full h-[75vh]" src="https://i.ibb.co/kq7H2Ww/library-with-books.jpg" />
                </div>
                <div>
                    <img className="   rounded-xl w-full h-[75vh]" src="https://i.ibb.co/42mvPyX/antique-book-shelf-vintage-background.jpg" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};
export default Banner;