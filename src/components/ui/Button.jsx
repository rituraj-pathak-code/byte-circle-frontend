
const Button = ({onClick,type,className,disabled,children}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? "text-gray-100 bg-gray-300": "text-white bg-blue-700 hover:bg-blue-800"}  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
