import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.action";
import { ICategory } from "@/lib/database/models/category.model";
import React, { startTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";

interface DropdownProps {
  value?: string;
  onChangeHandler?: () => void;
}

const CreateCategoties = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = React.useState("");

  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim(),
    }).then((category) => {
      setCategories((prevState) => [...prevState, category]);
    });
  };

  React.useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <div className="flex items-center">
        <SelectTrigger className="w-full bg-grey-50 h-[54px] placeholder:text-grey-500 rounded-s-full p-regular-16 px-5 py-3 border-none focus-visible:ring-transparent focus:ring-transparent">
          <SelectValue placeholder="Category" />
          <SelectContent>
            {categories.length > 0 &&
              categories.map((category) => (
                <SelectItem
                  key={category._id}
                  value={category._id}
                  className="select-item p-regular-14"
                >
                  {category.name}
                </SelectItem>
              ))}
          </SelectContent>
        </SelectTrigger>
        <AlertDialog>
          <AlertDialogTrigger className=" w-auto p-4 rounded-e-full whitespace-nowrap text-white bg-primary-500 focus:text-primary-500 ">
            Add new category
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>New Category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  placeholder="Category name"
                  className="input-field mt-3"
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => startTransition(handleAddCategory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Select>
  );
};

export default CreateCategoties;
