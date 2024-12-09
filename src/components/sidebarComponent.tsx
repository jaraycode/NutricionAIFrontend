import React from "react";

type SideBarComponentProps = {
  icon?: string;
  children: React.ReactNode; // text inside component
  isActive: boolean;
  onClick: () => void;
};

const SidebarComponent: React.FC<SideBarComponentProps> = ({
  children,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 p-2 cursor-pointer ${
        isActive
          ? "bg-secondary-lightGreen text-primary-darkGreen border shadow-md rounded-lg"
          : "text-black-800"
      }`}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          className={`h-4 w-4 ${
            isActive ? "fill-current text-primary-darkGreen" : ""
          }`}
        />
      )}
      <span className="text-p5-regular font-regular">{children}</span>
    </div>
  );
};

export default SidebarComponent;
