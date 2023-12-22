"use client";
import React from "react";
import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { IEvent } from "@/lib/database/models/event.model";
import { useForm } from "react-hook-form";
import { EventFormSchemaValidator, eventFormSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventDefaultValues } from "@/contants";
import { Textarea } from "./ui/textarea";
import FileUpload from "./FileUpload";
import { uploadFiles, useUploadThing } from "@/lib/uploadThing";
import { CalendarDays, DollarSign, Link2, Map } from "lucide-react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import CreateCategoties from "./CreateCategoties";
import { createEvent } from "@/lib/actions/event.action";
import { useRouter } from "next/navigation";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
};

const CreateFormEvent = ({ userId, type, event, eventId }: EventFormProps) => {
  const [files, setFiles] = React.useState<File[]>([]);

  const { startUpload } = useUploadThing("imageUploader");

  const router = useRouter();

  const initialValues =
    event && type === "Update"
      ? {
          ...event,
          startDateTime: new Date(event.startDateTime),
          endDateTime: new Date(event.endDateTime),
        }
      : eventDefaultValues;

  const form = useForm<EventFormSchemaValidator>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: EventFormSchemaValidator) {
    let uploadedImageUrl = values.imageUrl;

    console.log(values);

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);
      console.log(uploadedImages, "sdhsdghsodig");
      if (!uploadedImages) {
        return;
      }
      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === "Create") {
      try {
        const newEvent = await createEvent({
          event: { ...values, imageUrl: uploadedImageUrl },
          userId,
          path: "/profile",
        });

        if (newEvent) {
          form.reset();
          router.push(`/events/${newEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="">
      <Form {...form}>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Event title"
                      {...field}
                      className="bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <CreateCategoties
                      onChangeHandler={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <Textarea
                      placeholder="Description"
                      {...field}
                      className="bg-grey-50 flex flex-1 placeholder:text-grey-500 p-regular-16 px-5 py-3 border-none rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <FileUpload
                      onFieldChange={field.onChange}
                      setFiles={setFiles}
                      imageUrl={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 p-1  relative">
                      <Map className="block  absolute  left-5 top-[50%] translate-y-[-50%]" />
                      <Input
                        placeholder="Event location or Online"
                        {...field}
                        className="bg-grey-50 h-full focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-14 py-3"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="startDateTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex flex-center h-[54px] w-full  rounded-full bg-grey-50 p-1  relative">
                      <CalendarDays className="block  absolute  left-5 top-[50%] translate-y-[-50%]" />
                      <div className="h-full w-full px-14">
                        <DatePicker
                          selected={field.value}
                          onChange={(date: Date) => field.onChange(date)}
                          showTimeSelect
                          timeInputLabel="Time:"
                          dateFormat="MM/dd/yyyy h:mm aa"
                          wrapperClassName="datePicker"
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDateTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex flex-center h-[54px] w-full  rounded-full bg-grey-50 p-1  relative">
                      <CalendarDays className="block  absolute  left-5 top-[50%] translate-y-[-50%]" />
                      <div className="h-full w-full px-14">
                        <DatePicker
                          selected={field.value}
                          onChange={(date: Date) => field.onChange(date)}
                          showTimeSelect
                          timeInputLabel="Time:"
                          dateFormat="MM/dd/yyyy h:mm aa"
                          wrapperClassName="datePicker"
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex items-center h-[54px] w-full  rounded-full bg-grey-50 px-4 py-2 relative">
                      <DollarSign className="block  absolute  left-5 top-[50%] translate-y-[-50%]" />
                      <Input
                        type="number"
                        placeholder="Price"
                        {...field}
                        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 pl-14 mr-8 "
                      />
                      <FormField
                        control={form.control}
                        name="isFree"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center">
                                <label
                                  htmlFor="isFree"
                                  className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Free Ticket
                                </label>
                                <Checkbox
                                  onCheckedChange={field.onChange}
                                  checked={field.value}
                                  id="isFree"
                                  className="mr-2 h-5 w-5 border-2 border-primary-500"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 p-1  relative">
                      <Link2 className="block  absolute  left-5 top-[50%] translate-y-[-50%]" />
                      <Input
                        placeholder="Event location or Online"
                        {...field}
                        className="bg-grey-50 h-full focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-14 py-3"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="w-full text-lg py-6 rounded-3xl"
          >
            submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateFormEvent;
