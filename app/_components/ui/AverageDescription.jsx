import Image from 'next/image';
import Paragraph from '../text/Paragraph';

function AverageDescription({ trend }) {
  const trendOptions = {
    noDataMood: {
      icon: null,
      description: 'Log 5 check-ins to see your average mood.',
    },
    noDataSleep: {
      icon: null,
      description: 'Track 5 nights to view average sleep.',
    },
    same: {
      icon: { icon: '/icons/same.svg', alt: 'Right arrow' },
      description: 'Same as the previous 5 check-ins',
    },
    inc: {
      icon: { icon: '/icons/inc.svg', alt: 'Right arrow' },
      description: 'Increased from the previous 5 check-ins',
    },
    dec: {
      icon: { icon: '/icons/dec.svg', alt: 'Right arrow' },
      description: 'Decreased from the previous 5 check-ins',
    },
  };

  const { icon, description } = trendOptions[trend];

  return (
    <div className='flex items-center gap-100'>
      {icon && <Image src={icon.icon} alt={icon.alt} width={10} height={10} />}
      <Paragraph preset='7'>{description}</Paragraph>
    </div>
  );
}

export default AverageDescription;
