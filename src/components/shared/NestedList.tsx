"use client"

interface NestedListProps {
  items: string[];
  orderedItems?: string[];
}

export default function NestedList({ items, orderedItems }: NestedListProps) {
  return (
    <ul className="list-disc list-inside space-y-2 ml-4 marker:text-primary">
      {items.map((item, index) => (
        <li key={index} className="text-zinc-600 leading-relaxed">
          {item}
          {orderedItems && orderedItems.length > 0 && index === 2 && (
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              {orderedItems.map((orderedItem, orderedIndex) => (
                <li key={orderedIndex} className="text-zinc-700">
                  {orderedItem}
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ul>
  );
}
