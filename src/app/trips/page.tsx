import ImageCard from '@/components/ui/image-card'
import { Link } from 'next-view-transitions'
import cover from '@/data/trips/euro-moto-tour/cover.jpg'

export default function Trips() {
  console.log(cover.src)
  return (
    <div>
      <h1 className="text-2xl mb-10 font-heading sm:text-4xl">Trips…</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Link href="/trips/euro-moto-tour" className="block">
          <ImageCard
            caption="Euro Moto Tour"
            imageUrl={cover.src}
          ></ImageCard>
        </Link>

        <Link href="/trips/euro-moto-tour" className="block">
          <ImageCard
            caption="Euro Moto Tour"
            imageUrl={cover.src}
          ></ImageCard>
        </Link>

        <Link href="/trips/euro-moto-tour" className="block">
          <ImageCard
            caption="Euro Moto Tour"
            imageUrl={cover.src}
          ></ImageCard>
        </Link>

        <Link href="/trips/euro-moto-tour" className="block">
          <ImageCard
            caption="Euro Moto Tour"
            imageUrl={cover.src}
          ></ImageCard>
        </Link>

        <Link href="/trips/euro-moto-tour" className="block">
          <ImageCard
            caption="Euro Moto Tour"
            imageUrl={cover.src}
          ></ImageCard>
        </Link>
      </div>
    </div>
  )
}
