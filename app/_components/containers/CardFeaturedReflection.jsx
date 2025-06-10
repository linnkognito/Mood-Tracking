import Paragraph from '../text/Paragraph';
import CardFeatured from './CardFeatured';

function CardFeaturedReflection({
  tags,
  reflection = 'Woke up early and finally tackled a big project!',
}) {
  return (
    <CardFeatured
      heading='Reflection of the day'
      icon='/icons/stars.svg'
      className='grow flex flex-col justify-between'
    >
      <div className='h-full'>
        <Paragraph preset='6'>{reflection}</Paragraph>
      </div>

      {/* Tags */}
      <div className='flex gap-150 flex-wrap'>
        {tags?.map((tag) => (
          <div key={tag}>
            <span preset='text-preset-6-italic text-neutral-600'>#{tag}</span>
          </div>
        ))}
      </div>
    </CardFeatured>
  );
}

export default CardFeaturedReflection;
