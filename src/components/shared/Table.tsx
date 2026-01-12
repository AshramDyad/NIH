"use client"

interface TableCell {
  content: string;
  colspan?: number;
  rowspan?: number;
  isHeader?: boolean;
}

interface TableRow {
  label?: TableCell;
  value: TableCell;
}

interface TableProps {
  data: TableRow[];
}

export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse divide-y divide-zinc-200">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-zinc-50 hover:bg-zinc-100">
              {row.label && (
                <td
                  colSpan={row.label.colspan}
                  rowSpan={row.label.rowspan}
                  className={`px-6 py-3 text-sm md:text-base ${
                    row.label.isHeader
                      ? "bg-primary text-white font-semibold"
                      : row.label.rowspan && row.label.rowspan > 1
                      ? "bg-zinc-100 font-semibold text-zinc-900"
                      : "bg-white text-zinc-600"
                  }`}
                >
                  {row.label.content}
                </td>
              )}
              {row.value && (
                <td
                  colSpan={row.value.colspan}
                  rowSpan={row.value.rowspan}
                  className="px-6 py-3 text-zinc-600 bg-white"
                >
                  {row.value.content}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
