export default function Gigs({ items }: { items: { title: string; type?: string; date?: Date|string; }[]; }) {
  return (
    <div className="mb-16 space-y-2 sm:space-y-4">
      {items.map((gig, id) => {
        return (
          <div key={id}>
            <h3 className="text-base font-heading sm:text-xl">
              {gig.title}
            </h3>
          </div>
        )
      })}
    </div>
  )
}
