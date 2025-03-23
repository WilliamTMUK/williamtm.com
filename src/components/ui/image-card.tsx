type Props = {
  imageUrl: string
  caption: string
}

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="overflow-hidden rounded-base border-2 border-slate-200 bg-main font-base shadow-shadow dark:border-slate-800">
      <img className="w-full aspect-[4/3]" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-mtext border-slate-200 p-4 dark:border-slate-800">
        {caption}
      </figcaption>
    </figure>
  )
}
