import React from "react";

type ResetButtonProps = {
  onClick: () => void;
};

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="bg-red-500 text-white font-bold py-2 px-4 rounded">
  Reset
</button>
  );
};

export default ResetButton;