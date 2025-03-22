import LINKS from '@/data/links'
import GAMING from '@/data/gaming'
import Links from '@/components/sections/links'

export default function Page() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">William Hook</h1>
      <p className="mt-2 text-lg sm:text-xl">Stafford, UK</p>

      <div className="my-12">
        <p>You can follow me on: </p>
        <Links links={LINKS} />
      </div>

      <div className="my-12">
        <p>You can play games with me on:</p>
        <Links links={GAMING} />
      </div>
    </div>
  )
}
