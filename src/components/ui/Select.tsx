interface SelectOption {
  condition: { name: string; value: string }[];
}

export default function Select({ condition }: SelectOption) {
  return (
    <select>
      {condition.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
