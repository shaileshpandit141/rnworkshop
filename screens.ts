import { Ionicons } from "@expo/vector-icons";

type IoniconName = keyof typeof Ionicons.glyphMap;

interface Icon {
  start: IoniconName;
  end: IoniconName;
}

export interface Route {
  name: string;
  path: string;
  icon: Icon;
}

export interface Screen {
  title: string;
  routes: Route[];
}

const screens: Screen[] = [
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
        path: "/settings",
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
        path: "/other",
        icon: {
          start: "link",
          end: "arrow-forward",
        },
      },
    ],
  },
];

export default screens;
