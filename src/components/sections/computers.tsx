import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table'

export default function Computers({ items }: { items: { key: string; value: string; }[]; }) {
  return (
    <div>
      <Table>
        <TableBody>
        {items.map((item) => (
          <TableRow key={item.key}>
            <TableCell className="font-bold">{item.key}</TableCell>
            <TableCell className="text-right">{item.value}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  )
}
