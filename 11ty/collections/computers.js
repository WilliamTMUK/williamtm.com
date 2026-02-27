import { PC_2025, PVE1, PVE2, MACBOOK } from "../../src/data/collections/computers.js"

export default async (collection, config) => {
    const slugify = config.getFilter("slugify")
    const result = {
        data: [PC_2025, PVE1, PVE2, MACBOOK],
    }

    const titles = ["PC (2025 Build)", "Proxmox Server 1", "Proxmox Server 2", "MacBook"]

    return result.data.map((computer, index) => {
        return {
            title: titles[index],
            data: {
                ...computer,
            },
        }
    })
}
