import React from 'react';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = props => (
  <div className="error-message">
    <p>{props.message}</p>
    <i className="far fa-frown"></i>
  </div>
);

export default ErrorMessage;
