import fs from "node:fs/promises"

export default async (config) => {
    const files = await fs.readdir(import.meta.dirname)

    for (const file of files.filter((file) => file !== "index.js")) {
        const collections = await import(import.meta.dirname + "/" + file)
        const name = file.replace(/\.[^/.]+$/, "")

        config.addCollection(name, (api) => collections.default(api, config))
    }
}
