export default function L({ items }: { items: { key: string; value: string; }[]; }) {
  return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.key} className="space-x-2">
              <strong>{item.key}</strong>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}
