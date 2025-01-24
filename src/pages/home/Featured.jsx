import ServiceCard from "../shared/ServiceCard";
import { useLoaderData } from "react-router-dom";

const Featured = () => {
  const services = useLoaderData();

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 xl:w-8/12 mx-auto ">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
