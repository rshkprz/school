import { type ColumnDef } from "@tanstack/react-table"

export type Section = {
  id: string;
  gradeId: string;
  sectionName: string;
  academicSessionId: string;
  capacity: number;
  classTeacherId:string;
  createdAt: string;
};

export const sectionColumns: ColumnDef<Section>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "gradeId",
    header: "Grade",
  },
  {
    accessorKey: "sectionName",
    header: "Section Name",
  },
   {
    accessorKey: "academicSessionId",
    header: "Academic Session",
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
  },
  {
    accessorKey: "classTeacherId",
    header: "Class Teacher",
  },{
    accessorKey: "createdAt",
    header: "Created At"
  }
];
