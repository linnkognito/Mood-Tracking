function Label({ children, htmlFor, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-neutral-900 text-preset-6 ${className}`}
    >
      {children}
    </label>
  );
}
export default Label;
