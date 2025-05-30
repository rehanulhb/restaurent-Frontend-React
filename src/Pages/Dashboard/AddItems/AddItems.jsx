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
          <input {...register("name")} />
          <select {...register("category")}>
            <option value="salad">Salad</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <select
            {...register("category")}
            defaultValue="Pick a color"
            className="select"
          >
            <option disabled={true}>Select a Category</option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
