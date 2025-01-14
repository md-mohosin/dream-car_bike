


import bike1 from '../../../assets/bike/bike1.jpg'
import car1 from '../../../assets/car/car1.jpg'
import bike2 from '../../../assets/bike/bike2.webp'
import car2 from '../../../assets/car/car2.jpg'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
                <div>
                    <img className='max-w-full max-h-[500px] border border-red-500' src={bike1} />
                </div>
                <div>
                    <img className='max-w-full max-h-[500px] border border-red-500' src={car1} />
                </div>
                <div>
                    <img className='max-w-full max-h-[500px] border border-red-500' src={bike2} />
                </div>
                <div>
                    <img className='max-w-full max-h-[500px] border border-red-500' src={car2} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;