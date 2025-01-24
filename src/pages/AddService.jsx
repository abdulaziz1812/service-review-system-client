import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    console.log(email);
    const formData = new FormData(e.target);

    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const date = new Date().toISOString();
    console.log(date);
    const service = { ...initialData, email: email, addedDate: date };

    axios
      .post("http://localhost:5000/services", service)
      .then((result) => {
        console.log(result);
        if (result.data.insertedId) {
          Swal.fire({
            title: "New Services added successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };

  return (
    <div className="mx-auto w-10/12 bg-white m-8">
      <h1 className="text-3xl font-bold p-8 pb-0">Add a New Service</h1>
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
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Category:</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="category"
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
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
