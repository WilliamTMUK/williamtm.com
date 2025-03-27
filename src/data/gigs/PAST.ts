import { Herr_Von_Muellerhoff } from "next/font/google";

const GIGS: {
  title: string;
  type?: string;
  venue?: string;
  date?: Date;
}[] = [
  {
    title: 'Roxy Music',
    venue: 'Adelaide Entertainment Centre, Adelaide',
    date: new Date('2001-08-17'),
  },
  {
    title: 'Cirque du Soleil - Delirium',
    type: 'other',
    venue: 'National Indoor Arena, Birmingham',
    date: new Date('2007-10-12'),
  },
  {
    title: 'Stereophonics',
    venue: 'The O₂, London',
    date: new Date('2008-12-20'),
  },
  {
    title: 'The Killers - Day & Age Tour',
    venue: 'LG Arena, Birmingham',
    date: new Date('2009-03-26'),
  },
  {
    title: 'Michael McIntyre - Live and Laughing',
    type: 'comedy',
    venue: 'The O₂, London',
    date: new Date('2009-09-29'),
  },
  {
    title: 'Jimmy Carr - Rapier Wit',
    type: 'comedy',
    venue: 'Symphony Hall, Birmingham',
    date: new Date('2010-12-12'),
  },
  {
    title: 'Frankie Boyle - I Would Happily Punch Every One Of You In The Face',
    type: 'comedy',
    venue: 'National Indoor Arena, Birmingham',
    date: new Date('2010-12-12'),
  },
  {
    title: 'Jean-Michel Jarre',
    venue: 'The O₂, London',
    date: new Date('2010-10-10'),
  },
  {
    title: 'Gorillaz - Plastic Beach Tour',
    venue: 'The O₂, London',
    date: new Date('2010-11-14'),
  },
  {
    title: 'Katy Perry - California Girls Tour',
    venue: 'LG Arena, Birmingham',
    date: new Date('2011-04-04'),
  },
  {
    title: 'Coldplay - Mylo Xyloto Tour',
    venue: 'Etihad Stadium, Manchester',
    date: new Date('2012-06-09'),
  },
  {
    title: 'Jimmy Carr - Gagging Order',
    type: 'comedy',
    venue: 'Assembly Rooms, Derby',
    date: new Date('2012-06-23'),
  },
  {
    title: 'Michael McIntyre',
    type: 'comedy',
    venue: 'The O₂, London',
    date: new Date('2012-09-30'),
  },
  {
    title: 'The Killers - Battle Born Tour',
    venue: 'The O₂, London',
    date: new Date('2012-11-16'),
  },
  {
    title: 'Rich Hall',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2013-03-01'),
  },
  {
    title: 'Russell Kane - Posturing Delivery',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2013-03-02'),
  },
  {
    title: 'Micky Flanagan - Back in the Game',
    type: 'comedy',
    venue: 'NIA Academy, Birmingham',
    date: new Date('2013-03-16'),
  },
  {
    title: 'Rob Beckett',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2013-10-11'),
  },
  {
    title: 'Morcheeba feat. Skye',
    venue: 'The Forum, London',
    date: new Date('2013-11-19'),
  },
  {
    title: 'Nitro Circus Live',
    type: 'other',
    venue: 'National Indoor Arena, Birmingham',
    date: new Date('2013-11-28'),
  },
  {
    title: 'Jason Manford',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2014-02-14'),
  },
  {
    title: 'Miles Jupp',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2014-03-31'),
  },
  {
    title: 'Russell Howard - Wonderbox',
    type: 'comedy',
    venue: 'Royal Albert Hall, London',
    date: new Date('2014-04-14'),
  },
  {
    title: 'James Blunt - Moon Landing Tour',
    venue: 'Civic Hall, Wolverhampton',
    date: new Date('2014-04-18'),
  },
  {
    title: 'Jimmy Carr - Funny Business Tour',
    type: 'comedy',
    venue: 'Victoria Hall, Stoke on Trent',
    date: new Date('2014-06-27'),
  },
  {
    title: 'Coldplay - Ghost Stories Tour',
    venue: 'Royal Albert Hall, London',
    date: new Date('2014-07-02'),
  },
  {
    title: 'Chris Ramsey',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2014-10-08'),
  },
  {
    title: 'Pharrell Williams - Dear G I R L Tour',
    venue: 'The O₂, London',
    date: new Date('2014-10-10'),
  },
  {
    title: 'CHVRCHΞS - The Bones of What You Believe',
    venue: 'O2 Academy, Brixton',
    date: new Date('2014-10-30'),
  },
  {
    title: 'John Bishop - Supersonic',
    type: 'comedy',
    venue: 'National Indoor Arena, Birmingham',
    date: new Date('2014-11-08'),
  },
  {
    title: 'Cirque du Soleil - Kooza',
    type: 'other',
    venue: 'Royal Albert Hall, London',
    date: new Date('2015-01-31'),
  },
  {
    title: 'Top Gear Live',
    type: 'other',
    venue: 'Echo Arena, Liverpool',
    date: new Date('2015-02-14'),
  },
  {
    title: 'Placebo - Loud Like Love Tour',
    venue: 'Hammersmith Apollo, London',
    date: new Date('2015-03-25'),
  },
  {
    title: 'Titanic (Films in Concert)',
    type: 'other',
    venue: 'Royal Albert Hall, London',
    date: new Date('2015-04-27'),
  },
  {
    title: 'Andy Parsons Live & Unleashed',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2015-05-09'),
  },
  {
    title: 'Fall Out Boy - American Beauty/American Psycho Tour',
    venue: 'The SSE Arena, Wembley',
    date: new Date('2015-10-12'),
  },
  {
    title: 'Steve Harley & Cockney Rebel - Best Years Of Our Lives / 40th Anniversary Tour 2015',
    venue: 'indigo at The O2, London',
    date: new Date('2015-11-11'),
  },
  {
    title: 'Josh Widdicombe - What Do I Do Now',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2015-11-13'),
  },
  {
    title: 'CHVRCHΞS - Every Open Eye Tour',
    venue: 'Alexandra Palace, London',
    date: new Date('2015-11-27'),
  },
  {
    title: 'Cirque du Soleil - Amaluna',
    type: 'other',
    venue: 'Royal Albert Hall, London',
    date: new Date('2016-01-16'),
  },
  {
    title: 'Nitro Circus Live',
    type: 'other',
    venue: 'The O₂, London',
    date: new Date('2016-02-06'),
  },
  {
    title: 'Romesh Ranganathan - Irrational',
    type: 'comedy',
  },
  {
    title: 'Gregory Porter',
    venue: 'Royal Albert Hall, London',
    date: new Date('2016-04-04'),
  },
  {
    title: 'Rob Beckett - Mouth of the South',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2016-04-16'),
  },
  {
    title: 'James Bay (Forest Live)',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2016-07-08'),
  },
  {
    title: 'Kaiser Chiefs (Forest Live)*',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2016-07-10'),
  },
  {
    title: 'Miles Jupp',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2016-09-16'),
  },
  {
    title: 'Skye & Ross from Morcheeba',
    venue: 'The Old Market, Hove',
    date: new Date('2016-11-01'),
  },
  {
    title: 'Christine & The Queens',
    venue: 'O2 Academy, Brixton',
    date: new Date('2016-11-02'),
  },
  {
    title: 'Al Murray - Let\'s Go Back Together',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2016-11-12'),
  },
  {
    title: 'Rick Astley (Forest Live)*',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2017-07-08'),
  },
  {
    title: 'Tom Jones (Forest Live)',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2017-07-09'),
  },
  {
    title: 'Johnny Clegg^',
    venue: 'Hammersmith Apollo, London',
    date: new Date('2017-08-19'),
  },
  {
    title: 'Tycho',
    venue: 'Roundhouse, London',
    date: new Date('2017-10-22'),
  },
  {
    title: 'The Killers - Wonderful Wonderful Tour',
    venue: 'Genting Arena, Birmingham',
    date: new Date('2017-11-07'),
  },
  {
    title: 'Greg Davies - You Magnificent Beast Tour',
    type: 'comedy',
    venue: 'Hammersmith Apollo, London',
    date: new Date('2017-11-18'),
  },
  {
    title: 'James Blunt - The Afterlove Tour',
    venue: 'Barclaycard Arena, Birmingham',
    date: new Date('2017-11-21'),
  },
  {
    title: 'Paul Foot - Tis A Pity She\'s A Piglet',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2017-12-02'),
  },
  {
    title: 'Cirque du Soleil - Ovo',
    type: 'other',
    venue: 'Royal Albert Hall, London',
    date: new Date('2018-01-13'),
  },
  {
    title: 'Ed Byrne - Spoiler Alert',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2018-01-26'),
  },
  {
    title: 'Sarah Millican - Control Enthusiast',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2018-02-14'),
  },
  {
    title: 'Fall Out Boy - M A N I A Tour',
    venue: 'Arena Birmingham',
    date: new Date('2018-03-27'),
  },
  {
    title: 'Paloma Faith (Forest Live)*',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2018-06-29'),
  },
  {
    title: 'Paul Heaton & Jacqui Abbott (Forest Live)*',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2018-06-30'),
  },
  {
    title: 'George Ezra (Forest Live)',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2018-07-01'),
  },
  {
    title: 'Morcheeba - Blaze Away Tour',
    venue: 'Gorilla, Manchester',
    date: new Date('2018-10-08'),
  },
  {
    title: 'Chromeo - Head Over Heels Tour',
    venue: 'O2 Ritz, Manchester',
    date: new Date('2018-10-31'),
  },
  {
    title: 'Nitro Circus Live - You Got This Tour',
    type: 'other',
    venue: 'Arena Birmingham',
    date: new Date('2018-11-20'),
  },
  {
    title: 'Rhod Gilbert - The Book of John Tour',
    type: 'comedy',
    venue: 'Regent Theatre, Stoke on Trent',
    date: new Date('2019-03-03'),
  },
  {
    title: 'The Midnight - Europe Winter 2019 Tour',
    venue: 'Scala, London',
    date: new Date('2019-03-05'),
  },
  {
    title: 'Loreena McKennitt - Lost Souls Tour',
    venue: 'Royal Albert Hall, London',
    date: new Date('2019-03-13'),
  },
  {
    title: 'Bill Bailey: Larks in Transit',
    type: 'comedy',
    venue: 'Victoria Hall, Stoke on Trent',
    date: new Date('2019-05-21'),
  },
  {
    title: 'Romesh Ranganathan - Work in Progress',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2019-09-03'),
  },
  {
    title: 'James Acaster - Cold Lasagne Hate Myself 1999 Tour',
    type: 'comedy',
    venue: 'Gatehouse Theatre, Stafford',
    date: new Date('2019-10-27'),
  },
  {
    title: 'The Midnight',
    venue: 'Albert Hall, Manchester',
    date: new Date('2019-11-07'),
  },
  {
    title: 'Jack Whitehall - Stood Up Tour',
    type: 'comedy',
    venue: 'Arena Birmingham',
    date: new Date('2019-11-15'),
  },
  {
    title: 'The Chemical Brothers - No Geography Tour',
    venue: 'Arena Birmingham',
    date: new Date('2019-11-29'),
  },
  {
    title: 'Stuart Francis - Into the Punset Tour',
    type: 'comedy',
    venue: 'Birmingham Town Hall, Birmingham',
    date: new Date('2019-12-06'),
  },
  {
    title: 'Morcheeba',
    type: 'comedy',
    venue: 'EartH (Evolutionary Arts Hackney), London',
    date: new Date('2019-12-07'),
  },
  {
    title: 'E.T: The Extra Terrestrial (Films in Concert)',
    type: 'other',
    venue: 'Royal Albert Hall, London',
    date: new Date('2019-12-08'),
  },
  {
    title: 'Cirque du Soleil - Luzia',
    type: 'other',
    venue: 'Royal Albert Hall, London',
    date: new Date('2020-01-19'),
  },
  {
    title: 'Jimmy Carr - Terribly Funny Tour',
    type: 'comedy',
    venue: 'Symphony Hall, Birmingham',
    date: new Date('2020-03-06'),
  },
  {
    title: 'Bryan Ferry',
    venue: 'Royal Albert Hall, London',
    date: new Date('2020-03-13'),
  },
  {
    title: 'Ellie Goulding - Brightest Blue Tour',
    venue: 'O2 Apollo, Manchester',
    date: new Date('2021-10-11'),
  },
  {
    title: 'Glass Animals - Dreamland Tour',
    venue: 'O2 Victoria Warehouse, Manchester',
    date: new Date('2021-11-11'),
  },
  {
    title: 'Fatboy Slim - We\'ve Come a Long Long Way Together Tour',
    venue: 'M&S Bank Arena, Liverpool',
    date: new Date('2021-12-11'),
  },
  {
    title: 'Cirque du Soleil - Luzia',
    type: 'other',
    venue: 'Royal Albert Hall, London',
    date: new Date('2022-01-14'),
  },
  {
    title: 'Emeli Sandé',
    venue: 'Roundhouse, London',
    date: new Date('2022-01-19'),
  },
  {
    title: 'Jake Bugg - Saturday Night Sunday Morning Tour',
    venue: '02 Victoria Warehouse, Manchester',
    date: new Date('2022-03-18'),
  },
  {
    title: 'OneRepublic - Human Tour',
    venue: 'Eventim Apollo, Hammersmith',
    date: new Date('2022-04-25'),
  },
  {
    title: 'Bill Bailey - En Route to Normal Tour',
    type: 'comedy',
    venue: 'SSE Arena, Wembley',
    date: new Date('2022-05-03'),
  },
  {
    title: 'Morcheeba',
    venue: 'Academy 2, Manchester',
    date: new Date('2022-05-05'),
  },
  {
    title: 'The Midnight',
    venue: 'O2 Academy, Brixton',
    date: new Date('2022-05-07'),
  },
  {
    title: 'Emeli Sandé',
    venue: 'The Mill, Birmingham',
    date: new Date('2022-05-19'),
  },
  {
    title: 'The Killers - Wonderful Wonderful Tour',
    venue: 'Emirates Stadium, London',
    date: new Date('2022-06-04'),
  },
  {
    title: "Rag'n'Bone Man (Forest Live)*",
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2022-06-10'),
  },
  {
    title: 'Cirque du Soleil - Corteo',
    type: 'other',
    venue: 'The O₂, London',
    date: new Date('2022-07-16'),
  },
  {
    title: 'Coldplay - Music of the Spheres Tour',
    venue: 'Wembley Stadium, London',
    date: new Date('2022-08-13'),
  },
  {
    title: 'Joe Lycett - More, More, More! How Do You Lycett? How Do You Lycett? Tour',
    type: 'comedy',
    venue: 'Utilita Arena, Birmingham',
    date: new Date('2022-09-16'),
  },
  {
    title: 'Swedish House Mafia - Paradise Again Tour',
    venue: 'AO Arena, Manchester',
    date: new Date('2022-09-29'),
  },
  {
    title: 'Cirque du Soleil - Kurios: Cabinet of Curiosities',
    type: 'other',
    venue: 'Royal Albert Hall, London',
    date: new Date('2023-01-29'),
  },
  {
    title: 'Reverend and the Makers',
    venue: 'O2 Academy, Sheffield',
    date: new Date('2023-02-18'),
  },
  {
    title: 'Elton John - Farewell Yellow Brick Road Tour',
    venue: 'The O₂, London',
    date: new Date('2023-04-13'),
  },
  {
    title: 'Hot Wheels Monster Trucks Live',
    type: 'other',
    venue: 'Utilita Arena, Birmingham',
    date: new Date('2023-04-15'),
  },
  {
    title: 'Jonathan Pie: Heroes & Villans',
    type: 'comedy',
    venue: 'Lyceum Theatre, Crewe',
    date: new Date('2024-02-29'),
  },
  {
    title: 'Taylor Swift: Eras Tour',
    venue: 'Anfield Stadium, Liverpool',
    date: new Date('2024-06-14'),
  },
  {
    title: 'The Charlatans & Johnny Marr (Forest Live)*',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2024-06-28'),
  },
  {
    title: 'Olly Murs (Forest Live)*',
    venue: 'Cannock Chase Forest, Rugeley',
    date: new Date('2024-06-29'),
  },
  {
    title: 'The Midnight',
    venue: 'O2 Academy, Bristol',
    date: new Date('2024-07-21'),
  },
  {
    title: 'Moby: Play 25th Anniversary',
    venue: 'The O₂, London',
    date: new Date('2024-09-19'),
  },
  {
    title: 'Jason Manford: A Manford All Seasons',
    type: 'comedy',
    venue: 'Stafford Gatehouse Theatre',
    date: new Date('2024-10-10'),
  },
  {
    title: 'Glass Animals - I Love You So F***ing Much Tour',
    venue: 'Co-op Live, Manchester',
    date: new Date('2024-11-02'),
  },
  {
    title: 'Milton Jones: Ha!milton',
    type: 'comedy',
    venue: 'Stafford Gatehouse Theatre',
    date: new Date('2025-02-16'),
  },
  {
    title: 'The Limelight Orchestra Presents: The Music of Bond',
    venue: 'Chester Cathedral',
    date: new Date('2025-03-08'),
  }
]

export default GIGS
