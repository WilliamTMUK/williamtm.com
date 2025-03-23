import { IconType } from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export default function Links({ links }: { links: { text: string; icon: IconType|FC; href: string; title: string; }[]; }) {
  return (
    <div className="my-4">
      <ul className="space-y-4">
        {links.map((link, id) => {
          return (
            <li key={id}>
              <a target="_blank" href={link.href} title={link.title} className="group inline-flex space-x-2">
                <link.icon title="" />
                <span className="underline group-hover:no-underline group-focus:no-underline">{link.text}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
