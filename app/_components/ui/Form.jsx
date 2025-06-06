function Form({ children, className = '', ...props }) {
  return (
    <form
      aria-labelledby='form-heading'
      className={`w-full ${className}`}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
