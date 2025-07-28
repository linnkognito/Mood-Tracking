import AverageDescription from './AverageDescription';
import Heading from '../text/Heading';

function AverageNoData({ variant }) {
  return (
    <>
      <Heading tag='h3' preset='4'>
        {variant === 'mood' ? 'Keep tracking!' : 'Not enough data yet!'}
      </Heading>

      <AverageDescription
        trend={variant === 'mood' ? 'noDataMood' : 'noDataSleep'}
      />
    </>
  );
}

export default AverageNoData;
