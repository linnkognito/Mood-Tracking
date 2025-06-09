import Image from 'next/image';

function ButtonCloseModal({ onClose }) {
  return (
    <button className='absolute top-5 right-5 cursor-pointer' onClick={onClose}>
      <Image src='/icons/close.svg' alt='Close' width={11} height={11} />
    </button>
  );
}

export default ButtonCloseModal;
