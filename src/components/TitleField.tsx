import React from "react";

type TitleFieldProps = {
  register: any;
  errors: any;
};

const TitleField: React.FC<TitleFieldProps> = ({ register, errors }) => {
  return (
    <div className="mb-4">
      <label htmlFor="title" className="block text-xl font-medium text-gray-700">
        Title:
      </label>
      <input
        id="title"
        {...register("title", { required: true })}
        className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
      />
      {errors.title && <span className="text-red-500 text-sm">This field is required</span>}
    </div>
  );
};

export default TitleField;