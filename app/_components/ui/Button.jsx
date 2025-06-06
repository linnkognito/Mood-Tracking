function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary:
      'p-small text-preset-5 text-neutral-0 bg-blue-600 rounded-16 hover:bg-blue-700 will-change-color duration-200 ease-in',
    secondary:
      'w-fit min-w-[91px] p-xsmall text-preset-6 text-neutral-900 border border-neutral-300 rounded-8',
  };

  return (
    <button
      className={`focus-ring cursor-pointer ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
