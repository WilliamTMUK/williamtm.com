import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import EleventyNavigationPlugin from "@11ty/eleventy-navigation"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import EleventyWebcPlugin from "@11ty/eleventy-plugin-webc"

const plugins = {
    EleventyHtmlBasePlugin,
    EleventyNavigationPlugin,
    eleventyImageTransformPlugin,
}

export default (config) => {
    config.addPlugin(EleventyWebcPlugin, {
        components: [`${config.dir.input}/components/**/*.webc`],
    })

    for (const [name, plugin] of Object.entries(plugins)) {
        config.addPlugin(plugin)
    }
}
