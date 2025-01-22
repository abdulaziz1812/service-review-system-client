import { useEffect, useState } from "react";

import axios from "axios";
import ServiceCard from "../shared/ServiceCard";
import { useLoaderData } from "react-router-dom";

const Featured = () => {

  const services = useLoaderData();
  
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-8/12 mx-auto ">
        {services.map((service) => (
          <ServiceCard service={service} key={services._id}></ServiceCard>
        ))}
        {/* {services.map((service) => (
          <div
            key={service._id}
            className="card w-full bg-base-100 shadow-lg hover:shadow-xl"
          >
            <figure>
              <img
                src={service.serviceImage}
                alt={service.serviceTitle}
                className="rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{service.serviceTitle}</h3>
              <p>{service.description.slice(0, 100)}...</p>
              <p className="text-lg font-bold">Price: ${service.price}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/service-details/${service._id}`)}
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Featured;
