function Date({ date }: { date: Date }) {
  return (
    <em className="font-base not-italic">{date.toLocaleDateString()}</em>
  );
}

function Venue({ venue }: { venue: string }) {
  return (
    <em className="font-base not-italic">{venue}</em>
  );
}

export default function Gigs({ items }: { items: { title: string; type?: string; venue?: string; date?: Date; }[]; }) {
  return (
    <div className="mb-16 space-y-2 sm:space-y-4">
      {items.map((gig, id) => {
        return (
          <div key={id} className="flex flex-col">
            <h3 className="text-base font-heading sm:text-xl">
              {gig.title}
            </h3>

            {gig.venue && <Venue venue={gig.venue} />}
            {gig.date && <Date date={gig.date} />}
          </div>
        )
      })}
    </div>
  )
}
