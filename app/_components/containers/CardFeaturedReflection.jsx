import Paragraph from '../text/Paragraph';
import CardFeatured from './CardFeatured';

function CardFeaturedReflection({ tags, reflection = 'Test' }) {
  return (
    <CardFeatured
      heading='Reflection of the day'
      icon='/icons/stars.svg'
      className='grow'
    >
      <div className='flex flex-col justify-between'>
        <div>
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
      </div>
    </CardFeatured>
  );
}

export default CardFeaturedReflection;
