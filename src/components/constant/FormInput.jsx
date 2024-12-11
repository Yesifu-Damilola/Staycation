/* eslint-disable react/prop-types */
export const FormInput = ({ id, label, value, onChange, placeholder }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-medium text-black">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full md:w-[320px] h-[51.56px] bg-[#F5F6F8] border-gray-300 rounded-[4px] pl-3 focus:outline-none shadow-sm mt-1"
      />
    </div>
  );
};
