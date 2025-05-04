import { PC_2025, PROXMOX_SERVER, MACBOOK } from "../../src/data/collections/computers.js"

export default async (collection, config) => {
    const slugify = config.getFilter("slugify")
    const result = {
        data: [PC_2025, PROXMOX_SERVER, MACBOOK],
    }

    const titles = ["PC (2025 Build)", "Proxmox Server", "MacBook"]

    return result.data.map((computer, index) => {
        return {
            title: titles[index],
            data: {
                ...computer,
            },
        }
    })
}
