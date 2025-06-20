import Link from 'next/link';
import Paragraph from '@/app/_components/text/Paragraph';
import FormCardSection from './FormCardSection';

function AuthSection({ children, options = null }) {
  if (!options) return null;
  const { heading, description, formRedirect } = options;

  return (
    <FormCardSection heading={heading} description={description}>
      {children}

      {formRedirect && (
        <Paragraph className='mt-250 text-center text-neutral-600'>
          {formRedirect.text}{' '}
          <Link href={formRedirect.linkHref} className='text-link'>
            {formRedirect.linkText}
          </Link>
        </Paragraph>
      )}
    </FormCardSection>
  );
}

export default AuthSection;
