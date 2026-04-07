import React from "react";

type TextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties; 
  type: string;
  
};

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder="something",
   style
    ,type}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{padding: "12px 15px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #0c0101",
          width: "100%",
          fontSize: "16px",
          outline: "none",
          ...style
        }}
    />
  );
};

export default TextInput;

