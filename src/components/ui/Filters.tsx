import Select from "./Select";
import { conditionFilter, temperatureFilter, windFilter } from "@/constants";

export default function Filters() {
  return (
    <div className="flex items-center w-full sm:h-26 bg-(--surface) rounded-xl">
      Filters
      <Select condition={conditionFilter} />
      <Select condition={temperatureFilter} />
      <Select condition={windFilter} />
    </div>
  );
}
