import React from 'react';

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <div className='pl-14'>
    <div className="bg-green-500 text-white py-2 rounded-md w-5/6 flex justify-center ">
      {message}
    </div>
    </div>
  );
};

export default SuccessMessage;