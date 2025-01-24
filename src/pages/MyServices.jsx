import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";


const MyServices = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState({});
  const [search, setSearch] = useState("");

  const  axiosSecure = useAxiosSecure()

  const handelSearch = (e) => {
    e.preventDefault();
    const searchedInput = e.target.search.value;
    setSearch(searchedInput);
  };

  const filteredService = services.filter(
    (service) =>
      service.serviceTitle.toLowerCase().includes(search.toLowerCase()) ||
      service.category.toLowerCase().includes(search.toLowerCase()) ||
      service.companyName.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
   
      axiosSecure.get(`/my-Services?email=${user.email}`)
      .then(res=> setServices(res.data))
    
  }, [user.email , axiosSecure]);

  console.log(services);

  const date = (addedDate) => {
    const newDate = new Date(addedDate);
    return newDate.toLocaleString("en-gb", {
      day: "2-digit",
      year: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/services/${id}`).then(() => {
          const remainingServices = services.filter(
            (service) => service._id !== id
          );
          console.log(remainingServices);
          setServices(remainingServices);
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const openUpdateModal = (service) => {
    setSelectedService(service);

    document.getElementById("my_modal_1").showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const form = new FormData(e.target);

    const updatedService = {
      serviceImage: form.get("serviceImage"),
      serviceTitle: form.get("serviceTitle"),
      companyName: form.get("companyName"),
      website: form.get("website"),
      description: form.get("description"),
      category: form.get("category"),
      price: parseFloat(form.get("price")),
      addedDate: new Date().toISOString(),
      email: email,
    };

    fetch(`http://localhost:5000/services/${selectedService._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Services Updated successfully",
            icon: "success",
            draggable: true,
          });
          setServices((prevServices) =>
            prevServices.map((service) =>
              service._id === selectedService._id
                ? { ...service, ...updatedService }
                : service
            )
          );
          document.getElementById("my_modal_1").close();
        }
      });

    e.target.reset();
  };

  return (
    <div className="mx-auto w-8/12 mt-8">
      <Helmet>
        <title>MyServices-ReviewRadar</title>
      </Helmet>
      <h2 className="text-3xl font-bold">My Services</h2>

      <div className="">
        <form onSubmit={handelSearch} className="py-4 ">
          <label className="input input-bordered flex items-center gap-2 w-full focus:ring-2 focus:ring-blue-500 bg-white ">
            <input
              type="text"
              placeholder="Search by Service Title or Company name or Category"
              className="grow "
              name="search"
            />
            <input type="submit" className="btn btn-sm btn-outline" />
          </label>
        </form>
      </div>

      <div className="bg-white p-2 shadow-xl rounded mb-8 ">
        <div className="overflow-x-auto pb-8">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Company</th>
                <th>Service Title</th>
                <th>Added Date & time</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredService.length > 0 ? (
                filteredService.map((service, index) => (
                  <tr className="hover" key={service._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={service.serviceImage}
                              alt={service.serviceTitle}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{service.companyName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{service.serviceTitle}</td>
                    <td>{date(service.addedDate)}</td>
                    <td>{service.price}</td>
                    <td>{service.category}</td>
                    <td>
                      <button
                        onClick={() => openUpdateModal(service)}
                        className="btn btn-primary text-white btn-xs mx-1"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="btn btn-error text-white btn-xs mx-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="col-span-full text-center text-xl text-gray-500">
                  No Services found.
                </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg ml-8">Update Service</h3>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Image URL:</span>
              </label>
              <input
                type="url"
                placeholder="Image URL"
                className="input input-bordered"
                name="serviceImage"
                defaultValue={selectedService.serviceImage}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Title:</span>
              </label>
              <input
                type="text"
                placeholder="Service Title"
                className="input input-bordered"
                name="serviceTitle"
                defaultValue={selectedService.serviceTitle}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name:</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered"
                name="companyName"
                defaultValue={selectedService.companyName}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Website:</span>
              </label>
              <input
                type="url"
                placeholder="Website URL"
                className="input input-bordered"
                name="website"
                defaultValue={selectedService.website}
                required
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Category:</span>
              </label>
              <select
                className="select select-bordered w-full "
                name="category"
                defaultValue={selectedService.category}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price:</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
                name="price"
                defaultValue={selectedService.price}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered"
                name="description"
                defaultValue={selectedService.description}
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white" type="submit">
                Update
              </button>
            </div>
          </form>
          <div className="modal-action justify-center m-0">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error text-white">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyServices;
