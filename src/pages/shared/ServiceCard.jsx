import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  console.log(service);
  return (
    <div className="">
      <div className=" w-full  bg-[#2dd4bf] shadow-lg hover:shadow-xl p-6 rounded-lg">
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
              className="btn btn-primary"
              onClick={() => navigate(`/service-details/${service._id}`)}
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
