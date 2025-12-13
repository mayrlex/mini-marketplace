import "./Button.css";

const Button = ({ children }) => {
  return (
    <a href="#" className="button">
      {children}
    </a>
  );
};

export default Button;
