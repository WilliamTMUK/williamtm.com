const PAST_GIGS: {
  title: string;
  type?: string;
  date?: Date|string;
}[] = [
  {
    title: 'Roxy Music',
  },
  {
    title: 'Cirque du Soleil - Delirium',
    type: 'other',
  },
  {
    title: 'Stereophonics',
  },
  {
    title: 'The Killers - Day & Age Tour',
  },
  {
    title: 'Michael McIntyre - Live and Laughing',
    type: 'comedy',
  },
  {
    title: 'Jimmy Carr - Rapier Wit',
    type: 'comedy',
  },
  {
    title: 'Frankie Boyle - I Would Happily Punch Every One Of You In The Face',
    type: 'comedy',
  },
  {
    title: 'Jean-Michel Jarre',
  },
  {
    title: 'Gorillaz - Plastic Beach Tour',
  },
  {
    title: 'Katy Perry - California Girls Tour',
  },
  {
    title: 'Coldplay - Mylo Xyloto Tour',
  },
  {
    title: 'Jimmy Carr - Gagging Order',
    type: 'comedy',
  },
  {
    title: 'The Killers - Battle Born Tour',
  },
  {
    title: 'Rich Hall',
    type: 'comedy',
  },
  {
    title: 'Russell Kane - Posturing Delivery',
    type: 'comedy',
  },
  {
    title: 'Micky Flanagan - Back in the Game',
    type: 'comedy',
  },
  {
    title: 'Rob Beckett',
    type: 'comedy',
  },
  {
    title: 'Morcheeba feat. Skye',
  },
  {
    title: 'Nitro Circus Live',
    type: 'other',
  },
  {
    title: 'Russell Howard - Wonderbox',
    type: 'comedy',
  },
  {
    title: 'James Blunt - Moon Landing Tour',
  },
  {
    title: 'Coldplay - Ghost Stories Tour',
  },
  {
    title: 'Pharrell Williams - Dear G I R L Tour',
  },
  {
    title: 'CHVRCHΞS - The Bones of What You Believe',
  },
  {
    title: 'John Bishop - Supersonic',
    type: 'comedy',
  },
]

const UPCOMING_GIGS: {
  title: string;
  type?: string;
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
  {
    title: 'Coldplay - Music of the Spheres Tour',
    date: new Date('2025-08-01'),
  },
  {
    title: 'The Midnight',
    date: new Date('2025-10-01'),
  },
]

export {
  PAST_GIGS,
  UPCOMING_GIGS,
}
