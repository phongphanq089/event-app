import { ImageAuto } from "@/components/ResizeImage";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Typography from "@/components/ui/Typography";

function NotFoundPage() {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto flex flex-col justify-center items-center">
        <ImageAuto
          src="/page-not-found.svg"
          alt="page-not-found"
          width={500}
          height={500}
        />
        <Typography variant="h1">PAGE NOT FOUND</Typography>
      </div>
    </MaxWidthWrapper>
  );
}

export default NotFoundPage;
