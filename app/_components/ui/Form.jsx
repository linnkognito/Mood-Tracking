function Form({ children, className = '', ...props }) {
  return (
    <form
      area-lebelledby='form-heading'
      className={`w-full ${className}`}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
