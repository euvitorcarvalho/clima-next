"use client";

import Select from "./Select";
import { conditionFilter, temperatureFilter, windFilter } from "@/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Filters() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="flex flex-col sm:py-3.5 py-2 px-7.5 sm:flex-row max-w-[70%] items-center justify-center w-full sm:gap-9.5 gap-4 sm:h-26 bg-(--surface) rounded-xl">
      <p className="sm:text-[27px] flex flex-row justify-center items-center gap-1 text-foreground">
        Filters
        <ChevronDown
          className="sm:hidden size-5"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        />
      </p>
      <Select condition={conditionFilter} isFilterOpen={isFilterOpen} />
      <Select condition={temperatureFilter} isFilterOpen={isFilterOpen} />
      <Select condition={windFilter} isFilterOpen={isFilterOpen} />
    </div>
  );
}
