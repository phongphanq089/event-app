import BannerHero from "@/components/BannerHero";
import CartNotEvent from "@/components/CartNotEvent";
import CategoryFilter from "@/components/CategoryFilter";
import Collection from "@/components/Collection";
import Search from "@/components/Search";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Typography from "@/components/ui/Typography";
import { getAllEvent } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";

import Image from "next/image";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvent({
    query: searchText,
    category,
    page,
    limit: 6,
  });
  console.log(events);

  return (
    <>
      <BannerHero />

      <MaxWidthWrapper className="py-10">
        <section
          id="events"
          className="wrapper my-8 flex flex-col gap-8 md:gap-12"
        >
          <Typography variant="h2">
            Trust by <br /> Thousands of Events
          </Typography>
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <Search />
            <CategoryFilter />
          </div>
          <Collection
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={6}
            page={page}
            totalPages={events?.totalPages}
          />
          {/* <CartNotEvent /> */}
        </section>
      </MaxWidthWrapper>
    </>
  );
}
