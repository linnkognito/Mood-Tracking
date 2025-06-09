import Image from 'next/image';
import Paragraph from '../text/Paragraph';

function InputBullet({ label, name, icon = null }) {
  return (
    <label
      className={`flex items-center justify-between px-250 py-150 bg-neutral-0 border-2 border-blue-100 has-checked:border-blue-600 rounded-10 cursor-pointer`}
    >
      <div className='flex items-center gap-125'>
        <input
          type='radio'
          id={label}
          value={label}
          name={name || 'mood-radio-buttons'}
          className='scale-125'
        />
        <Paragraph preset='5'>{label}</Paragraph>
      </div>

      {/* Right side: icon */}
      {icon && <Image src={icon.icon} alt={icon.alt} width={38} height={38} />}
    </label>
    // <div
    //   className={`flex items-center justify-between px-250 py-150 bg-neutral-0 border-2 border-blue-100 has-checked:border-blue-600 rounded-10 cursor-pointer`}
    // >
    //   <div className='flex items-center gap-125'>
    //     <input
    //       type='radio'
    //       id={label}
    //       value={label}
    //       name={name || 'mood-radio-buttons'}
    //       className='scale-125'
    //     />
    //     <label htmlFor={label}>
    //       <Paragraph preset='5'>{label}</Paragraph>
    //     </label>
    //   </div>

    //   {/* Right side: icon */}
    //   {icon && <Image src={icon.icon} alt={icon.alt} width={38} height={38} />}
    // </div>
  );
}

export default InputBullet;
