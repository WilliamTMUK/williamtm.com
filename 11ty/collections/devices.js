import { TV_BEDROOM, TV_LOUNGE, MOBILE_DEVICES, CAMERA_GEAR, NETWORKING } from "../../src/data/collections/devices.js"

export default async (collection, config) => {
    const slugify = config.getFilter("slugify")
    const result = {
        data: [TV_BEDROOM, TV_LOUNGE, MOBILE_DEVICES, CAMERA_GEAR, NETWORKING],
    }

    const titles = ["TV (Bedroom)", "TV (Lounge)", "Mobile Devices", "Camera Gear", "Networking & Misc Stuff"]

    return result.data.map((device, index) => {
        return {
            title: titles[index],
            data: {
                ...device,
            },
        }
    })
}
