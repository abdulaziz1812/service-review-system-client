import { Link } from "react-router-dom";
import errorLottieData from "../assets/lottie/error.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  <Helmet>
    <title>error-ReviewRadar</title>
  </Helmet>;
  return (
    <div>
      <div className="min-h-screen flex  justify-center items-center text-center bg-gray-300">
        <div className="border p-6 flex flex-col justify-center items-center rounded-2xl shadow-2xl bg-white">
          <Lottie className="w-80 " animationData={errorLottieData}></Lottie>

          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
          <Link to={"/"} className="btn btn-primary text-white">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
