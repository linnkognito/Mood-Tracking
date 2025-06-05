import FormError from '@/app/_components/ui/FormError';
import Label from '@/app/_components/ui/Label';

function FormRow({ children, label, htmlFor, error = null, className = '' }) {
  return (
    <div className={`flex flex-col gap-100 w-full ${className}`}>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}

      {children}

      {/* Error message */}
      {error && <FormError id={`${htmlFor}-error`}>{error}</FormError>}
    </div>
  );
}

export default FormRow;
