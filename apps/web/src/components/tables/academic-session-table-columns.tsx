
import { AcademicSession } from "@/types/academic-session";
import { type ColumnDef } from "@tanstack/react-table"



export const AcademicSessionColumns: ColumnDef<AcademicSession>[] = [
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
