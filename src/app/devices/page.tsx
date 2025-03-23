import { TV_BEDROOM, TV_LOUNGE, MOBILE_DEVICES, CAMERA_GEAR, NETWORKING } from '@/data/devices'
import List from '@/components/sections/key-value'

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-heading sm:text-4xl">Devices</h1>
      <p className="mt-2 text-lg sm:text-xl">Stuff that isn&apos;t quite important enough to make the nav bar&hellip;</p>

      <div className="mb-10 text-base sm:text-lg">
        <p></p>
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">TV (Bedroom)</h2>
        <List items={TV_BEDROOM} />
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">TV (Lounge)</h2>
        <List items={TV_LOUNGE} />
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">Mobile Devices</h2>
        <List items={MOBILE_DEVICES} />
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">Camera Gear</h2>
        <List items={CAMERA_GEAR} />
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">Networking & Misc Stuff</h2>
        <List items={NETWORKING} />
      </div>
    </div>
  )
}
