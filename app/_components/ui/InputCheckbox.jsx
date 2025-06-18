function InputCheckbox({ label, value, name, ...props }) {
  return (
    <div
      className='flex-center p-ui-small gap-100
   bg-neutral-0 border-2 border-blue-100 has-checked:border-blue-600 rounded-10'
    >
      <input type='checkbox' id={value} value={value} name={name} {...props} />
      <label htmlFor={value} className='text-preset-6'>
        {label}
      </label>
    </div>
  );
}

export default InputCheckbox;
