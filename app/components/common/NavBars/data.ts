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
    title: "Our Systems",
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
    title: "Projects",
    url: "",
  },
{
    title: "Clients",
    url: "/our-clients",
  },
{
    title: "Partners",
    url: "/partners",
  },
{
    title: "Commitments",
    url: "/commitments",
  },


];
