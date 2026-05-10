import { createFileRoute } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@school/ui/components/select";
import { Button } from "@school/ui/components/button";
import { AddStudentDialog } from "@/components/students/add-student-dialog";
import { DataTable } from "@/components/tables/data-table";
import { StudentColumns } from "@/components/tables/student-table-columns";
export const Route = createFileRoute("/_protected/admin/students")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = [
    {
      id: "1",
      name: "Cover page",
      class: 7,
      section: "In Process",
      roll: "18",
    },
    {
      id: "2",
      name: "Cover page",
      class: 7,
      section: "In Process",
      roll: "18",
    },
  ];
  return (
    <div className="container mx-auto p-2 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Select>
            <SelectTrigger className="w-full max-w-20">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Year</SelectLabel>
                <SelectItem value="apple">2083</SelectItem>
                <SelectItem value="banana">2082</SelectItem>
                <SelectItem value="blueberry">2081</SelectItem>
                <SelectItem value="grapes">2080</SelectItem>
                <SelectItem value="pineapple">2079</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Class</SelectLabel>
                <SelectItem value="apple">1</SelectItem>
                <SelectItem value="banana">2</SelectItem>
                <SelectItem value="blueberry">3</SelectItem>
                <SelectItem value="grapes">4</SelectItem>
                <SelectItem value="pineapple">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full max-w-24">
              <SelectValue placeholder="Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Section</SelectLabel>
                <SelectItem value="apple">A</SelectItem>
                <SelectItem value="banana">B</SelectItem>
                <SelectItem value="blueberry">C</SelectItem>
                <SelectItem value="grapes">D</SelectItem>
                <SelectItem value="pineapple">E</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button>Load</Button>
        </div>

        <AddStudentDialog />
      </div>
      <DataTable columns={StudentColumns} data={data} />
    </div>
  );
}
