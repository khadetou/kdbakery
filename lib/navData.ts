// navData.ts

interface SubmenuItem {
  title: string;
  path: string;
}

interface DropdownItem {
  title: string;
  path: string;
  active?: boolean;
  isSubmenu?: boolean;
  submenuItems?: SubmenuItem[];
}

interface NavigationItem {
  title: string;
  path: string;
  isDropdown: boolean;
  active?: boolean;
  dropdownItems?: DropdownItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    title: "Accueil",
    path: "#",
    isDropdown: false,
    active: true,
    dropdownItems: [
      { title: "Home Layout 01", path: "/index", active: true },
      { title: "Home Layout 02", path: "/index2" },
      { title: "Home Layout 03", path: "/index3" },
      { title: "Home Layout 04", path: "/index4" },
      { title: "Home Layout 05", path: "/index5" },
      { title: "Home Layout 06", path: "/index6" },
      { title: "Home Layout 07", path: "/index7" },
    ],
  },
  {
    title: "Boulangerie-Pâtisserie",
    path: "#",
    isDropdown: false,
    active: true,
    dropdownItems: [
      { title: "Home Layout 01", path: "/index", active: true },
      { title: "Home Layout 02", path: "/index2" },
      { title: "Home Layout 03", path: "/index3" },
      { title: "Home Layout 04", path: "/index4" },
      { title: "Home Layout 05", path: "/index5" },
      { title: "Home Layout 06", path: "/index6" },
      { title: "Home Layout 07", path: "/index7" },
    ],
  },
  {
    title: "Restaurant",
    path: "#",
    isDropdown: false,
    active: true,
    dropdownItems: [
      { title: "Home Layout 01", path: "/index", active: true },
      { title: "Home Layout 02", path: "/index2" },
      { title: "Home Layout 03", path: "/index3" },
      { title: "Home Layout 04", path: "/index4" },
      { title: "Home Layout 05", path: "/index5" },
      { title: "Home Layout 06", path: "/index6" },
      { title: "Home Layout 07", path: "/index7" },
    ],
  },
  {
    title: "A propos",
    path: "#",
    isDropdown: false,
  },
  // {
  //   title: "Notre Vision",
  //   path: "#",
  //   isDropdown: false,
  //   dropdownItems: [
  //     { title: "Menu 01", path: "/menubook" },
  //     { title: "Menu 02", path: "/menubook2" },
  //     { title: "Menu 03", path: "/menubook3" },
  //     { title: "Menu 04", path: "/menubook4" },
  //     { title: "Menu 05", path: "/menubook5" },
  //     { title: "Menu 06", path: "/menubook6" },
  //   ],
  // },
  // {
  //   title: "L'équipe",
  //   path: "#",
  //   isDropdown: false,
  // },
  {
    title: "Actualités",
    path: "#",
    isDropdown: false,
    dropdownItems: [
      { title: "Services", path: "/services" },
      { title: "Image Gallery", path: "/gallery-image" },
      { title: "Video Gallery", path: "/gallery-video" },
      { title: "Chefs", path: "/team" },
      { title: "Features", path: "/features" },
      { title: "Pricing", path: "/pricing" },
      { title: "Faq", path: "/faq" },
      {
        title: "Other Pages",
        path: "#",
        isSubmenu: true,
        submenuItems: [
          { title: "404 Page", path: "/404" },
          { title: "Coming Soon", path: "/coming-soon" },
        ],
      },
    ],
  },
  {
    title: "Communauté",
    path: "#",
    isDropdown: false,
    dropdownItems: [
      { title: "Blog 01", path: "/blog" },
      { title: "Blog 02", path: "/blog2" },
      { title: "Blog 03", path: "/blog3" },
      { title: "Post Single", path: "/post" },
    ],
  },
  //   {
  //     title: "Shop",
  //     path: "#",
  //     isDropdown: false,
  //     dropdownItems: [
  //       { title: "Product List", path: "/shop" },
  //       { title: "Product Single", path: "/single-product" },
  //       { title: "Cart", path: "/cart" },
  //     ],
  //   },
  //   {
  //     title: "Contact",
  //     path: "/contact",
  //     isDropdown: false,
  //   },
];

// Type guard for checking if an item has submenu
export function hasSubmenu(
  item: DropdownItem
): item is DropdownItem & { submenuItems: SubmenuItem[] } {
  return !!item.isSubmenu && Array.isArray(item.submenuItems);
}

// Type guard for checking if an item has dropdown items
export function hasDropdown(
  item: NavigationItem
): item is NavigationItem & { dropdownItems: DropdownItem[] } {
  return item.isDropdown && Array.isArray(item.dropdownItems);
}
