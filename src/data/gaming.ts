import {
  IconType,
  SiPlaystation,
  SiSteam,
} from '@icons-pack/react-simple-icons'

const GAMING: { text: string; icon: IconType; href: string; title: string; }[] = [
  {
    text: 'Steam',
    icon: SiSteam,
    href: 'https://steamcommunity.com/id/william/',
    title: 'Steam - William Hook',
  },
  {
    text: 'PlayStation',
    icon: SiPlaystation,
    href: 'https://profile.playstation.com/WilliamTM',
    title: 'PlayStation - WilliamTM',
  },
  // {
  //   text: 'Xbox',
  //   icon: SiRockstargames,
  //   href: 'https://live.xbox.com/en-GB/Profile?gamertag=WilliamTM',
  //   title: 'Xbox Live - WilliamTM',
  // },
]

export default GAMING
