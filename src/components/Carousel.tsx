import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <Image src="image1.jpg" alt="Image 1" />
            </div>
            <div>
                <Image src="image2.jpg" alt="Image 2" />
            </div>
            <div>
                <Image src="image3.jpg" alt="Image 3" />
            </div>
        </Slider>
    );
};

export default Carousel;
