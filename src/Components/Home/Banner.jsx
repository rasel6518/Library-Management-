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
        autoplaySpeed: 4000,
        pauseOnHover: true,

    };
    useEffect(() => {
        AOS.init(
            { duration: 2000, }
        );
    }, [])

    return (
        <div data-aos="fade-up"

            className="w-full" >
            <Slider className=" mx-auto  h-[80vh] " {...settings}>

                {/* banner img */}

                <div className="">
                    <img className="rounded-xl w-full h-[75vh]" src="https://i.ibb.co/41t5SwD/asian-boy-library-room-school.jpg" alt="Slide 1" />

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