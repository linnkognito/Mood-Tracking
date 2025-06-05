function Paragraph({ children, preset = '7', className = '' }) {
  return <p className={`text-preset-${preset} ${className}`}>{children}</p>;
}

export default Paragraph;
