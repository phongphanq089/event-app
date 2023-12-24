import React from "react";
import { ImageAuto } from "./ResizeImage";
import Typography from "./ui/Typography";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";

const BannerHero = () => {
  return (
    <MaxWidthWrapper className="pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=" flex items-start justify-center flex-col mx-auto max-w-3xl text-start">
          <Typography variant="h1" className="leading-[1.2]">
            your martketplace for high-quality{" "}
            <span className="text-blue-600">digital accsets</span>
          </Typography>
          <Typography variant="p" className="mt-2 max-w-prose">
            Welcome to DigitalHippo! Every asset on our platform undergoes
            meticulous verification by our dedicated team to uphold the highest
            quality standards. We strive to ensure that every piece of content
            meets our rigorous quality criteria, providing you with a reliable
            and trustworthy experience throughout your journey on our platform.
          </Typography>
          <div className="flex items-center gap-4 mt-4">
            <Link href={"/product"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost" className=" bg-gray-300">
              Our quality promise &rarr;
            </Button>
          </div>
        </div>
        <div className="w-full h-full">
          <ImageAuto
            src={"/banner.svg"}
            alt="banner-hero"
            width={600}
            height={500}
            classname="m-auto w-full"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BannerHero;
