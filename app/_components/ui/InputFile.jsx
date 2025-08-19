import Image from 'next/image';
import Label from './Label';
import Paragraph from '../text/Paragraph';
import Button from './Button';
import FormError from './FormError';

function InputFile({
  id,
  label = null,
  image = false,
  error = false,
  ...props
}) {
  return (
    <div className='flex items-start cursor-pointer'>
      <Image
        src={image || '/avatar-default.svg'}
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
        <Button type='button' variant='secondary' className='mt-200'>
          Upload
        </Button>

        {/* Error message */}
        {error && (
          <FormError id={`${id}-error`} className=''>
            Unsupported file type. Please upload a PNG or JPEG
          </FormError>
        )}
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
