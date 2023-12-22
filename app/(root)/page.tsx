import BannerHero from "@/components/BannerHero";
import CategoryFilter from "@/components/CategoryFilter";
import Search from "@/components/Search";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Typography from "@/components/ui/Typography";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-[100px]">
        <BannerHero />
      </div>
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
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
