import React from "react";

type CategorySelectProps = {
  register: any;
  errors: any;
};

const CategorySelect: React.FC<CategorySelectProps> = ({ register, errors }) => {
  return (
    <div className="mb-4">
      <label htmlFor="category" className="block text-xl font-medium text-gray-700">
        Category:
      </label>
      <select
  id="category"
  {...register("category", { required: true })}
  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
>
        <option value="">Select Category</option>
        <option value="T-shirt">T-shirt</option>
        <option value="Bag">Bag</option>
        <option value="Watch">Watch</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Beauty">Beauty</option>
        <option value="Shoes">Shoes</option>
        <option value="Jewellery">Jewellery</option>
        <option value="Toys & games">Toys & games</option>
        <option value="Baby Care">Baby Care</option>
        <option value="Electronics">Electronics</option>
        <option value="Sports & outdoors">Sports & outdoors</option>
      </select>
      {errors.category && <span className="text-red-500 text-sm">This field is required</span>}
    </div>
  );
};

export default CategorySelect;