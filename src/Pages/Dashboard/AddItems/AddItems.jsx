import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils, FaUtensilSpoon } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        heading="ädd an itemn"
        subHeading="What's new?"
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
            Add Item<FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
