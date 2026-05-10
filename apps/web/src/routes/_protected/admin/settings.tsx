import { createFileRoute } from "@tanstack/react-router";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@school/ui/components/tabs";
import { AddAcademicSession } from "@/components/forms/add-academic-session";
import { AcademicSessionColumns } from "@/components/tables/academic-session-table-columns";
import { DataTable } from "@/components/tables/data-table";
import { gradesColumns } from "@/components/tables/grades-columns";
import { subjectColumns } from "@/components/tables/subjects-columns";
import { sectionColumns } from "@/components/tables/section-columns";

export const Route = createFileRoute("/_protected/admin/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  // const data = [
  //   {
  //     id: "1",
  //     name: "2082",
  //     type: "yearly",
  //     startDate: "2082-01-01",
  //     endDate: "2082-12-30",
  //     isCurrent: false,
  //   },
  // ];
  const gradesData = [
    {
      id: "1",
      name: "1",
      sortOrder: 1,
    },
  ];
  const sectionsData = [
    {
      id: "1",
      gradeId: "1",
      sectionName: "A",
      academicSessionId: "1",
      capacity: 20,
      classTeacherId: "1",
      createdAt: "2082-01-01",
    },
  ];
  const subjectsData = [
    {
      id: "1",
      name: "English",
      code: "01Eng",
      isElective: false,
      description: "",
    },
  ];
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="academicSession">Academic Sessions</TabsTrigger>
        <TabsTrigger value="grades">Grades</TabsTrigger>
        <TabsTrigger value="sections">Sections</TabsTrigger>
        <TabsTrigger value="subjects">Subjects</TabsTrigger>
        <TabsTrigger value="exams">Exams</TabsTrigger>
      </TabsList>
      <TabsContent value="academicSession">
        <AddAcademicSession />
        <DataTable columns={AcademicSessionColumns} data={data} />
      </TabsContent>
      <TabsContent value="grades">
        <AddAcademicSession />
        <DataTable columns={gradesColumns} data={gradesData} />
      </TabsContent>
      <TabsContent value="sections">
        <AddAcademicSession />
        <DataTable columns={sectionColumns} data={sectionsData} />
      </TabsContent>
      <TabsContent value="subjects">
        <AddAcademicSession />
        <DataTable columns={subjectColumns} data={subjectsData} />
      </TabsContent>
      <TabsContent value="exams">
        <AddAcademicSession />
        {/* <DataTable columns={examsColumns} data={gradesData} /> */}
      </TabsContent>
    </Tabs>
  );
}
