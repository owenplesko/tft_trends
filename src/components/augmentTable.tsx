import {
  type CellContext,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
  HeaderContext,
} from "@tanstack/react-table";
import Image from "next/image";
import Selection from "~/components/selection";
import { useState } from "react";
import { AugmentStatsSchema, type AugmentStats } from "~/types/augmentStats";
import augmentData, { type AugmentId } from "~/types/augmentData";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const augmentHeader = () => {
  return (
    <div className="flex select-none">
      <span>Augment</span>
    </div>
  );
};

const sortableHeaderFactory = (label: string) => {
  const headerFunc = (ctx: HeaderContext<AugmentStats, number | null>) => {
    return (
      <div className="flex cursor-pointer select-none justify-center">
        <span>{label}</span>
        {ctx.column.getIsSorted() === false ? (
          <Image
            alt="sort none icon"
            width={24}
            height={24}
            src={"sort/sort_none.svg"}
          />
        ) : null}
        {ctx.column.getIsSorted() === "asc" ? (
          <Image
            alt="sort asc icon"
            width={24}
            height={24}
            src={"sort/sort_asc.svg"}
          />
        ) : null}
        {ctx.column.getIsSorted() === "desc" ? (
          <Image
            alt="sort desc icon"
            width={24}
            height={24}
            src={"sort/sort_desc.svg"}
          />
        ) : null}
      </div>
    );
  };
  return headerFunc;
};

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
    header: augmentHeader,
    enableSorting: false,
  }),
  columnHelper.accessor("avg_placement", {
    cell: avgPlacementCell,
    sortDescFirst: false,
    header: sortableHeaderFactory("Avg Place"),
  }),
  columnHelper.accessor("pick_1_avg_placement", {
    header: sortableHeaderFactory("1st Pick"),
    sortDescFirst: false,
    cell: avgPlacementCell,
  }),
  columnHelper.accessor("pick_2_avg_placement", {
    header: sortableHeaderFactory("2nd Pick"),
    sortDescFirst: false,
    cell: avgPlacementCell,
  }),
  columnHelper.accessor("pick_3_avg_placement", {
    header: sortableHeaderFactory("3rd Pick"),
    sortDescFirst: false,
    cell: avgPlacementCell,
  }),
  columnHelper.accessor("frequency", {
    header: sortableHeaderFactory("Frequency"),
    sortDescFirst: true,
  }),
];

const AugmentTable = () => {
  // state
  const [gameVersion, setGameVersion] = useState<string>();

  const [sorting, setSorting] = useState<SortingState>([
    { id: "avg_placement", desc: false },
  ]);

  // queries
  const getGameVersions = async () => {
    const res = await fetch("/api/augments/stats/gameVersions");
    const data = await res.json();
    const gameVersions = z.string().array().parse(data);
    setGameVersion(gameVersions.at(0));
    return gameVersions;
  };

  const gameVersionsQuery = useQuery({
    queryKey: ["gameVersions"],
    queryFn: getGameVersions,
  });

  const getAugmentStats = async () => {
    const res = await fetch(`/api/augments/stats?gameVersion=${gameVersion}`);
    const data = await res.json();
    const augmentStats = AugmentStatsSchema.array().parse(data);
    return augmentStats;
  };

  const augmentStatsQuery = useQuery({
    queryKey: ["augmentStats", gameVersion],
    queryFn: getAugmentStats,
    staleTime: Infinity,
    enabled: !!gameVersion,
  });

  // table decleration
  const table = useReactTable({
    columns,
    data: augmentStatsQuery.data || [],
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // loading state component
  if (!augmentStatsQuery.data) {
    return;
  }

  // main component
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row">
        {gameVersionsQuery.data && gameVersion && (
          <Selection
            label="Patch"
            options={gameVersionsQuery.data}
            selection={gameVersion}
            setSelection={setGameVersion}
          />
        )}
      </div>
      <div className="flex flex-col rounded-md border border-neutral-950 bg-neutral-800 text-neutral-300">
        <table className="divide-y divide-neutral-700">
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
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-neutral-700">
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        className="px-4 py-2 text-center"
                        key={cell.id}
                        colSpan={cell.column.getSize()}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AugmentTable;
