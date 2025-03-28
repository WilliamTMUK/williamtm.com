import { DateTime } from "luxon"

const dates = {
    /**
     * Check whether a date is in the future.
     *
     * @param {String} date - string Date
     * @returns {Boolean}
     */
    isFuture: (date) => {
        return DateTime.fromISO(date) >= DateTime.now()
    },

    /**
     * Check whether a date is in the past.
     *
     * @param {String} date - string Date
     * @returns {Boolean}
     */
    isPast: (date) => {
        return DateTime.fromISO(date) <= DateTime.now()
    },
}

export default dates
