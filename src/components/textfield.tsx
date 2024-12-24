import React from "react";

type TextFieldProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  icon,
  onChange,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="space-y-1">
      <label className="text-p2-regular text-black-black">{label}</label>
      <div style={{position:'relative', display: 'flex', alignItems: 'center'}}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            border: `2px solid ${isFocused ? "#32794F" : "#E0E0E0"}`,
            width: "100%",
            borderRadius: "0.4rem",
            padding: "0.4rem",
            outline: "none",
            color: "#000000"
          }}
          className="text-p4-regular text-black-200"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        ></input>
        {icon && <div style={{position: 'absolute', right: '1rem', pointerEvents: 'none'}}>{icon}</div>}
      </div>
    </div>
  );
};

export default TextField;