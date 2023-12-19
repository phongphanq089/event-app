import Image from "next/image";
import React from "react";

interface ImageAuto {
  src: string | any;
  alt: string;
  width: string | any;
  height: string | any;
  classname?: string;
}

interface ImageResize {
  src: string | any;
  alt: string;
  heightSize: string;
}

export const ImageAuto = ({
  src,
  alt,
  width,
  height,
  classname,
}: ImageAuto) => {
  return (
    <Image
      src={src}
      alt={alt ? alt : "image-default"}
      width={width}
      height={height}
      className={`h-auto object-cover ${classname}`}
      priority
    />
  );
};

export const ImageResize = ({ src, alt, heightSize }: ImageResize) => {
  return (
    <div
      className={`${
        heightSize ? heightSize : "pt-[100%]"
      }  overflow-hidden relative `}
    >
      <Image
        src={src}
        alt={alt ? alt : "image-default"}
        fill
        className="h-auto object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
