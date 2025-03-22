import { PAST_GIGS, UPCOMING_GIGS } from '@/data/gigs'
import Gigs from '@/components/sections/gigs'

export default function Page() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-3xl">Gigs</h1>
      <Gigs items={PAST_GIGS} />

      <h1 className="mb-8 text-2xl font-heading sm:text-3xl">Upcoming Gigs</h1>
      <Gigs items={UPCOMING_GIGS} />
    </div>
  )
}
