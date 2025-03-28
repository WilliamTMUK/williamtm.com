import { PC_2025, NAS_PLEX, INTEL_NUC, MACBOOK } from "../../src/data/collections/computers.js"

export default async (collection, config) => {
    const slugify = config.getFilter("slugify")
    const result = {
        data: [PC_2025, NAS_PLEX, INTEL_NUC, MACBOOK],
    }

    const titles = ["PC (2025 Build)", "NAS / Plex Server", "Intel NUC (Proxmox)", "MacBook"]

    return result.data.map((computer, index) => {
        return {
            title: titles[index],
            data: {
                ...computer,
            },
        }
    })
}
