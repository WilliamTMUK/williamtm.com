import {
  IconType,
  SiPlaystation,
  SiSteam,
} from '@icons-pack/react-simple-icons'

import Xbox from '@/assets/icons/xbox.svg'

const GAMING: { text: string; icon: IconType|Symbol; href: string; title: string; }[] = [
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
  {
    text: 'Xbox',
    icon: Xbox,
    href: 'https://live.xbox.com/en-GB/Profile?gamertag=WilliamTM',
    title: 'Xbox Live - WilliamTM',
  },
]

export default GAMING
