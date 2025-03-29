import { DateTime } from "luxon"

const dates = {
    /**
     * Check whether a date is in the future.
     *
     * @param {Date|String} date - string Date
     * @returns {Boolean}
     */
    isFuture: (date) => {
        return DateTime.fromISO(date instanceof Date ? date.toISOString() : date) >= DateTime.now()
    },

    /**
     * Check whether a date is in the past.
     *
     * @param {Date|String} date - string Date
     * @returns {Boolean}
     */
    isPast: (date) => {
        return DateTime.fromISO(date instanceof Date ? date.toISOString() : date) <= DateTime.now()
    },
}

export default dates
