import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BannerImg1 from "../../../assets/banner/banner1.png"
import BannerImg2 from "../../../assets/banner/banner2.png"
import BannerImg3 from "../../../assets/banner/banner3.png"
const Banner = () => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={BannerImg1} alt="Slide 1" />
                </div>
                <div>
                    <img src={BannerImg2} alt="Slide 2" />
                </div>
                <div>
                    <img src={BannerImg3} alt="Slide 3" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;