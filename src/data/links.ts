import {
  IconType,
  SiFacebook,
  SiInstagram,
  SiLetterboxd,
  SiMastodon,
  SiPixelfed,
  SiYoutube,
} from '@icons-pack/react-simple-icons'

import Pinkbike from '@/assets/icons/pinkbike.svg'

const LINKS: { text: string; icon: IconType; href: string; title: string; }[] = [
  {
    text: 'Mastodon',
    icon: SiMastodon,
    href: 'https://mastodon.social/@williamtm',
    title: 'Mastodon - @williamtm@mastodon.social',
  },
  {
    text: 'Pixelfed',
    icon: SiPixelfed,
    href: 'https://pixelfed.social/williamtm',
    title: 'Pixelfed - @williamtm@pixelfed.social',
  },
  {
    text: 'Facebook',
    icon: SiFacebook,
    href: 'https://www.facebook.com/williamtm',
    title: 'Facebook - Will Hook',
  },
  {
    text: 'Instagram',
    icon: SiInstagram,
    href: 'https://instagram.com/williamtm',
    title: 'Instagram - @williamtm',
  },
  {
    text: 'YouTube',
    icon: SiYoutube,
    href: 'https://www.youtube.com/user/williamhook',
    title: 'YouTube - William Hook',
  },
  {
    text: 'Pinkbike',
    icon: Pinkbike,
    href: 'https://www.pinkbike.com/u/williamtm/',
    title: 'Pinkbike - William Hook',
  },
  {
    text: 'Letterboxd',
    icon: SiLetterboxd,
    href: 'https://letterboxd.com/WilliamTM/',
    title: 'Letterboxd - WilliamTM',
  },
]

export default LINKS
