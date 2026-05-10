import { type ColumnDef } from "@tanstack/react-table"

export type Subject = {
  id: string;
  name: string;
  code: string;
  isElective: boolean;
  description: string;
};

export const subjectColumns: ColumnDef<Subject>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "code",
    header: "Ccde",
  },
   {
    accessorKey: "isElective",
    header: "Elective",
  },
  {
    accessorKey: "description",
    header: "Description",
  }
];
