import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  console.log(service);

  const handelDetails = (id) => {
    navigate(`/service-details/${id}`);
  };

  return (
    <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    >
      <motion.div 
       whileHover={{ scale: 1.1 }}
      className=" w-full  bg-[#2dd4bf] shadow-lg hover:shadow-xl p-6 rounded-lg">
        <div className="flex flex-col flex-grow justify-between h-60">
          <figure>
            <img
              src={service.serviceImage}
              alt={service.serviceTitle}
              className="rounded-lg w-20 h-20"
            />
          </figure>
          <h3 className="font-bold">{service.serviceTitle}</h3>
          <p>{service.description}</p>
          <p className="text-lg font-bold">Price: ${service.price}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary text-white"
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
