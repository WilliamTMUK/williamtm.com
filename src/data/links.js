import { resolve } from "path"
import { readFileSync } from "fs"
import { siMastodon, siPixelfed, siFacebook, siInstagram, siYoutube, siLetterboxd } from "simple-icons"

const Pinkbike = readFileSync(resolve(import.meta.dirname, "../../public/assets/icons/pinkbike.svg"))

const LINKS = [
    {
        text: "Mastodon",
        icon: siMastodon.svg,
        href: "https://mastodon.social/@williamtm",
        title: "Mastodon - @williamtm@mastodon.social",
    },
    {
        text: "Pixelfed",
        icon: siPixelfed.svg,
        href: "https://pixelfed.social/williamtm",
        title: "Pixelfed - @williamtm@pixelfed.social",
    },
    {
        text: "Facebook",
        icon: siFacebook.svg,
        href: "https://www.facebook.com/williamtm",
        title: "Facebook - Will Hook",
    },
    {
        text: "Instagram",
        icon: siInstagram.svg,
        href: "https://instagram.com/williamtm",
        title: "Instagram - @williamtm",
    },
    {
        text: "YouTube",
        icon: siYoutube.svg,
        href: "https://www.youtube.com/user/williamhook",
        title: "YouTube - William Hook",
    },
    {
        text: "Pinkbike",
        icon: Pinkbike,
        href: "https://www.pinkbike.com/u/williamtm/",
        title: "Pinkbike - William Hook",
    },
    {
        text: "Letterboxd",
        icon: siLetterboxd.svg,
        href: "https://letterboxd.com/WilliamTM/",
        title: "Letterboxd - WilliamTM",
    },
]

export default LINKS
