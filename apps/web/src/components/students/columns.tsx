
import { type ColumnDef } from "@tanstack/react-table"

export type Student = {
  id: string;
  name: string;
  class: number;
  section: string;
  roll: string|number;
};

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "class",
    header: "Class",
  },
   {
    accessorKey: "section",
    header: "Section",
  },
  {
    accessorKey: "roll",
    header: "Roll",
  }
];
