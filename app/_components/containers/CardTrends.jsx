import Heading from '../text/Heading';
import TrendsDiagram from '../ui/TrendsDiagram';

function CardTrends() {
  return (
    <div className='w-full'>
      <Heading tag='h2' preset='3' className='mb-400'>
        Mood and sleep trends
      </Heading>
      <TrendsDiagram />
    </div>
  );
}

export default CardTrends;
