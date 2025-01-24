import Partners from "./Partners";
import Banner from "./Banner";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import { Helmet } from "react-helmet-async";
import Stat from "./Stat";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home-ReviewRadar</title>
      </Helmet>
      <Banner></Banner>
      <Featured></Featured>
      <Partners></Partners>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <Stat></Stat>
    </div>
  );
};

export default Home;
