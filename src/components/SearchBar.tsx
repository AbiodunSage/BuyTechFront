import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex-col w-full max-w-2xl items-center gap-1.5 align-middle justify-center m-16 ">
        <Label className="text-purple-500 relative block" htmlFor="SearchBOx">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-5 left-0 flex items-center pl-2">
            <Search className="h-5 w-7 " viewBox="0 0 15 20" />
          </span>
        </Label>
        <div className="flex items-center">
          <Input
            className=" border-solid  placeholder:italic placeholder:text-purple-400 block bg-white w-full border border-purple-300 rounded-md py-2 pl-9 pr-3 shadow-2xl focus:outline-none focus:border-purple-700 sm:text-sm"
            type=""
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default page;
