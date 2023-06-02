import React from "react";

type ImageInputProps = {
  register: any;
  errors: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreviewUrls: string[];
};

const ImageInput: React.FC<ImageInputProps> = ({
  register,
  errors,
  onChange,
  imagePreviewUrls,
}) => {
  return (
    <div className="bg-gray-200 p-4">
  <label htmlFor="images" className="block mb-2 text-xl">Images:</label>
  <input
    type="file"
    id="images"
    {...register("images", { required: true })}
    multiple
    accept="image/*"
    onChange={onChange}
    className="mb-2"
  />
  <div className="flex flex-wrap">
    {imagePreviewUrls.map((url, index) => (
      <img
        key={index}
        src={url}
        alt={`Preview ${index + 1}`}
        className="max-w-200px max-h-200px mr-2 mb-2"
      />
    ))}
  </div>
  {errors.images && <span className="text-red-500">This field is required</span>}
</div>

  );
};

export default ImageInput;