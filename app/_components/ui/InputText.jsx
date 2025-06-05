function InputText({
  type = 'text',
  id,
  className = '',
  error = false,
  ...props
}) {
  return (
    <input
      type={type}
      id={id}
      className={`w-full p-small border rounded-10 ${
        error ? 'border-red-700' : 'border-neutral-300  '
      } ${className}`}
      {...props}
    />
  );
}

export default InputText;
