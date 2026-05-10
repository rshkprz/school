import { Button } from "@school/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@school/ui/components/dialog";
import { Checkbox } from "@school/ui/components/checkbox";
import { Field, FieldGroup, FieldLabel } from "@school/ui/components/field";
import { Input } from "@school/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@school/ui/components/select";
import { IconPlus } from "@tabler/icons-react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";
import { addAcademicSession } from "@/api/settings";
import {academicSessionSchema} from "@school/validators/settings.validator"

export function AddAcademicSession() {
  const form = useForm({
    defaultValues: {
      name: "",
      type: "year",
      startDate: "",
      endDate: "",
      isCurrent: false,
    },
    validators: { onSubmit: academicSessionSchema },
    onSubmit: async ({ value }) => {
      try{
        const res = await addAcademicSession(value)
        toast.success("New academic session added")
      }catch(error:any){
        toast.error(error?.response?.data?.message || "Adding academic session failed")
      }
    },
  });
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button>
            <IconPlus />
            Add New
          </Button>
        }
      ></DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add Academic Session</DialogTitle>
        </DialogHeader>
        <form
          name="addAcademicSessionForm"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field name="name">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
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
            <form.Field
              name="type"
              validators={{
                onChange: academicSessionSchema.shape.type,
              }}
            >
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field>
                    <FieldLabel htmlFor="type">Type</FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={(value) => field.handleChange(value!)}
                    >
                      <SelectTrigger
                        aria-invalid={isInvalid}
                        className="min-w-30"
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="year">Year</SelectItem>
                        <SelectItem value="semester">Semester</SelectItem>
                      </SelectContent>
                    </Select>
                    {field.state.meta.errors && isInvalid && (
                      <p className="text-sm text-red-500 mt-1">
                        {field.state.meta.errors.join(", ")}
                      </p>
                    )}
                  </Field>
                );
              }}
            </form.Field>
            <form.Field name="startDate">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor="startDate">Start Date</FieldLabel>
                  <Input
                    type="date"
                    id={field.name}
                    name={field.name}
                    value={
                      field.state.value instanceof Date
                        ? field.state.value.toISOString().split("T")[0]
                        : ""
                    }
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(new Date(e.target.value))
                    }
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="endDate">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor="endDate">End Date</FieldLabel>
                  <Input
                    type="date"
                    id={field.name}
                    name={field.name}
                    value={
                      field.state.value instanceof Date
                        ? field.state.value.toISOString().split("T")[0]
                        : ""
                    }
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(new Date(e.target.value))
                    }
                  />
                </Field>
              )}
            </form.Field>
            <form.Field name="isCurrent">
              {(field) => (
                <Field orientation="horizontal">
                  <Checkbox
                    id={field.name}
                    name={field.name}
                    checked={field.state.value}
                    onBlur={field.handleBlur}
                    onCheckedChange={(checked) =>
                      field.handleChange(checked === true)
                    }
                  />
                  <FieldLabel htmlFor="isCurrent">
                    Set as current year
                  </FieldLabel>
                </Field>
              )}
            </form.Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={<Button variant="outline">Cancel</Button>}
            ></DialogClose>
            <Button type="submit" form="addAcademicSessionForm">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
