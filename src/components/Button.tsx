type ButtonProps = {
  text: string;
  onClick: () => void;
   style?: React.CSSProperties; 
   
};

const Button: React.FC<ButtonProps> = ({ text, onClick,style }) => {
  return <button onClick={onClick}
   style={ {padding: "12px 15px",
    marginBottom: "25px",
    borderRadius: "8px",
    border: "1px solid #0c0101",
    width: "20%",
    fontSize: "16px",
    ...style
  }} 
    >{text}
  </button>;
};

export default Button;