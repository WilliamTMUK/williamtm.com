import { IconType } from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export default function Links({ links }: { links: { text: string; icon: IconType|FC; href: string; title: string; }[]; }) {
  return (
    <div className="my-4">
        <ul className="p-0 m-0 text-text dark:text-text w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {links.map((link, id) => {
          return (
            <li key={id} >
              <a target="_blank" href={link.href} title={link.title} className="block border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-5 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none">
                <link.icon title="" className="block h-8 w-8 sm:h-10 sm:w-10" />
                <span className="mt-3 text-lg font-heading sm:text-xl">{link.text}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
