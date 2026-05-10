import { type ColumnDef } from "@tanstack/react-table"

export type Grades = {
  id: string;
  name: string;
 sortOrder?: number;

};

export const gradesColumns: ColumnDef<Grades>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sortOrder",
    header: "Sort Order",
  },
   
];
