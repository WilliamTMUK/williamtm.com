import fs from "node:fs/promises"

export default async (config) => {
    const files = await fs.readdir(import.meta.dirname)

    for (const file of files.filter((file) => file !== "index.js")) {
        const shortcodes = await import(import.meta.dirname + "/" + file)
        const name = file.replace(/\.[^/.]+$/, "")

        config.addShortcode(name, shortcodes.default)
    }
}
