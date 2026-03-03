import { PC_2025, PVE1, PVE2, PVE3, MACBOOK } from "../../src/data/collections/computers.js"

export default async (collection, config) => {
    const slugify = config.getFilter("slugify")
    const result = {
        data: [PC_2025, PVE1, PVE2, PVE3, MACBOOK],
    }

    const titles = ["PC (2025 Build)", "Proxmox Server 1", "Proxmox Server 2", "Proxmox Server 3", "MacBook"]

    return result.data.map((computer, index) => {
        return {
            title: titles[index],
            data: {
                ...computer,
            },
        }
    })
}
