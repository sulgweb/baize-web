export type Menu = {
  id: number | string;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
