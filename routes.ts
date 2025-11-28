import { Ionicons } from "@expo/vector-icons";

type IoniconName = keyof typeof Ionicons.glyphMap;

interface Icon {
  start: IoniconName;
  end: IoniconName;
}

interface SubRoute {
  name: string;
  path: string;
  icon: Icon;
}

interface Route {
  title: string;
  routes: SubRoute[];
}

const routes: Route[] = [
  {
    title: "system",
    routes: [
      {
        name: "screens",
        path: "/",
        icon: {
          start: "link",
          end: "arrow-forward",
        },
      },
      {
        name: "settings",
        path: "/setting",
        icon: {
          start: "settings",
          end: "arrow-forward",
        },
      },
    ],
  },
  {
    title: "workshop",
    routes: [
      {
        name: "other",
        path: "/",
        icon: {
          start: "link",
          end: "arrow-forward",
        },
      },
    ],
  },
];

export default routes;
