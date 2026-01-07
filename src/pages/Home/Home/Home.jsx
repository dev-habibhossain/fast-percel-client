import Banner from '../Banner/Banner';
import ClientLogoMarquee from '../ClientLogoMarquee/ClientLogoMarquee';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from "../OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <OurServices />
            <ClientLogoMarquee />
        </div>
    );
};

export default Home;