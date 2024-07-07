const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={`  text-white rounded ${className}`}>
    {children}
  </button>
);

export default Button;