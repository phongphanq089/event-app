import { cn } from "@/lib/utils";
import React from "react";
import { ImageAuto } from "../ResizeImage";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-auto h-auto", className)}>
      <ImageAuto
        classname="w-full"
        src={"/logo.svg"}
        alt="logo-page"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Logo;
