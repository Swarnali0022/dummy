import React from "react";

type SubmitButtonProps = {
  label: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return <button type="submit" className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">{label}</button>;
};

export default SubmitButton;