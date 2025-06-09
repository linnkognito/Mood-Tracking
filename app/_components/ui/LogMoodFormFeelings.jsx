import InputCheckbox from './InputCheckbox';

function LogMoodFormFeelings() {
  const feelings = [
    { label: 'Joyful', value: 'joyful' },
    { label: 'Down', value: 'down' },
    { label: 'Anxious', value: 'anxious' },
    { label: 'Calm', value: 'calm' },
    { label: 'Excited', value: 'excited' },
    { label: 'Frustrated', value: 'frustrated' },
    { label: 'Lonely', value: 'lonely' },
    { label: 'Grateful', value: 'grateful' },
    { label: 'Overwhelmed', value: 'overwhelmed' },
    { label: 'Motivated', value: 'motivated' },
    { label: 'Irritable', value: 'irritable' },
    { label: 'Peaceful', value: 'peaceful' },
    { label: 'Tired', value: 'tired' },
    { label: 'Hopeful', value: 'hopeful' },
    { label: 'Confident', value: 'confident' },
    { label: 'Stressed', value: 'stressed' },
    { label: 'Content', value: 'content' },
    { label: 'Disappointed', value: 'disappointed' },
    { label: 'Optimistic', value: 'optimistic' },
    { label: 'Restless', value: 'restless' },
  ];

  // If multiple checkboxes share the same name, all their values will be submitted together (like an array).

  return (
    <div className='flex flex-wrap gap-x-200 gap-y-150 max-w-full'>
      {feelings.map((feeling) => (
        <InputCheckbox
          key={feeling.value}
          label={feeling.label}
          name='feelings'
          value={feeling.value}
        />
      ))}
    </div>
  );
}

export default LogMoodFormFeelings;
