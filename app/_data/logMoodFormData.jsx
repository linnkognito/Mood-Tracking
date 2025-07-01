import LogMoodFormMood from '../_components/ui/LogMoodFormMood';
import LogMoodFormFeelings from '../_components/ui/LogMoodFormFeelings';
import LogMoodFormNote from '../_components/ui/LogMoodFormNote';
import LogMoodFormSleep from '../_components/ui/LogMoodFormSleep';

export const logMoodForms = [
  {
    id: 'form-mood',
    heading: 'How was your mood today?',
    fields: ['mood'],
    form: <LogMoodFormMood />,
  },
  {
    id: 'form-feelings',
    heading: 'How did you feel?',
    description: `Select up to three tags:`,
    fields: ['feelings'],
    form: <LogMoodFormFeelings />,
  },
  {
    id: 'form-note',
    heading: 'Write about your day...',
    fields: ['diary_entry'],
    form: <LogMoodFormNote />,
  },
  {
    id: 'form-sleep',
    heading: 'How many hours did you sleep last night?',
    fields: ['sleep_time'],
    form: <LogMoodFormSleep />,
  },
];
