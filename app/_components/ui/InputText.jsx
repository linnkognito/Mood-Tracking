import FormError from './FormError';

function InputText({
  type = 'text',
  id,
  className = '',
  error = null,
  ...props
}) {
  return (
    <>
      <input
        type={type}
        id={id}
        className={`w-full p-small border rounded-10 focus-ring ${
          error
            ? 'border-red-700'
            : 'border-neutral-300 hover:border-neutral-600'
        } ${className}`}
        {...props}
      />

      {error && <FormError id={`${id}-error`}>{error}</FormError>}
    </>
  );
}

export default InputText;
