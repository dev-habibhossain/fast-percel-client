import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
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
            <Benefits />
        </div>
    );
};

export default Home;