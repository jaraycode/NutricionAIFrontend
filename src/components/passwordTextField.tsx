import React from "react";
import passwordHiddenIcon from "../assets/passwordHiddenIcon.svg";
import passwordUnhiddenIcon from "../assets/passwordUnhiddenIcon.svg";

type PasswordTextFieldProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordTextField: React.FC<PasswordTextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-1">
      <label className="text-p2-regular text-black-black">{label}</label>
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            border: `2px solid ${isFocused ? "#32794F" : "#E0E0E0"}`,
            width: "100%",
            borderRadius: "0.4rem",
            padding: "0.4rem",
            outline: "none",
            color: "#000000",
          }}
          className="text-p4-regular text-black-200"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        ></input>
        <div
          onClick={handleTogglePassword}
          style={{ position: "absolute", right: "1rem", cursor: "pointer" }}
        >
          <img
            src={showPassword ? passwordUnhiddenIcon : passwordHiddenIcon}
            alt="Toggle Password Visibility"
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordTextField;