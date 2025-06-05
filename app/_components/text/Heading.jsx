function Heading({ children, tag: Tag = 'h2', preset = '2', className = '' }) {
  return <Tag className={`text-preset-${preset} ${className}`}>{children}</Tag>;
}

export default Heading;
