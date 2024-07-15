const Button = ({ children, onClick, className, type }) => (
  <button onClick={onClick} type={type} className={`  text-white rounded ${className}`}>
    {children}
  </button>
);

export default Button;