import { URL } from "url"

const urls = {
    /**
     * Shorten a URL
     * Returns a URL without the protocol or www. prefix.
     *
     * @param {String} url - the URL to shorten
     * @returns {String} - the shortened URL
     */
    shorten: (url) => {
        url = new URL(url)

        return url.host.replace(/^www\./, "") + (url.pathname !== "/" ? url.pathname : "")
    },
}

export default urls
