import React from 'react';

interface ErrorMessageProps {
  message: string|undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className="text-orange-500">{message}</p>;
};

export default ErrorMessage;