import React from "react";
import { Input } from "./ui/input";

const Search = ({
  placeholder = "Search title...",
}: {
  placeholder?: string;
}) => {
  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 border border-gray-300">
      <Input
        type="text"
        placeholder={placeholder}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;
