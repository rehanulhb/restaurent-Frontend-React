import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  console.log(item);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    //Image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // Now send the menu item data to the server
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.dsiplay_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        //Show sucess Popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the database `,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("With Image Url", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="Refresh info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset my-6">
            <legend className="fieldset-legend my-1">Receipe Name*</legend>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
              placeholder="Receipe Name"
            />
          </fieldset>
          <div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Category Name*</legend>
                <select
                  {...register("category", { required: true })}
                  defaultValue="default"
                  className="select input-bordered w-full my-2"
                >
                  <option value="default" disabled={true}>
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset my-6">
                <legend className="fieldset-legend my-1">Price*</legend>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  {...register("price", { required: true })}
                  placeholder="Price"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receipe details</legend>
                <textarea
                  {...register("recipe", { required: true })}
                  className="textarea h-24 input-bordered w-full"
                  placeholder="Receipe details"
                ></textarea>
              </fieldset>
            </div>
            <div>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full"
              />
            </div>
          </div>

          <button className="btn mt-4">
            Update Item<FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
