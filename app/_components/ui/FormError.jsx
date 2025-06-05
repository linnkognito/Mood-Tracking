import Image from 'next/image';

function FormError({ children, id }) {
  if (!id) return null;

  return (
    <span
      id={id}
      className='flex items-center gap-075 text-preset-9 text-red-700'
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
