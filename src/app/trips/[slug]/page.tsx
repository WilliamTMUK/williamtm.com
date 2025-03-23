import ImageCard from '@/components/ui/image-card'
import cover from '@/data/trips/euro-moto-tour/cover.jpg'

export default async function Page({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params

  return (
    <div>
      <h1 className="text-2xl font-heading sm:text-4xl">Trips…</h1>
      <h2 className="mt-2 text-lg sm:text-xl mb-10">{slug}</h2>

      <ImageCard
        caption="London Eye"
        imageUrl={cover.src}
      ></ImageCard>
    </div>
  )
}

export function generateStaticParams() {
  return [{ slug: 'euro-moto-tour' }]
}
