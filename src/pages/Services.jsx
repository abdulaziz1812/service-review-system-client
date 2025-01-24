import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./shared/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((error) => {
        console.error("Error fetching featured services:", error);
      });
  }, []);

  if (!services.length) {
    return <div className="text-center py-8">Loading services...</div>;
  }
  return (
    <div>
        <div className="container mx-auto py-8 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6">All Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-8/12 mx-auto ">
        {services.map((service) => (
          <ServiceCard service={service} key={services._id}></ServiceCard>
        ))}
        
      </div>
    </div>
    </div>
  );
};

export default Services;
