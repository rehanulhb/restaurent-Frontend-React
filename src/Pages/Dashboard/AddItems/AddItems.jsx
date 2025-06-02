import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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
              {...register("name")}
              placeholder="Receipe Name"
            />
          </fieldset>
          <div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Category Name*</legend>
                <select
                  {...register("category")}
                  defaultValue="Pick a color"
                  className="select input-bordered w-full my-2"
                >
                  <option disabled={false}>Select a Category</option>
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
                  {...register("name")}
                  placeholder="Price"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receipe details</legend>
                <textarea
                  className="textarea h-24 input-bordered w-full"
                  placeholder="Receipe details"
                ></textarea>
              </fieldset>
            </div>
            <div>
              <input type="file" className="file-input w-full" />
            </div>
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
