import Image from 'next/image';
import Label from './Label';
import Paragraph from '../text/Paragraph';
import Button from './Button';

function InputFile({ id, label = null, avatar = false, ...props }) {
  return (
    <div className='flex items-start cursor-pointer'>
      <Image
        src={avatar || '/avatar-default.svg'}
        alt='Profile picture'
        width={64}
        height={64}
        className='mr-250'
      />

      <div className='flex flex-col'>
        {label && (
          <Label htmlFor={id} className='mb-075'>
            {label}
          </Label>
        )}
        <Paragraph>Max 250KB, PNG or JPEG</Paragraph>
        <Button variant='secondary' className='mt-200'>
          Upload
        </Button>
      </div>

      <input
        type='file'
        id={id}
        accept='image/png, image/jpeg'
        className='sr-only'
        {...props}
      />
    </div>
  );
}

export default InputFile;
