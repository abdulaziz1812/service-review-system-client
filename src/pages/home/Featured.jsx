import ServiceCard from "../shared/ServiceCard";
import { useLoaderData } from "react-router-dom";
import { motion } from "motion/react";
import { div } from "motion/react-client";

const Featured = () => {
  const services = useLoaderData();

  return (
    <div className="container mx-auto py-8 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 xl:w-8/12 mx-auto ">
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            
          >
            <ServiceCard service={service}></ServiceCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
