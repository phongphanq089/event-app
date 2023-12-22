import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const CategoryFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-full bg-grey-50 h-[54px] placeholder:text-grey-500 rounded-full p-regular-16 px-5 py-3  focus-visible:ring-transparent focus:ring-transparent! border border-gray-300">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            value="apple"
            className="py-3 cursor-pointer  focus:bg-primary-50"
          >
            Apple
          </SelectItem>
          <SelectItem
            value="banana"
            className="py-3 cursor-pointer  focus:bg-primary-50"
          >
            Banana
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
