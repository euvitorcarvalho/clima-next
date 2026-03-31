interface SelectOption {
  condition: { name: string; value: string }[];
  isFilterOpen?: boolean;
}

export default function Select({ condition, isFilterOpen }: SelectOption) {
  return (
    <select className={`${isFilterOpen ? "" : "sm:flex hidden"} bg-[#1F2D34] min-w-28 lg:h-18.75 border border-(--muted) rounded-[15px] w-full text-center py-2 text-foreground sm:text-2xl text-lg`}>
      {condition.map((option) => (
        <option className="" key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
