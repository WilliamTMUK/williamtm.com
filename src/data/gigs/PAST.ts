import { Herr_Von_Muellerhoff } from "next/font/google";

const GIGS: {
  title: string;
  type?: string;
  venue?: string;
  date?: Date;
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
  {
    title: 'Cirque du Soleil - Kooza',
    type: 'other',
  },
  {
    title: 'Top Gear Live',
    type: 'other',
  },
  {
    title: 'Placebo - Loud Like Love Tour',
  },
  {
    title: 'Andy Parsons Live & Unleashed',
    type: 'comedy',
  },
  {
    title: 'Fall Out Boy - American Beauty/American Psycho Tour',
  },
  {
    title: 'Steve Harley & Cockney Rebel - Best Years Of Our Lives / 40th Anniversary Tour 2015',
  },
  {
    title: 'Josh Widdicombe - What Do I Do Now',
    type: 'comedy',
  },
  {
    title: 'CHVRCHΞS - Every Open Eye Tour',
  },
  {
    title: 'Cirque du Soleil - Amaluna',
    type: 'other',
  },
  {
    title: 'Nitro Circus Live',
    type: 'other',
  },
  {
    title: 'Romesh Ranganathan - Irrational',
    type: 'comedy',
  },
  {
    title: 'Gregory Porter',
  },
  {
    title: 'Rob Beckett - Mouth of the South',
    type: 'comedy',
  },
  {
    title: 'James Bay (Forest Live)',
  },
  {
    title: 'Kaiser Chiefs (Forest Live)*',
  },
  {
    title: 'Miles Jupp',
    type: 'comedy',
  },
  {
    title: 'Johnny Clegg^',
  },
  {
    title: 'Skye & Ross from Morcheeba',
  },
  {
    title: 'Christine & The Queens',
  },
  {
    title: 'Al Murray - Let\'s Go Back Together',
    type: 'comedy',
  },
  {
    title: 'Rick Astley (Forest Live)*',
  },
  {
    title: 'Tom Jones (Forest Live)',
  },
  {
    title: 'Tycho',
  },
  {
    title: 'The Killers - Wonderful Wonderful Tour',
  },
  {
    title: 'Greg Davies - You Magnificent Beast Tour',
    type: 'comedy',
  },
  {
    title: 'James Blunt - The Afterlove Tour',
  },
  {
    title: 'Paul Foot - Tis A Pity She\'s A Piglet',
    type: 'comedy',
  },
  {
    title: 'Cirque du Soleil - Ovo',
    type: 'other',
  },
  {
    title: 'Ed Byrne - Spoiler Alert',
    type: 'comedy',
  },
  {
    title: 'Sarah Millican - Control Enthusiast',
    type: 'comedy',
  },
  {
    title: 'Fall Out Boy - M A N I A Tour',
  },
  {
    title: 'Paloma Faith (Forest Live)*',
  },
  {
    title: 'Paul Heaton & Jacqui Abbott (Forest Live)*',
  },
  {
    title: 'George Ezra (Forest Live)',
  },
  {
    title: 'Morcheeba - Blaze Away Tour',
  },
  {
    title: 'Chromeo - Head Over Heels Tour',
  },
  {
    title: 'Nitro Circus Live - You Got This Tour',
    type: 'other',
  },
  {
    title: 'Rhod Gilbert - The Book of John Tour',
    type: 'comedy',
  },
  {
    title: 'The Midnight - Europe Winter 2019 Tour',
  },
  {
    title: 'Loreena McKennitt - Lost Souls Tour',
  },
  {
    title: 'Bill Bailey: Larks in Transit',
    type: 'comedy',
  },
  {
    title: 'Romesh Ranganathan - Work in Progress',
    type: 'comedy',
  },
  {
    title: 'James Acaster - Cold Lasagne Hate Myself 1999 Tour',
    type: 'comedy',
  },
  {
    title: 'The Midnight',
  },
  {
    title: 'The Chemical Brothers - No Geography Tour',
  },
  {
    title: 'Stuart Francis - Into the Punset Tour',
    type: 'comedy',
  },
  {
    title: 'Jimmy Carr - Terribly Funny Tour',
    type: 'comedy',
  },
  {
    title: 'Bryan Ferry',
  },
  {
    title: 'Ellie Goulding - Brightest Blue Tour',
  },
  {
    title: 'Glass Animals - Dreamland Tour',
  },
  {
    title: 'Fatboy Slim - We\'ve Come a Long Long Way Together Tour',
  },
  {
    title: 'Cirque du Soleil - Luzia',
    type: 'other',
  },
  {
    title: 'Emeli Sandé',
  },
  {
    title: 'Jake Bugg - Saturday Night Sunday Morning Tour',
  },
  {
    title: 'OneRepublic - Human Tour',
  },
  {
    title: 'Bill Bailey - En Route to Normal Tour',
    type: 'comedy',
  },
  {
    title: 'Morcheeba',
  },
  {
    title: 'The Midnight',
  },
  {
    title: 'Emeli Sandé',
  },
  {
    title: 'The Killers - Wonderful Wonderful Tour',
  },
  {
    title: "Rag'n'Bone Man (Forest Live)*",
  },
  {
    title: 'Cirque du Soleil - Corteo',
    type: 'other',
  },
  {
    title: 'Coldplay - Music of the Spheres Tour',
  },
  {
    title: 'Joe Lycett - More, More, More! How Do You Lycett? How Do You Lycett? Tour',
    type: 'comedy',
  },
  {
    title: 'Swedish House Mafia - Paradise Again Tour',
  },
  {
    title: 'Cirque du Soleil - Kurios: Cabinet of Curiosities',
    type: 'other',
  },
  {
    title: 'Reverend and the Makers',
  },
  {
    title: 'Elton John - Farewell Yellow Brick Road Tour',
  },
  {
    title: 'Hot Wheels Monster Trucks Live',
    type: 'other',
  },
  {
    title: 'Jonathan Pie: Heroes & Villans',
    type: 'comedy',
  },
  {
    title: 'Taylor Swift: Eras Tour',
  },
  {
    title: 'The Charlatans & Johnny Marr (Forest Live)*',
  },
  {
    title: 'Olly Murs (Forest Live)*',
  },
  {
    title: 'The Midnight',
  },
  {
    title: 'Moby: Play 25th Anniversary',
  },
  {
    title: 'Jason Manford: A Manford All Seasons',
    type: 'comedy',
  },
  {
    title: 'Glass Animals - I Love You So F***ing Much Tour',
  },
  {
    title: 'Milton Jones: Ha!milton',
    type: 'comedy',
    venue: 'Stafford Gatehouse Theatre',
    date: new Date('2025-02-16'),
  },
  {
    title: 'The Limelight Orchestra Presents: The Music of Bond',
    venue: 'Chester Cathedrial',
    date: new Date('2025-03-08'),
  }
]

export default GIGS
