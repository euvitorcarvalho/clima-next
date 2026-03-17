interface SelectOption {
  condition: { name: string; value: string }[];
  isFilterOpen?: boolean;
}

export default function Select({ condition, isFilterOpen }: SelectOption) {
  return (
    <select className={`${isFilterOpen ? "" : "sm:flex hidden"} bg-[#1F2D34] border border-(--muted) rounded-lg w-full text-center py-2 text-foreground`}>
      {condition.map((option) => (
        <option className="" key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
