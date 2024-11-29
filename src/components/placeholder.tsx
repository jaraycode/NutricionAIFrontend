import React from "react";

type PlaceholderProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  icon?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Placeholder: React.FC<PlaceholderProps> = ({
  label,
  placeholder,
  value,
  icon,
  onChange,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="space-y-2">
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
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        ></input>
        {icon && <div style={{position: 'absolute', right: '1rem', pointerEvents: 'none'}}>{icon}</div>}
      </div>
    </div>
  );
};

export default Placeholder;
