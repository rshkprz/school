import { Button } from "@school/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@school/ui/components/dialog";
import { Field, FieldGroup, FieldLabel } from "@school/ui/components/field";
import { Input } from "@school/ui/components/input";
import { Label } from "@school/ui/components/label";
import { IconPlus } from "@tabler/icons-react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";

const AddStudentSchema = z.object({
  admissionNumber: z.string().min(1),
  fullName: z.string().min(1),
  dateOfBirth: z.string(),
  address: z.string().min(1),
  bloodGroup: z.string(),
  guardianName: z.string(),
  guardianPhone: z.string().length(10),
});
export function AddStudentDialog() {
  const form = useForm({
    defaultValues: {
      admissionNumber: "",
      fullName: "",
      dateOfBirth: "",
      address: "",
      bloodGroup: "",
      guardianName: "",
      guardianPhone: "",
    },
    validators: { onSubmit: AddStudentSchema },
    onSubmit: async ({ value }) => {
      toast.success("Student added");
    },
  });
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button>
            <IconPlus />
            Add Student
          </Button>
        }
      ></DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form
          name="addStudentForm"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Add Student</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <form.Field name="admissionNumber">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Admission number</FieldLabel>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="fullName">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="dateOfBirth">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor="fullname">Date of Birth</FieldLabel>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="address">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor="address">Address</FieldLabel>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="bloodGroup">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor="bloodgroup">Blood Group</FieldLabel>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="guardianName">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor="guardianName">Guardian Name</FieldLabel>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="guardianPhone">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor="guardianPhone">
                    Guardian Phone
                  </FieldLabel>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={<Button variant="outline">Cancel</Button>}
            ></DialogClose>

            <Button type="submit" form="addStudentForm">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
