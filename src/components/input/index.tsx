import type { NextPage } from "next";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  id?:string;
  onChange: (e: any) => void;
}

const Input: NextPage<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  ...res
}) => {
  return (
    <input
      {...res}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-8 pl-1 w-[100%] focus:outline-none"
    />
  );
};

export default Input;
