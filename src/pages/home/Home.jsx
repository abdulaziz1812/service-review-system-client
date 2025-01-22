import Partners from './Partners';
import Banner from './Banner';
import Featured from './Featured';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Partners></Partners>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;