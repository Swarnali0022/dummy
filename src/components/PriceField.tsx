import React from "react";

type PriceInputProps = {
  register: any;
  errors: any;
};

const PriceInput: React.FC<PriceInputProps> = ({ register, errors }) => {
  return (
    <div className="mb-4">
      <label htmlFor="price" className="block text-xl font-medium text-gray-700">
        Price:
      </label>
      <input
  id="price"
  type="number"
  {...register("price", { required: true })}
  className="block w-full pr-12 sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-10 px-4 py-2"
/>
      {errors.price && <span className="text-red-500 text-sm">This field is required</span>}
    </div>
  );
};

export default PriceInput;