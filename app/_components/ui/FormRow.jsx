import Label from '@/app/_components/ui/Label';

function FormRow({ children, label, htmlFor, className = '' }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <Label htmlFor={htmlFor} className='mb-100'>
          {label}
        </Label>
      )}

      {children}
    </div>
  );
}

export default FormRow;
