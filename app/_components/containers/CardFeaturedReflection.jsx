import Paragraph from '../text/Paragraph';
import CardFeatured from './CardFeatured';

function CardFeaturedReflection({ tags, reflection = '' }) {
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
            <Paragraph preset='6-italic' className=' text-neutral-600'>
              #{tag}
            </Paragraph>
          </div>
        ))}
      </div>
    </CardFeatured>
  );
}

export default CardFeaturedReflection;
