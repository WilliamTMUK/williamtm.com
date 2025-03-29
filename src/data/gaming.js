import { resolve } from "path"
import { readFileSync } from "fs"
import { siSteam, siPlaystation } from "simple-icons"

const Xbox = readFileSync(resolve(import.meta.dirname, "../../public/assets/icons/xbox.svg"))

const GAMING = [
    {
        text: "Steam",
        icon: siSteam.svg,
        href: "https://steamcommunity.com/id/william/",
        title: "Steam - William Hook",
    },
    {
        text: "PlayStation",
        icon: siPlaystation.svg,
        href: "https://profile.playstation.com/WilliamTM",
        title: "PlayStation - WilliamTM",
    },
    {
        text: "Xbox",
        icon: Xbox,
        href: "https://live.xbox.com/en-GB/Profile?gamertag=WilliamTM",
        title: "Xbox Live - WilliamTM",
    },
]

export default GAMING
