import Image from 'next/image';

function FormError({ children, id, className = '' }) {
  if (!id) return null;

  return (
    <span
      id={id}
      className={`flex items-center gap-075 w-fit mt-100 text-preset-9 text-red-700 ${className}`}
    >
      <Image
        src='/icons/info-circle.svg'
        alt='Error'
        width={12}
        height={12}
        className='inline'
      />
      {children}
    </span>
  );
}

export default FormError;
