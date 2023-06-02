import React from "react";

type InputFieldProps = {
  label: string;
  data: string;
  onChange: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, data, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="inputField" className="block text-xl font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id="inputField"
        className="border rounded-md px-3 py-2 mt-1 w-full"
        value={data}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;