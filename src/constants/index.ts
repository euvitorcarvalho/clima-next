interface NavLink {
  name: string;
  href: string;
  isLightWeight: boolean;
}

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
