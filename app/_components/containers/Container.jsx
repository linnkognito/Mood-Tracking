function Container({
  children,
  tag: Tag = 'div',
  variant = 'primary',
  className = '',
}) {
  const styles = {
    primary: 'px-200 md:px-400 py-500 bg-neutral-0 rounded-16 shadow-container',
  };

  return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>;
}

export default Container;
