import Paragraph from '../text/Paragraph';
import CardFeatured from './CardFeatured';

function CardFeaturedSleep({ hours = 0 }) {
  return (
    <CardFeatured heading='Sleep' icon='/icons/sleep.svg'>
      <Paragraph preset='3'>{hours} hours</Paragraph>
    </CardFeatured>
  );
}

export default CardFeaturedSleep;
