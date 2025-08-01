function Heading({
  children,
  tag: Tag = 'h2',
  preset = '2',
  className = '',
  ...props
}) {
  return (
    <Tag className={`text-preset-${preset} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
