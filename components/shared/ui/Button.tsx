import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick: () => {};
}

export const Button: React.FC<Props> = ({ children, className, onClick }) => (
  <button className={`flex flex-nowrap items-center p-3 bg-white rounded-lg ${className}`} onClick={onClick}>
    {children}
  </button>
);