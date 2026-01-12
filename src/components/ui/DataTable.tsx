"use client";

import React from "react";
import { Loader2, GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/**
 * Column definition for the DataTable component.
 * @template T - The type of data in each row.
 */
export interface DataTableColumn<T> {
  /** Unique identifier for the column */
  id: string;
  /** Header text for the column */
  header: string;
  /** Key to access data from the row (optional if using custom cell) */
  accessorKey?: keyof T;
  /** Custom cell renderer for complex content */
  cell?: (row: T, index: number) => React.ReactNode;
  /** Optional className for the header cell */
  headerClassName?: string;
  /** Optional className for the body cell */
  cellClassName?: string;
}

/**
 * Props for the DataTable component.
 * @template T - The type of data in each row.
 */
export interface DataTableProps<T> {
  /** Array of column definitions */
  columns: DataTableColumn<T>[];
  /** Array of data rows */
  data: T[];
  /** Unique key accessor for each row */
  keyAccessor: keyof T;
  /** Loading state */
  isLoading?: boolean;
  /** Loading message */
  loadingMessage?: string;
  /** Empty state icon */
  emptyIcon?: React.ReactNode;
  /** Empty state title */
  emptyTitle?: string;
  /** Empty state description */
  emptyDescription?: string;
  /** Enable drag and drop sorting */
  sortable?: boolean;
  /** Callback when drag ends (required if sortable is true) */
  onDragEnd?: (event: DragEndEvent) => void;
}

/**
 * Internal sortable row component
 */
function SortableRow<T>({
  row,
  index,
  columns,
  keyAccessor,
}: {
  row: T;
  index: number;
  columns: DataTableColumn<T>[];
  keyAccessor: keyof T;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: String(row[keyAccessor]) });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={`hover:bg-gray-50 transition-colors ${
        isDragging ? "bg-gray-100" : ""
      }`}
    >
      {/* Drag Handle - First column */}
      <td className="px-4 py-4 sticky left-0 bg-white z-10">
        <button
          {...attributes}
          {...listeners}
          className="p-2 hover:bg-primary/90 bg-primary rounded-lg cursor-grab active:cursor-grabbing transition-colors touch-none"
          title="Drag to reorder"
          style={{ touchAction: "none" }}
        >
          <GripVertical className="w-5 h-5 text-white" />
        </button>
      </td>
      {/* Data cells */}
      {columns.map((column) => (
        <td
          key={column.id}
          className={`px-6 py-4 ${column.cellClassName || ""}`}
        >
          {column.cell
            ? column.cell(row, index)
            : column.accessorKey
            ? String(row[column.accessorKey] ?? "")
            : null}
        </td>
      ))}
    </tr>
  );
}

/**
 * A reusable, type-safe DataTable component for the admin panel.
 * Supports custom cell rendering, loading states, empty states, and drag-and-drop sorting.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <DataTable
 *   columns={[
 *     { id: 'name', header: 'Name', accessorKey: 'name' },
 *     { id: 'actions', header: 'Actions', cell: (row) => <button>Edit</button> }
 *   ]}
 *   data={users}
 *   keyAccessor="id"
 * />
 *
 * // With drag-and-drop
 * <DataTable
 *   columns={columns}
 *   data={items}
 *   keyAccessor="id"
 *   sortable
 *   onDragEnd={handleDragEnd}
 * />
 * ```
 */
export function DataTable<T>({
  columns,
  data,
  keyAccessor,
  isLoading = false,
  loadingMessage = "Loading...",
  emptyIcon,
  emptyTitle = "No Data",
  emptyDescription = "No items found.",
  sortable = false,
  onDragEnd,
}: DataTableProps<T>) {
  // Drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Loading State
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="ml-3 text-gray-600">{loadingMessage}</span>
      </div>
    );
  }

  // Empty State
  if (data.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
        {emptyIcon && <div className="mx-auto mb-4">{emptyIcon}</div>}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {emptyTitle}
        </h3>
        <p className="text-gray-600">{emptyDescription}</p>
      </div>
    );
  }

  // Table content
  const tableContent = (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {/* Empty header for drag handle column when sortable */}
              {sortable && (
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10"></th>
              )}
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={`text-left px-6 py-4 text-sm font-semibold text-gray-900 ${
                    column.headerClassName || ""
                  }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortable ? (
              <SortableContext
                items={data.map((row) => String(row[keyAccessor]))}
                strategy={verticalListSortingStrategy}
              >
                {data.map((row, index) => (
                  <SortableRow
                    key={String(row[keyAccessor])}
                    row={row}
                    index={index}
                    columns={columns}
                    keyAccessor={keyAccessor}
                  />
                ))}
              </SortableContext>
            ) : (
              data.map((row, index) => (
                <tr
                  key={String(row[keyAccessor])}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {columns.map((column) => (
                    <td
                      key={column.id}
                      className={`px-6 py-4 ${column.cellClassName || ""}`}
                    >
                      {column.cell
                        ? column.cell(row, index)
                        : column.accessorKey
                        ? String(row[column.accessorKey] ?? "")
                        : null}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Wrap with DndContext if sortable
  if (sortable && onDragEnd) {
    return (
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        {tableContent}
      </DndContext>
    );
  }

  return tableContent;
}

export default DataTable;
