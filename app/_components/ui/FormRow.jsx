import Label from '@/app/_components/ui/Label';
import FormError from '@/app/_components/ui/FormError';

function FormRow({ children, label, htmlFor, className = '', errors = {} }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <Label htmlFor={htmlFor} className='mb-100'>
          {label}
        </Label>
      )}

      {children}

      {errors && <FormError>{errors.message}</FormError>}
    </div>
  );
}

export default FormRow;
