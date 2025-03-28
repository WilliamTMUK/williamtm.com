import { DateTime } from "luxon"
import _ from "@11ty/lodash-custom"

const collections = {
    /**
     * Limit items, based on a passed limit.
     *
     * @param {Array} arr - items to filter
     * @param {Integer} limit - count to limit
     * @returns {Array} filtered items
     */
    limit: (arr, limit = 1) => (arr ?? []).slice(0, limit),

    /**
     * Upcoming items, based on post.data.date.
     *
     * @param {Array} arr - items to filter
     * @returns {Array} filtered items
     */
    upcoming: (arr) => (arr ?? []).filter((post) => DateTime.fromISO(post.data.date) >= DateTime.now()),

    /**
     * Past items, based on post.data.date.
     *
     * @param {Array} arr - items to filter
     * @returns {Array} filtered items
     */
    past: (arr) => (arr ?? []).filter((post) => DateTime.fromISO(post.data.date) < DateTime.now()),

    /**
     * Exclude items from an array, based on the URL.
     *
     * @param {Array} arr - items to filter
     * @param {String} url - url to compare.
     * @returns {Array} filtered items
     */
    exclude: (arr, url) => (arr ?? []).filter((post) => post.page.url !== url),

    /**
     * Find items from a collection, based on attribute.
     *
     * @param {Array} arr - items to filter
     * @param {String} value - value to compare.
     * @param {String} attr - item attribute to compare against.
     * @returns {Array} filtered items
     */
    where: (arr, value, attr = "data.title") => (arr ?? []).filter((item) => _.get(item, attr).includes(value)),

    /**
     * Find the first item.
     *
     * @param {Array} arr - items to filter
     * @returns {Mixed} item
     */
    first: (arr) => collections.limit(arr, 1).pop(),

    /**
     * Find the next item, using the post.data.date.
     *
     * @param {Array} arr - items to filter
     * @returns {Mixed} next item
     */
    next: (arr) => collections.first(collections.upcoming(arr)),
}

export default collections
