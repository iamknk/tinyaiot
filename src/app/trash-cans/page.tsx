/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";

type Props = {};
type Payment = {
  trashCanID: string;
  status: string;
  lastPicked: string;
  assignedTo: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "trashCanID",
    header: "Trash Can ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Full",
            "bg-orange-200": row.getValue("status") === "Over Half Way",
            "bg-green-200": row.getValue("status") === "Almost Empty",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "lastPicked",
    header: "Last Picked",
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
  },
];

const data: Payment[] = [
  {
    trashCanID: "TRASH001",
    status: "Full",
    lastPicked: "2023-01-15",
    assignedTo: "Alex Johnson",
  },
  {
    trashCanID: "TRASH002",
    status: "Over Half Way",
    lastPicked: "2023-02-20",
    assignedTo: "Emily Brown",
  },
  {
    trashCanID: "TRASH003",
    status: "Almost Empty",
    lastPicked: "2023-03-10",
    assignedTo: "Jack Smith",
  },
  {
    trashCanID: "TRASH004",
    status: "Full",
    lastPicked: "2023-04-05",
    assignedTo: "Olivia Davis",
  },
  {
    trashCanID: "TRASH005",
    status: "Almost Empty",
    lastPicked: "2023-05-12",
    assignedTo: "Sophia Wilson",
  },
  {
    trashCanID: "TRASH006",
    status: "Over Half Way",
    lastPicked: "2023-06-18",
    assignedTo: "Michael Johnson",
  },
  {
    trashCanID: "TRASH007",
    status: "Almost Empty",
    lastPicked: "2023-07-22",
    assignedTo: "Noah Thompson",
  },
  {
    trashCanID: "TRASH008",
    status: "Full",
    lastPicked: "2023-08-30",
    assignedTo: "Emma Brown",
  },
  {
    trashCanID: "TRASH009",
    status: "Over Half Way",
    lastPicked: "2023-09-05",
    assignedTo: "Liam Miller",
  },
  {
    trashCanID: "TRASH010",
    status: "Almost Empty",
    lastPicked: "2023-10-18",
    assignedTo: "Ava Garcia",
  },
  {
    trashCanID: "TRASH011",
    status: "Full",
    lastPicked: "2023-11-25",
    assignedTo: "Benjamin Taylor",
  },
  {
    trashCanID: "TRASH012",
    status: "Almost Empty",
    lastPicked: "2023-12-08",
    assignedTo: "Charlotte Carter",
  },
  {
    trashCanID: "TRASH013",
    status: "Over Half Way",
    lastPicked: "2024-01-15",
    assignedTo: "James Anderson",
  },
  {
    trashCanID: "TRASH014",
    status: "Almost Empty",
    lastPicked: "2024-02-20",
    assignedTo: "Sophie Roberts",
  },
  {
    trashCanID: "TRASH015",
    status: "Full",
    lastPicked: "2024-03-30",
    assignedTo: "Daniel Martinez",
  },
];

export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Trash Cans" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
