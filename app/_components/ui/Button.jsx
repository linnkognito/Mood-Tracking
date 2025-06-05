function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary:
      'w-full p-small text-preset-5 text-neutral-0 bg-blue-600 rounded-16',
    secondary:
      'p-xsmall text-preset-6 text-neutral-900 border border-neutral-300 rounded-8',
  };

  return (
    <button
      className={`cursor-pointer ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
