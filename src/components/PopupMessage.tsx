import React from 'react';

type PopupMessageProps = {
  message: string;
};

const PopupMessage: React.FC<PopupMessageProps> = ({ message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-green-500 text-white shadow-md rounded-lg px-8 py-4">
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};

export default PopupMessage;