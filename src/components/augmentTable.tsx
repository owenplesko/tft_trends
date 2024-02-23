import {
  type CellContext,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import { type AugmentStats } from "~/types/augmentStats";
import augmentData, { type AugmentId } from "~/types/augmentData";

const augmentCell = (props: CellContext<AugmentStats, AugmentId>) => {
  const augmentId = props.getValue();
  const data = augmentData[augmentId];
  return (
    <div className="flex flex-row items-center gap-4">
      <Image
        className="rounded-md border-2 border-neutral-900"
        alt={augmentId}
        width={40}
        height={40}
        src={data.icon}
      />
      <span>{data.name}</span>
    </div>
  );
};

const avgPlacementCell = (props: CellContext<AugmentStats, number | null>) => {
  const avgPlacement = props.getValue();

  if (avgPlacement === null) return <span>-</span>;

  // mix percentage of green to red, max green value is at avgPlacement of 4, max reg value at avgPlacement of 5
  const mixPercentage = Math.max(0, Math.min(1, avgPlacement - 4)) * 100;

  return (
    <span
      className="text-[--customColor]"
      style={
        {
          "--customColor": `color-mix(in srgb,#84cc16,#ef4444 ${mixPercentage.toFixed(0)}%)`,
        } as React.CSSProperties
      }
    >
      {avgPlacement.toFixed(2)}
    </span>
  );
};

const columnHelper = createColumnHelper<AugmentStats>();

const columns = [
  columnHelper.accessor("augment_id", {
    cell: augmentCell,
    header: "Augment",
    enableSorting: false,
  }),
  columnHelper.accessor("avg_placement", {
    cell: avgPlacementCell,
    sortDescFirst: false,
    header: "Avg Place",
  }),
  columnHelper.accessor("pick_1_avg_placement", {
    header: "1st Pick",
    sortDescFirst: false,
    cell: avgPlacementCell,
  }),
  columnHelper.accessor("pick_2_avg_placement", {
    header: "2nd Pick",
    sortDescFirst: false,
    cell: avgPlacementCell,
  }),
  columnHelper.accessor("pick_3_avg_placement", {
    header: "3rd Pick",
    sortDescFirst: false,
    cell: avgPlacementCell,
  }),
  columnHelper.accessor("frequency", {
    header: "Frequency",
    sortDescFirst: true,
  }),
];

const AugmentTable = ({ data }: { data: AugmentStats[] }) => {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "avg_placement", desc: false },
  ]);

  const table = useReactTable({
    columns,
    data,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className="bg-neutral-800 text-neutral-300">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className="p-4"
                key={header.id}
                colSpan={header.getSize()}
                onClick={header.column.getToggleSortingHandler()}
              >
                <div
                  className={`${header.column.getCanSort() ? "cursor-pointer" : null} ${header.column.id === "augment_id" ? null : "justify-center"} flex select-none`}
                >
                  <span>{header.column.columnDef.header?.toString()}</span>
                  {header.column.getCanSort() &&
                  header.column.getIsSorted() === false ? (
                    <Image
                      alt="sort none icon"
                      width={24}
                      height={24}
                      src={"sort/sort_none.svg"}
                    />
                  ) : null}
                  {header.column.getIsSorted() === "asc" ? (
                    <Image
                      alt="sort asc icon"
                      width={24}
                      height={24}
                      src={"sort/sort_asc.svg"}
                    />
                  ) : null}
                  {header.column.getIsSorted() === "desc" ? (
                    <Image
                      alt="sort desc icon"
                      width={24}
                      height={24}
                      src={"sort/sort_desc.svg"}
                    />
                  ) : null}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    className="border-y border-neutral-700 px-4 py-2 text-center"
                    key={cell.id}
                    colSpan={cell.column.getSize()}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AugmentTable;
