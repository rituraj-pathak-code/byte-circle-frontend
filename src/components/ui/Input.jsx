import React from "react";

const Input = ({ label,id, onChange, name, type, placeholder, value, error="", required, className, readOnly, onClick }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={`${error && "border-[#FF2E20] border-2"} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:bg-gray-100 block p-2.5 ${className}`}
        required={required}
        readOnly={readOnly}
        onClick={onClick}
      />
      {error && <p className="text-xs text-[#FF2E20] font-semibold mt-[4px]">*{error}</p>}
    </div>
  );
};

export default Input;
