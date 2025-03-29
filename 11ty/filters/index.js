import fs from "node:fs/promises"

export default async (config) => {
    const files = await fs.readdir(import.meta.dirname)

    for (const file of files.filter((file) => file !== "index.js")) {
        const filters = await import(import.meta.dirname + "/" + file)

        for (const [name, filter] of Object.entries(filters.default)) {
            config.addFilter(name, filter)
        }
    }
}
