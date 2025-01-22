import Partners from './Partners';
import Banner from './Banner';
import Featured from './Featured';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Partners></Partners>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;