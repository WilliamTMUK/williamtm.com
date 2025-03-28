export default {
    layout: "trip.webc",
    tags: ['trips'],
    // eleventyComputed: {
    //     title: ({ trip }) => trip.data.title,
    // },
    // permalink: ({ trip }) => `/trips/${slugify(trip.data.title)}/`,
    permalink: function ({ title }) {
        return `/recipes/${this.slugify(title)}`;
	},
}
