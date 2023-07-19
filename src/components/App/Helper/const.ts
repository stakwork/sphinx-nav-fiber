export const TABS = [
  {
    label: 'Teach me',
    value: 'teachMe',
  },
  {
    label: 'Ask question',
    value: 'askQuestion',
  },
  {
    label: 'Sentiment Analysis',
    value: 'sentiment',
  },
] as const

export type TabsVariants = (typeof TABS)[number]['value']
