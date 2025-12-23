import colors from "@/constants/colors";
import { useColorScheme } from "@/context/colorSchemeContext";

export default function useColors() {
  const { resolvedScheme } = useColorScheme();
  return colors[resolvedScheme];
}
