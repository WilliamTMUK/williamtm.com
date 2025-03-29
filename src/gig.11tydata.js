export default {
    eleventyComputed: {
        title: ({ gig }) => gig.title,
    },
    permalink: ({ gig }) => gig.url,
}
