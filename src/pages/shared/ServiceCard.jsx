import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  service;

  const handelDetails = (id) => {
    navigate(`/service-details/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{once: true}}
      className="w-full"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className=" h-full  bg-[#2dd4bf] shadow-lg hover:shadow-xl p-6 rounded-lg"
      >
        <div className="flex flex-col  justify-between h-60">
          <figure>
            <img
              src={service.serviceImage}
              alt={service.serviceTitle}
              className="rounded-lg w-20 h-20 object-cover"
            />
          </figure>
          <h3 className="font-bold text-lg">{service.serviceTitle}</h3>
          <p className="text-sm text-gray-700">{service.description}</p>
          <p className="text-sm italic">{service.category}</p>
          <p className="text-lg font-bold">Price: ${service.price}</p>
          <div className="card-actions flex justify-end ">
            <button
              className="btn btn-accent"
              onClick={() => handelDetails(service._id)}
            >
              See Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
