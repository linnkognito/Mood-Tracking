function InputTextarea({ ...props }) {
  return (
    <textarea
      rows={5}
      className='w-full min-h-1000 p-ui-small placeholder:text-preset-6-italic placeholder:text-neutral-600 rounded-10 border border-neutral-300 focus-ring'
      {...props}
    />
  );
}

export default InputTextarea;
