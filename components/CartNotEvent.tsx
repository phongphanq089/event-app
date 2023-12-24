import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import { ImageAuto } from "./ResizeImage";
import Typography from "./ui/Typography";

const CartNotEvent = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center">
        <ImageAuto
          src={"/no-product.svg"}
          alt="no-product"
          height={350}
          width={350}
        />
        <Typography variant="h3">Product is currently not available</Typography>
      </div>
    </MaxWidthWrapper>
  );
};

export default CartNotEvent;
