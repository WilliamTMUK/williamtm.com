import fs from "node:fs/promises"

export default async (config) => {
    const files = await fs.readdir(import.meta.dirname)

    for (const file of files.filter((file) => file !== "index.js")) {
        const functions = await import(import.meta.dirname + "/" + file)

        for (const [name, fnc] of Object.entries(functions.default)) {
            config.addJavaScriptFunction(name, fnc)
        }
    }
}
