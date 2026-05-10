import { type ColumnDef } from "@tanstack/react-table"

export type Exam = {
  id: string;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
  isCurrent:boolean;
};

export const examsColumns: ColumnDef<Exam>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
   {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "isCurrent",
    header: "Current",
  }
];
