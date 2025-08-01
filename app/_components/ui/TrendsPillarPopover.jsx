import Image from 'next/image';
import Heading from '../text/Heading';
import Paragraph from '../text/Paragraph';
import { sleepTimeAverage } from '@/app/_data/sleepTime';
import { moodStyles } from '@/app/_data/moodStyles';

function TrendsPillarPopover({ moodData }) {
  console.log(moodData);
  const {
    mood_info: moodInfo,
    sleep_time: sleepTime,
    diary_entry: reflection,
    feelings_info: tags,
  } = moodData;

  const mood = moodStyles[moodInfo.id];
  const sleep = sleepTimeAverage.find((time) => time.id === sleepTime);

  return (
    <div className='absolute top-0 right-[48px] w-[175px] bg-neutral-0 flex flex-col gap-150 p-150 border border-blue-100 shadow-popover rounded-12'>
      <div className='flex flex-col gap-100'>
        <Heading tag='h3' preset='8' className='text-neutral-600'>
          Mood
        </Heading>
        <div className='flex gap-075'>
          <Image
            src={mood.icon.icon}
            alt={`${mood.label} smiley`}
            width={16}
            height={16}
          />
          <Paragraph preset='7'>{mood.label}</Paragraph>
        </div>
      </div>

      <div className='flex flex-col gap-100'>
        <Heading tag='h3' preset='8' className='text-neutral-600'>
          Sleep
        </Heading>
        <Paragraph preset='7'>{sleep.label} hours</Paragraph>
      </div>

      <div className='flex flex-col gap-100'>
        <Heading tag='h3' preset='8' className='text-neutral-600'>
          Reflection
        </Heading>
        <Paragraph preset='9'>{reflection}</Paragraph>
      </div>

      <div className='flex flex-col gap-100'>
        <Heading tag='h3' preset='8' className='text-neutral-600'>
          Tags
        </Heading>

        <div className='flex flex-wrap gap-050'>
          {tags &&
            tags.map((tag, index) => {
              const lastTag = index === tags.length - 1;

              return (
                <Paragraph preset='9' key={tag.id}>
                  {tag.feeling_type + (lastTag ? '' : ', ')}
                </Paragraph>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TrendsPillarPopover;
