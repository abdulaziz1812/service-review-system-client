import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./shared/ServiceCard";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import loadingLottieData from "../assets/lottie/Loading.json";
import Lottie from "lottie-react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://service-review-system-server-beta.vercel.app/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((error) => {
        console.error("Error fetching featured services:", error);
      });
  }, []);

  if (!services.length) {
    return <div className="flex items-center justify-center h-screen">
    <Lottie animationData={loadingLottieData} className="w-60 "></Lottie>
  </div>
  }

  const handelSearch = (e) => {
    e.preventDefault();
    const searchedInput = e.target.search.value;
    setSearch(searchedInput);
  };

  const filteredService = services.filter(
    (service) =>
      (service.serviceTitle.toLowerCase().includes(search.toLowerCase()) ||
        service.category.toLowerCase().includes(search.toLowerCase()) ||
        service.companyName.toLowerCase().includes(search.toLowerCase())) &&
      (category === "" || service.category === category)
  );
  return (
    <div>
      <Helmet>
        <title>Services-ReviewRadar</title>
      </Helmet>
      ;
      <div className="container min-h-s mx-auto py-8 w-10/12 xl:w-8/12">
        <h2 className="text-3xl font-bold text-center mb-6">All Services</h2>

        <div className="">
          <form onSubmit={handelSearch} className="py-4 mb-4">
            <label className="input input-bordered flex items-center gap-2 w-full focus:ring-2 focus:ring-blue-500 bg-white ">
              <input
                type="text"
                placeholder="Search by Service Title or Company name or Category "
                className="grow "
                name="search"
              />
              <input type="submit" className="btn btn-sm btn-outline" />
            </label>
          </form>
        </div>

        <div className="mb-4">
          <select
            className="select select-bordered "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Photography">Photography</option>
            <option value="Furniture">Furniture</option>
            <option value="Automotive">Automotive</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredService.length > 0 ? (
            filteredService.map((service, index) => (
              <motion.div 
              key={service._id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{once: true}}
              key={service._id}>
                <ServiceCard service={service} ></ServiceCard>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-500">
              No Services found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
