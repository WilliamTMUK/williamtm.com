import { PAST_GIGS, UPCOMING_GIGS } from "../../src/data/collections/gigs.js"

export default async (collection, config) => {
    const slugify = config.getFilter("slugify")
    const date = config.getFilter("date")
    const result = {
        data: [...PAST_GIGS, ...UPCOMING_GIGS],
    }

    return result.data.map((gig) => {
        return {
            title: gig.title,
            data: {
                ...gig,
                date: gig.date,
            },
            url: (function () {
                if (gig.date) {
                    return `/gigs/${date(gig.date, "y-LL-dd")}/${slugify(gig.title)}/`
                }

                return `/gigs/${slugify(gig.title)}/`
            })(),
        }
    })
}
