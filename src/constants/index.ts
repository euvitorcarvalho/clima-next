interface NavLink {
  name: string;
  href: string;
  isLightWeight: boolean;
}

interface FilterOptions {
  name: string;
  value: string;
}

export const temperatureFilter: FilterOptions[] = [
  {
    name: "Temperature",
    value: "",
  },
  {
    name: "Hot",
    value: "hot",
  },
  {
    name: "Mild",
    value: "mild",
  },
  {
    name: "Cold",
    value: "cold",
  },
];

export const windFilter: FilterOptions[] = [
  {
    name: "Wind Speed",
    value: "",
  },
  {
    name: "Low",
    value: "low",
  },
  {
    name: "Medium",
    value: "medium",
  },
  {
    name: "High",
    value: "high",
  },
];

export const conditionFilter: FilterOptions[] = [
  {
    name: "Condition",
    value: "",
  },
  {
    name: "Sunny",
    value: "sunny",
  },
  {
    name: "Cloudy",
    value: "cloudy",
  },
  {
    name: "Rainy",
    value: "rainy",
  },
];

export const links: NavLink[] = [
  {
    name: "Home",
    href: "/",
    isLightWeight: false,
  },
  {
    name: "About",
    href: "/",
    isLightWeight: true,
  },
  {
    name: "Contact Us",
    href: "/",
    isLightWeight: true,
  },
];
