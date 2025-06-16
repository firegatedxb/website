export type MenuItem = {
  title: string;
  url: string;
  children?: { title: string; url: string }[]; // Make 'children' optional
};

export const menuItems: MenuItem[] = [
  {
    title: "About",
    url: "/about",
    // children: [
    //   {
    //     title: "",
    //     url: "",
    //   },
    // ],
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "FLS Systems",
    url: "/systems",
    // children: [
    //   {
    //     title: "Commercial Projects  ",
    //     url: "/projects-list",
    //   },
    //   {
    //     title: "Industrial Oil & Gas Projects",
    //     url: "/Industrial-oil",
    //   },
    //   {
    //     title: "Data Centre Projects  ",
    //     url: "/datacentre",
    //   },
    // ],
  },

{
    title: "Portfolio",
    url: "/projects",
  },
{
    title: "Clients",
    url: "/our-clients",
  },
{
    title: "Our Partners ",
    url: "/partners",
  },
{
    title: "Commitments",
    url: "/commitments",
  },


];
