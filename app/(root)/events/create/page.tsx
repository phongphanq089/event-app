import CreateFormEvent from "@/components/CreateFormEvent";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Typography from "@/components/ui/Typography";
import { getEventById } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";
import React from "react";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 mt-[80px]">
        <Typography variant="h2" className="wrapper h3-bold text-center ">
          Create Event
        </Typography>
      </section>
      <MaxWidthWrapper>
        <div className="wrapper my-8">
          <CreateFormEvent userId={userId} type="Create" />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default CreateEvent;
