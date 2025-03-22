const PAST_GIGS: {
  title: string;
  date?: Date|string;
}[] = [
  {
    title: 'Roxy Music',
  },
  {
    title: 'Cirque du Soleil - Delirium',
  },
  {
    title: 'Stereophonics',
  },
  {
    title: 'The Killers - Day & Age Tour',
  },
  {
    title: 'Michael McIntyre - Live and Laughing',
  },
  {
    title: 'Jimmy Carr - Rapier Wit',
  },
]

const UPCOMING_GIGS: {
  title: string;
  date: Date|string;
}[] = [
  {
    title: 'Nabil Abdulrashid - Urban Battuta',
    date: new Date('2025-04-01'),
  },
  {
    title: 'Forest Live 2025',
    date: 'TBC',
  },
  {
    title: 'Imagine Dragons - LOOM Tour',
    date: new Date('2025-07-01'),
  },
]

export {
  PAST_GIGS,
  UPCOMING_GIGS,
}
