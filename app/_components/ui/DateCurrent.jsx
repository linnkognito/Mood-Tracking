import { format } from 'date-fns';
import Paragraph from '../text/Paragraph';

function DateCurrent() {
  return (
    <Paragraph preset='6' className='text-neutral-600'>
      {format(new Date(), 'EEEE, MMMM do, yyyy')}
    </Paragraph>
  );
}

export default DateCurrent;
