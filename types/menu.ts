export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
  role:Array<string>;
  isAuth?: boolean;
};
